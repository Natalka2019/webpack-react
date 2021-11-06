import sortFunction from "./sort";

describe("store helpers", () => {
  test("Should return 0 for 5 and 5", () => {
    expect(sortFunction(5, 5)).toEqual(0);
  });
  test("Should return 1 for 8 and 2", () => {
    expect(sortFunction(8, 2)).toEqual(1);
  });
  test("Should return -1 for 3 and 4", () => {
    expect(sortFunction(3, 4)).toEqual(-1);
  });
});
