import request from "supertest";
import app from "../app";

describe("Garage Controller", () => {
  it("should must create a car correctly", async () => {
    let dataRequest = {
      type: "CARRO",
      modelo: "Onix",
      ano: 2013,
      marca: "Chevrolet",
      portas: 4,
    };

    let response = await request(app).post("/garage/create").send(dataRequest);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      modelo: "Onix",
      ano: 2013,
      portas: 4,
      marca: "Chevrolet",
    });
  });

  it("should return error when entering invalid car door number", async () => {
    let dataRequest = {
      type: "CARRO",
      modelo: "Onix",
      ano: 2013,
      marca: "Chevrolet",
      portas: 1,
    };

    let response = await request(app).post("/garage/create").send(dataRequest);

    expect(response.statusCode).toEqual(500);
  });
});
