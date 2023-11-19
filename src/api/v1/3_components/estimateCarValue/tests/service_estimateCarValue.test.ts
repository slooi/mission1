import estimateCarValue from "../service_estimateCarValue";

describe("estimateCarValue",()=>{
	it("standard inputs",()=>{
		expect(estimateCarValue({model:"civic",year:2014})).toBe(6614)
		expect(estimateCarValue({model:"CivIC",year:2014})).toBe(6614)
		expect(estimateCarValue({model:"CivIC",year:2020})).toBe(6620)
	})
	it("spaces",()=>{
		expect(estimateCarValue({model:"Civ IC",year:2020})).toBe(6620)
	})
	it("alphabetic + nonalphabetic characters",()=>{
		expect(estimateCarValue({model:"a`1232194][",year:2020})).toBe(2120)
	})
	it("model no specified",()=>{
		expect(()=>estimateCarValue({model:"",year:2020})).toThrow()
	})
	it("negative year",()=>{
		expect(()=>estimateCarValue({model:"a",year:-1000})).toThrow()			
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