import s_getAlphabetPosition from "./helpers/service_getAlphabetPosition"
import t_estimateCarValue from "./type_estimateCarValue"
import v_estimateCarValue from "./validator_estimateCarValue"



const estimateCarValue = (estimateCarValueInput:t_estimateCarValue):number=>{
	const {model,year}=v_estimateCarValue.parse(estimateCarValueInput)

	let carValue:number = 0

	// Calculate car value from alphabet position
	for(let i=0;i<model.length;i++){
		carValue += s_getAlphabetPosition(model[i]) * 100
	}

	// Add year price
	carValue += year

	// Return
	return carValue
}

export default estimateCarValue
