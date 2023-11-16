import express from "express"
import {determineCarValue} from "./api"
import {z} from "zod"

const PORT = 8080

const app = express()
app.get("/",(req,res)=>{
	console.log("reached!")
	res.send("hi")
})
const SchemaGetCarValue = z.object({
	model: z.string(),
	year: z.string().refine((stringNumber)=>{
		const numberOrNan = Number(stringNumber);
		return !isNaN(numberOrNan) && numberOrNan>=0
	}).transform((stringNumber) => {
		return Number(stringNumber)
	}),
});

app.get("/api/get-car-value",(req,res)=>{
	try{
		const validatedQuery = SchemaGetCarValue.parse(req.query)
		const carValue = determineCarValue(validatedQuery.model,validatedQuery.year)
		res.json({car_value:carValue})
	}catch{
		res.json({error:"there was an error"})
	}
})


app.listen(PORT,()=>{
	console.log("Listening on port "+PORT)
})

export default app