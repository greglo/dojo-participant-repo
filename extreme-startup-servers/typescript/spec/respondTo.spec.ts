import { describe, it, expect } from "bun:test";
import * as _ from "lodash";

import {respondTo} from '../src/respondTo.ts'

describe("respondTo", () => {
  it("should return an unknown query message when the query is unrecognized", () => {
    expect(respondTo("Invalid query")).toBe("Unknown query 'Invalid query'");
  });
});
