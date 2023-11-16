import express, { Router } from "express";
import {z} from "zod"
import determineCarValue from "../functions/determineCarValue";

const carValueRouter = express.Router()

const SchemaGetCarValue = z.object({
	model: z.string(),
	year: z.string()
	.refine((stringNumber)=>{
		const numberOrNan = Number(stringNumber);
		return !isNaN(numberOrNan) && numberOrNan>=0
	}).transform((stringNumber) => {
		return Number(stringNumber)
	}),
});

carValueRouter.get("/get-car-value",(req,res)=>{
	try{
		const validatedQuery = SchemaGetCarValue.parse(req.query)
		const carValue = determineCarValue(validatedQuery.model,validatedQuery.year)
		res.json({car_value:carValue})
	}catch{
		res.json({error:"there was an error"})
	}
})



export default carValueRouter