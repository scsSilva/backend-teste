import request from "supertest";
import app from "../app";

describe("Palindromic Numbers Controller", () => {
  it("should return correct http status code", async () => {
    const response = await request(app).get(
      `/palindromicNumbers/list/${1}/${100}`
    );

    expect(response.statusCode).toEqual(200);
  });
});
