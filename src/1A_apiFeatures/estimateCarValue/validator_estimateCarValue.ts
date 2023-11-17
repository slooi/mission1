import { z } from "zod";
import { ERROR_CANT_PARSE_TO_NUMBER, ERROR_EMPTY_STRING, ERROR_NEGATIVE_YEAR } from "./error_estimateCarValue";


const v_estimateCarValue = z.object({
	model: z.string().min(1,ERROR_EMPTY_STRING),
	year: z.union([
		z.string()
		.refine((stringNumber)=>{
			const numberOrNan = Number(stringNumber);
			return !isNaN(numberOrNan)
		},{message:ERROR_CANT_PARSE_TO_NUMBER})
		.transform((stringNumber) => {
			return Number(stringNumber)
		}),
		z.number()
	])
	.refine((number)=>{
		return number>=0
	},{message:ERROR_NEGATIVE_YEAR}),
});

export default v_estimateCarValue