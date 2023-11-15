import express from "express"
import {determineCarValue} from "./api"

const PORT = 8080

const app = express()
app.get("/",(req,res)=>{
	res.send("hi")
})

app.get("/api",(req,res)=>{
	res.json({test:"hi"})
})
app.get("/api/get-car-value",(req,res)=>{
	res.json({test:"hi"})
})

app.get("/api/get-car-value2",(req,res)=>{
	res.json({test:"hi",test2:"hi"})
})

app.listen(PORT,()=>{
	console.log("Listening on port "+PORT)
})

export default app