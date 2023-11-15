const request = require('supertest');
const assert = require("assert")

import app from "./server" // Import your Express app
describe('Root Route', () => {
  it('test basic routing working', () => {
	return request(app)
		.get("/")
		.then(res=>{
			expect(res.status).toBe(200);
		})		
  });
});

describe('Car Value', () => {
    function requestGetCarValue(model:any,year:any){
      return request(app)
        .get(`/api/get-car-value?model=${model}&year=${year}`)
    }

    it('Get car value', () => {
      const inputCarModel = "civic"
      const inputCarYear = 2014
      const expectedValue = {car_value:6614}

      return requestGetCarValue(inputCarModel,inputCarYear)
        .then(res=>{
          expect(res.status).toBe(200);
          expect(res.body).toEqual(expectedValue)
          // console.log(typeof res.body.car_value)
      })		
    });
  });
// describe("GET /api", () => {
//     it("should return all products", () => {
//         return request(app)
//             .get("/api")
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .then((res) => {
//                 expect(res.statusCode).toBe(200);
//             })
//     });
// });
// describe("GET car value",()=>{
// 	it("positive testing: inputs: civic 2014 should output: 2014",()=>{
// 		return request(app)
// 			.get("/api/get-car-value")
// 			.expect(200)
// 			.then(response => {
// 				expect(response.body.test).toBe("hi")
//                 expect(response.statusCode).toBe(200);
// 			})
// 	})
// })
// describe("GET car value",()=>{
// 	it("positive testing: inputs: civic 2014 should output: 2014",()=>{
// 		return request(app)
// 			.get("/api/get-car-value2")
// 			.expect(200)
// 			.then(response => {
// 				expect(response.body.test).toBe("hi")
//                 expect(response.statusCode).toBe(200);
// 			})
// 	})
// })
