import express, {Request, Response} from "express";
import {z} from "zod"
import determineCarValue from "../services/s_estimateCarValue";


const SchemaGetCarValue = z.object({
	model: z.string().min(1),
	year: z.string()
	.refine((stringNumber)=>{
		const numberOrNan = Number(stringNumber);
		return !isNaN(numberOrNan) && numberOrNan>=0
	}).transform((stringNumber) => {
		return Number(stringNumber)
	}),
});

const c_EstimateCarValue = (req:Request,res:Response)=>{
	try{
		const validatedQuery = SchemaGetCarValue.parse(req.query)
		const carValue = determineCarValue(validatedQuery.model,validatedQuery.year)
		res.json({car_value:carValue})
	}catch{
		res.json({error:"there was an error"})
	}
}


export default c_EstimateCarValue