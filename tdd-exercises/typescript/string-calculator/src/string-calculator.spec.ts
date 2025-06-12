import { describe, it, expect } from "bun:test";
import { stringCalculator } from "./string-calculator.ts";

describe("String calculator", () => {
  it("should give 0 when asked to sum no numbers", () => {
    expect(stringCalculator("")).toBe(0);
  });
});
