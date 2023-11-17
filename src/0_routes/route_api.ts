import express from "express";
import c_estimateCarValue from "../1_apiFeatures/estimateCarValue/controller_estimateCarValue";

const r_api = express.Router()

// Routes -> Controllers
r_api.get("/estimate-car-value",c_estimateCarValue)



export default r_api