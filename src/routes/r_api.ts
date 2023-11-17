import express from "express";
import c_EstimateCarValue from "../controllers/c_estimateCarValue";

const r_api = express.Router()

// Routes -> Controllers
r_api.get("/estimate-car-value",c_EstimateCarValue)



export default r_api