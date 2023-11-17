import t_estimateCarValue from "./type_estimateCarValue"
import v_estimateCarValue from "./validator_estimateCarValue"



const estimateCarValue = (estimateCarValueInput:t_estimateCarValue):number=>{
	const {model,year}=v_estimateCarValue.parse(estimateCarValueInput)

	let carValue:number = 0

	// Calculate car value from alphabet position
	for(let i=0;i<model.length;i++){
		carValue += getAlphabetPosition(model[i]) * 100
	}

	// Add year price
	carValue += year

	// Return
	return carValue
}

// ########################################
//      		HELPER FUNCTIONS
// ########################################
const getAlphabetPosition = (letter:string)=>{
	// Expects a string with length 1 representing a single alphabet
	// Returns the position of alphabet (eg: a=>1,A=>1,Z=>26)

	// Check
	if (letter.length > 1) throw new Error("ERROR_ARGUMENT_LENGTH_NOT_ONE")

	// Determine position of alphabet
	const charCode:number = letter.toLowerCase().charCodeAt(0)
	if (charCode >= 97 && charCode <= 97+25){
		return charCode-96
	}

	// Return
	return 0
}




export default estimateCarValue
export {getAlphabetPosition}