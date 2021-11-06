import * as helpers from "./helpers";

describe("store helpers", () => {
  test("Should return status object when request to server is sent", () => {
    const expectedStatus = {
      loading: true,
      success: null,
      error: null,
    };
    expect(helpers.getRequestState()).toEqual(expectedStatus);
  });
  test("Should return status object when response from server is successful", () => {
    const successResponse = "Successm";
    const expectedStatus = {
      loading: false,
      success: successResponse,
      error: null,
    };
    expect(helpers.getSuccessState(successResponse)).toEqual(expectedStatus);
  });
  test("Should return status object when response from server failed", () => {
    const error = "Not found";
    const expectedStatus = {
      loading: false,
      success: null,
      error,
    };
    expect(helpers.getErrorState(error)).toEqual(expectedStatus);
  });
  test("Should clear status object before request to server is made", () => {
    const expectedStatus = {
      loading: false,
      success: null,
      error: null,
    };
    expect(helpers.getDefaultState()).toEqual(expectedStatus);
  });
});
