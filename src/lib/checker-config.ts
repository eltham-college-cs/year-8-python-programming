/**
 * How strictly program output is compared with the expected output.
 *
 * These two settings are the only place to change if CodeBash turns out to
 * behave differently (SPEC § 7, "To confirm with Mr Gordon").
 */
export const checkerConfig = {
  /**
   * Include the text printed by input("prompt") in the compared output.
   * Real Python writes the prompt to the screen, so exact comparison keeps it.
   * CodeBash auto-marked tasks use input() with no prompt, so this rarely matters,
   * and the checker gives a dedicated hint when a prompt is the only difference.
   */
  includePrompts: true,
  /** Ignore spaces at the end of each line before comparing. */
  trimLineEnds: false,
};

export type CheckerConfig = typeof checkerConfig;

/** Seconds a single test may run before we assume it repeats forever. */
export const TIMEOUT_MS = 3000;
