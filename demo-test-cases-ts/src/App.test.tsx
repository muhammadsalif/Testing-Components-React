import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

test("Finding Hello World", () => {
  const renderRes = render(<App></App>);
  const helloElement = renderRes.getByText(/hello world/i);
  expect(helloElement).toBeInTheDocument();
});
//
