import { describe, it, expect, beforeEach } from "bun:test";
import * as _ from "lodash";

import {TennisGame} from './tennis-score.ts'

describe("Tennis Game", () => {
  let game: TennisGame;

  beforeEach(() => {
    game = new TennisGame();
  });

  it("should be love all when no points have been scored", () => {
    expect(game.getScore()).toBe("Love All");
  });
});
