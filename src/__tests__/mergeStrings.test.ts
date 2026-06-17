import { mergeStrings } from "../index";

const one = "alfa";
const two = "bravo";

describe("Test mergeStrings", () => {
  it("Should return merged strings from two starting strings", () => {
    const expectedResult = "alfa bravo";
    expect(mergeStrings(one, two)).toBe(expectedResult);
  });

  it("Should return merged strings from four starting strings", () => {
    const expectedResult = "alfa bravo bravo alfa";
    expect(mergeStrings(one, two, two, one)).toBe(expectedResult);
  });

  it("Should return merged strings from four starting strings and some empty", () => {
    const expectedResult = "bravo alfa";
    expect(mergeStrings("", two, "", one)).toBe(expectedResult);
  });

  it("Should return empty string when called with no arguments", () => {
    expect(mergeStrings()).toBe("");
  });

  it("Should return the string itself when called with a single argument", () => {
    expect(mergeStrings(one)).toBe("alfa");
  });

  it("Should return empty string when all arguments are empty strings", () => {
    expect(mergeStrings("", "", "")).toBe("");
  });

  it("Should preserve internal spaces within each string", () => {
    expect(mergeStrings("hello world", "foo")).toBe("hello world foo");
  });
});
