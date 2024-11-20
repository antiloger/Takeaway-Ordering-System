import request from 'supertest'
import app from '../src/index'

describe("GET /", () => {
  it("should return a text", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ msg: "local" });
  })
})
