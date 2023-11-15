import express from "express"
import {determineCarValue} from "./api"
import {z} from "zod"

const PORT = 8080

const app = express()
app.get("/",(req,res)=>{
	res.send("hi")
})
const SchemaGetCarValue = z.object({
	model: z.string(),
	year: z.string().refine((stringNumber)=>{
		const numberOrNan = Number(stringNumber);
		return !isNaN(numberOrNan) && numberOrNan>0
	}).transform((stringNumber) => {
		return Number(stringNumber)
	}),
});

app.get("/api/get-car-value",(req,res)=>{
	try{
		const result = SchemaGetCarValue.parse(req.query)
		console.log(result.model)
		console.log(result.year)
		console.log(result.model)
		console.log(result.year)
		console.log(typeof result.model)
		console.log(typeof result.year)
	}catch{
		res.json({error:"there was an error"})
	}
})

// app.get("/api",(req,res)=>{
// 	res.json({test:"hi"})
// })
// app.get("/api/get-car-value2",(req,res)=>{
// 	res.json({test:"hi",test2:"hi"})
// })

app.listen(PORT,()=>{
	console.log("Listening on port "+PORT)
})

export default app