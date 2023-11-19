import s_getAlphabetPosition from "../service_getAlphabetPosition"


describe("getAlphabetPosition",()=>{
	it("standard inputs",()=>{
		expect(s_getAlphabetPosition("a")).toBe(1)
		expect(s_getAlphabetPosition("A")).toBe(1)
		expect(s_getAlphabetPosition("b")).toBe(2)
		expect(s_getAlphabetPosition("z")).toBe(26)
		expect(s_getAlphabetPosition("Z")).toBe(26)
	})
	it("non-ascii should be ignored",()=>{
		expect(s_getAlphabetPosition("ア")).toBe(0)
		expect(s_getAlphabetPosition("`")).toBe(0)
	})
	it("Length too long", ()=>{
		expect(()=>s_getAlphabetPosition("SS")).toThrow()
	})
})