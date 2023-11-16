import express from "express"
import carValue from "./routes/carValue"

const app = express()


// Middleware


// Routes
app.get("/",(req,res)=>{
	console.log("Someone has hit / route!")
	res.send("hi this is / route")
})

app.use("/api/",carValue)



export default app