import React from "react";
import { render, act } from "@testing-library/react";
import Overview from ".";

describe("Overview", () => {
  it("Make valid test", async () => {
    // Have to make a promise in each test and solve it at the end to avoid the act() warning
    // https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
    const promise = Promise.resolve();

    render(<Overview />);

    // eslint-disable-next-line no-return-await
    await act(async () => await promise);
  });
});
