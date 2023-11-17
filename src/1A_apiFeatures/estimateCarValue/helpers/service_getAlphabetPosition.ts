
const s_getAlphabetPosition = (letter:string)=>{
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

export default s_getAlphabetPosition