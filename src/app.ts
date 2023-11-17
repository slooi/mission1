import express from "express"
import r_api from "./0_routes/r_api"

const app = express()


// Middleware


// Routes
app.get("/",(req,res)=>{
	console.log("Someone has hit / route!")
	res.send("hi this is / route")
})

app.use("/api",r_api)



export default app