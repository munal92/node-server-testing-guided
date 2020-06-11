const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  it("should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("GET /", () => {
    //RETURN CODE
    //RETURN TYPE
    //BODY SHAPE/STRUCTURE
    it("should return 200 ok", () => {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
    it("should return 200 ok using async/await", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
    it("should return api up", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "up" });
    });
  });
});
