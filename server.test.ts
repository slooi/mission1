const request = require('supertest');
import app from "./server" // Import your Express app
const assert = require("assert")

// describe('Root Route', () => {
//   it('test basic routing working', () => {
// 	return request(app)
// 		.get("/")
// 		.then(res=>{
// 			expect(res.status).toBe(200);
// 		})		
//   });
// });

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
