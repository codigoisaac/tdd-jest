const supertest = require("supertest");
const api = require("./api");

describe("API tests", () => {
  test("Root - GET /", async () => {
    const response = await supertest(api).get("/");

    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("The API is working!");
  });

  test("Aplicar Desconto - GET /applyDiscount/10/5", async () => {
    const response = await supertest(api).get("/applyDiscount/10/5");

    expect(response.statusCode).toEqual(200);
    expect(response.body.newValue).toEqual(5);
  });
});
