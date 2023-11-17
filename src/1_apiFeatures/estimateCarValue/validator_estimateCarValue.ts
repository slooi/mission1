import { z } from "zod";


const v_estimateCarValue = z.object({
	model: z.string().min(1),
	year: z.string()
	.refine((stringNumber)=>{
		const numberOrNan = Number(stringNumber);
		return !isNaN(numberOrNan) && numberOrNan>=0
	}).transform((stringNumber) => {
		return Number(stringNumber)
	}),
});

export default v_estimateCarValue