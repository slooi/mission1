import { determineCarValue, getAlphabetPosition, ERROR_ARGUMENT_LENGTH_NOT_ONE, ERROR_MODEL_NOT_SPECIFIED} from "../src/api";

describe("determineCarValue",()=>{
	it("standard inputs",()=>{
		expect(determineCarValue("civic",2014)).toBe(6614)
		expect(determineCarValue("CivIC",2014)).toBe(6614)
		expect(determineCarValue("CivIC",2020)).toBe(6620)
	})
	it("spaces",()=>{
		expect(determineCarValue("Civ IC",2020)).toBe(6620)
	})
	it("alphabetic + nonalphabetic characters",()=>{
		expect(determineCarValue("a`1232194][",2020)).toBe(2120)
	})
	it("model no specified",()=>{
		expect(()=>determineCarValue("",2020)).toThrow(ERROR_MODEL_NOT_SPECIFIED)
	})
	it("negative year",()=>{
		expect(()=>determineCarValue("a",-1000)).toThrow()			
	})
})



describe("getAlphabetPosition",()=>{
	it("positive test",()=>{
		expect(getAlphabetPosition("a")).toBe(1)
		expect(getAlphabetPosition("A")).toBe(1)
		expect(getAlphabetPosition("b")).toBe(2)
		expect(getAlphabetPosition("z")).toBe(26)
		expect(getAlphabetPosition("Z")).toBe(26)
	})
	it("non-ascii should be ignored",()=>{
		expect(getAlphabetPosition("ア")).toBe(0)
		expect(getAlphabetPosition("`")).toBe(0)
	})
	it("Length too long", ()=>{
		expect(()=>getAlphabetPosition("SS")).toThrow(ERROR_ARGUMENT_LENGTH_NOT_ONE.message)
	})
})


/* 
         10        20
12345678901234567890123456
abcdefghijklmnopqrstuvwxyz

# standard inputs
civic 2020
(3+9+22+9+3)*100 + 2020 =6620

# only numbers
123 123

only text

negative year
*/