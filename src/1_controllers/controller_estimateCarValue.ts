import {Request, Response} from "express";
import s_estimateCarValue from "../1A_apiFeatures/estimateCarValue/service_estimateCarValue";
import v_estimateCarValue from "../1A_apiFeatures/estimateCarValue/validator_estimateCarValue";


const c_EstimateCarValue = (req:Request,res:Response)=>{
	try{
		const validatedQuery = v_estimateCarValue.parse(req.query)
		const carValue = s_estimateCarValue(validatedQuery)
		res.json({car_value:carValue})
	}catch{
		res.json({error:"there was an error"})
	}
}


export default c_EstimateCarValue