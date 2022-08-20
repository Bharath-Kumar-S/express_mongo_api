import request from "supertest";
import app from "./server.js";

describe("first test", () => {
  test("1st tests", async () => {
    const response = await request(app).post("/deck").send({
      type: "FULL",
      shuffled: false,
    });
    expect(response.statusCode).toBe(201);
  });
});
