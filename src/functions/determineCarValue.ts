export const ERROR_ARGUMENT_LENGTH_NOT_ONE = new Error("An argument with length > 1 was used as a parameter! This is NOT allowed!")
export const ERROR_MODEL_NOT_SPECIFIED = new Error("No model was specified!")
export const ERROR_NEGATIVE_YEAR = new Error("Negative years are NOT accepted.")



export default function determineCarValue(model:string,year:number):number{
	if (model.length === 0){
		throw ERROR_MODEL_NOT_SPECIFIED
	}
	if (year<0){
		throw ERROR_NEGATIVE_YEAR
	}

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

export function getAlphabetPosition(letter:string){
	// Expects a string with length 1 representing a single alphabet
	// Returns the position of alphabet (eg: a=>1,A=>1,Z=>26)

	// Check
	if (letter.length > 1) throw ERROR_ARGUMENT_LENGTH_NOT_ONE

	// Determine position of alphabet
	const charCode:number = letter.toLowerCase().charCodeAt(0)
	if (charCode >= 97 && charCode <= 97+25){
		return charCode-96
	}

	// Return
	return 0
}