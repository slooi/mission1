import v_estimateCarValue from "./validator_estimateCarValue";
import z from "zod"

type t_estimateCarValue = z.infer<typeof v_estimateCarValue>

export default t_estimateCarValue