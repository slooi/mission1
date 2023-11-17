import { z } from "zod"
import v_getAlphabetPosition from "./validator_getAlphabetPosition"

type t_getAlphabetPosition = z.infer<typeof v_getAlphabetPosition>
export default t_getAlphabetPosition