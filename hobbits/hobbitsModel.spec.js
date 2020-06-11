const Hobbits = require("../hobbits/hobbitsModel.js");
const db = require("../data/dbConfig.js");

describe("Hobbits Model", () => {
  describe("insert()", () => {
    it("should insert the provided hobbits into DB", async () => {
      await Hobbits.insert({ name: "gaffer" });
      await Hobbits.insert({ name: "sam" });

      const hobbits = await db("hobbits");
      // expect(hobbits).toHaveLength(2); reset DB
      expect(hobbits).toHaveLength(6);
    });
    it("should insert what was inserted", async () => {
      let hobbit = await Hobbits.insert({ name: "gaffer" });
      expect(hobbit.name).toBe("gaffer");

      hobbit = await Hobbits.insert({ name: "sam" });
      expect(hobbit.name).toBe("sam");
    });
    // beforeEach(async () => {
    //     await db
    // })
  });
});
