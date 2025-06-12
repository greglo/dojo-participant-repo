import { describe, it, expect, beforeEach } from "bun:test";
import { Game } from "./bowling-game.ts";

describe("Bowling Game", () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it("should have a score of 0 if no pins are knocked over", () => {
    game.score(0);
    expect(game.getScore()).toBe(0);
  });
});
