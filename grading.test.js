const { languages, humanites, sciences } = require("./grading");

describe("Test for grading", () => {
  it("should return the correct grade for sciences", () => {
    expect(sciences(80)).toEqual("A");
    expect(sciences(65)).toEqual("B");
    expect(sciences(50)).toEqual("C");
  });
  it("should return the correct grade for humanites", () => {
    expect(humanites(89)).toEqual("A");
    expect(humanites(70)).toEqual("B");
    expect(humanites(60)).toEqual("C");
  });
  it("should return the correct grade for languages", () => {
    expect(languages(82)).toEqual("A");
    expect(languages(65)).toEqual("B");
    expect(languages(56)).toEqual("C");
  });
});
