import { z } from "zod"
import ERROR_STRING_MUST_BE_OF_LENGTH_ONE from "./error_getAlphabetPosition"

const v_getAlphabetPosition = z.string().length(1,{message:ERROR_STRING_MUST_BE_OF_LENGTH_ONE})

export default v_getAlphabetPosition