const request = require('supertest');

import app from "./app"


describe('Root Route', () => {
	it('test basic routing working', () => {
		return request(app)
			.get("/")
			.then((res: { status: any; }) => {
				expect(res.status).toBe(200);
			})
	});
});

describe('Get Car Value', () => {
	describe("Positive Tests", () => {
		function requestGetCarValue(model: any, year: any, expectedValue: any) {
			return request(app)
				.get(`/api/estimate-car-value?model=${encodeURIComponent(model)}&year=${encodeURIComponent(year)}`)
				.then((res: { status: any; body: any; }) => {
					expect(res.status).toBe(200);
					expect(res.body).toEqual(expectedValue)
				})
		}
		
		it('Get car value normal', () => {
			const inputCarModel = "civic"
			const inputCarYear = 2014
			const expectedValue = { car_value: 6614 }

			return requestGetCarValue(inputCarModel, inputCarYear, expectedValue)
		});
		it('Get car value - capital letters', () => {
			const inputCarModel = "CIVIC"
			const inputCarYear = 2014
			const expectedValue = { car_value: 6614 }

			return requestGetCarValue(inputCarModel, inputCarYear, expectedValue)
		});
		it('Get car value - capital and lowercase letters', () => {
			const inputCarModel = "CivIC"
			const inputCarYear = 2014
			const expectedValue = { car_value: 6614 }

			return requestGetCarValue(inputCarModel, inputCarYear, expectedValue)
		});
		it('Get car value - spaces ', () => {
			const inputCarModel = "Civ I C "
			const inputCarYear = 2014
			const expectedValue = { car_value: 6614 }

			return requestGetCarValue(inputCarModel, inputCarYear, expectedValue)
		});
		it('Get car value - normal characters and non alphabetical characters ', () => {
			const inputCarModel = "CivIC1ア`~123456"
			const inputCarYear = 2014
			const expectedValue = { car_value: 6614 }

			return requestGetCarValue(inputCarModel, inputCarYear, expectedValue)
		});
		it('Get car value - normal characters and space', () => {
			const inputCarModel = "a a"
			const inputCarYear = 0
			const expectedValue = { car_value: 200 }

			return requestGetCarValue(inputCarModel, inputCarYear, expectedValue)
		});
	})
	describe("Negative Tests", () => {
		it('Get car value - normal characters and space', () => {
			const inputCarModel = ""
			const inputCarYear = 0

			return request(app)
				.get(`/api/estimate-car-value?model=${encodeURIComponent(inputCarModel)}&year=${encodeURIComponent(inputCarYear)}`)
				.then((res: { body: { error: any; }; }) => {
					expect(res.body.error).toBeTruthy()
				})
		});
		it('Extra arguments', () => {
			const inputCarModel = "a a"
			const inputCarYear = 0
			const expectedValue = { car_value: 200 }

			return request(app)
				.get(`/api/estimate-car-value?model=${encodeURIComponent(inputCarModel)}&year=${encodeURIComponent(inputCarYear)}&food="pie"`)
				.then((res: { body: any; }) => {
					expect(res.body).toEqual(expectedValue)
				})
		});
		it('Too few arguments', () => {
			const inputCarModel = "a a"

			return request(app)
				.get(`/api/estimate-car-value?model=${encodeURIComponent(inputCarModel)}`)
				.then((res: { body: { error: any; }; }) => {
					expect(res.body.error).toBeTruthy()
				})
		});		
		it('Negative year', () => {
			const inputCarModel = "a a"
			const inputCarYear = -20000

			return request(app)
				.get(`/api/estimate-car-value?model=${encodeURIComponent(inputCarModel)}&year=${encodeURIComponent(inputCarYear)}&food="pie"`)
				.then((res: { body: { error: any; }; }) => {
					expect(res.body.error).toBeTruthy()
				})
		});
	})

});