import React from "react";

import App from "./App";
import { render } from "@testing-library/react";

test("Finding hello world", () => {
  const renderRes = render(<App />);
  const textRes = renderRes.getByText(/Hello world/i);
  expect(textRes).toBeInTheDocument();
});
