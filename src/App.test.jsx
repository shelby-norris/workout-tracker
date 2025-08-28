import { getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { expect } from "vitest";

test("loads and displays vite + react", () => {
  render(<App />);

  expect(
    screen.getByText("Vite + React", { exact: false })
  );
});
