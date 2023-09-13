import request from "supertest";
import app from "../app";

describe("Cash Flow Controller", () => {
  it("should return correct http status code", async () => {
    let response = await request(app).get(`/cashFlow/change/${500}/${615}`);

    expect(response.statusCode).toEqual(200);
  });
});
