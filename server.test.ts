const request = require('supertest');
const assert = require("assert")

import app from "./server" 


describe('Root Route', () => {
  it('test basic routing working', () => {
	return request(app)
		.get("/")
		.then(res=>{
			expect(res.status).toBe(200);
		})		
  });
});

describe('Get Car Value', () => {
	describe("Positive Tests",()=>{
		function requestGetCarValue(model:any,year:any,expectedValue:any){
			return request(app)
				.get(`/api/get-car-value?model=${encodeURIComponent(model)}&year=${encodeURIComponent(year)}`)
				.then(res=>{
					expect(res.body).toEqual(expectedValue)
				})
		}
	
		it('Get car value normal', () => {
		  const inputCarModel = "civic"
		  const inputCarYear = 2014
		  const expectedValue = {car_value:6614}
	
		  return requestGetCarValue(inputCarModel,inputCarYear,expectedValue)
		});
		it('Get car value - capital letters', () => {
		  const inputCarModel = "CIVIC"
		  const inputCarYear = 2014
		  const expectedValue = {car_value:6614}
	
		  return requestGetCarValue(inputCarModel,inputCarYear,expectedValue)
		});
		it('Get car value - capital and lowercase letters', () => {
		  const inputCarModel = "CivIC"
		  const inputCarYear = 2014
		  const expectedValue = {car_value:6614}
	
		  return requestGetCarValue(inputCarModel,inputCarYear,expectedValue)
		});
		it('Get car value - spaces ', () => {
		  const inputCarModel = "Civ I C "
		  const inputCarYear = 2014
		  const expectedValue = {car_value:6614}
	
		  return requestGetCarValue(inputCarModel,inputCarYear,expectedValue)
		});
		it('Get car value - normal characters and non alphabetical characters ', () => {
		  const inputCarModel = "CivIC1ア`~123456"
		  const inputCarYear = 2014
		  const expectedValue = {car_value:6614}
	
		  return requestGetCarValue(inputCarModel,inputCarYear,expectedValue)
		});
		it('Get car value - normal characters and space ', () => {
		  const inputCarModel = "a a"
		  const inputCarYear = 0
		  const expectedValue = {car_value:200}
	
		  return requestGetCarValue(inputCarModel,inputCarYear,expectedValue)
		});
	})
    
});