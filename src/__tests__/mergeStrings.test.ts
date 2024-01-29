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
});
