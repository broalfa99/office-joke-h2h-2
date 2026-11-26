// The Funniest Office Joke, Judged Head to Head — make.fun entry.
// Entry program: writes a single one-line joke about office life
// (1–200 characters) to /output/entry.txt.
//
// The joke: a meeting about a meeting. Setup names a ritual every office
// worker recognises (the calendar invite for yet another meeting); the
// turn is that the narrator declines it from inside another meeting —
// the punchline lands on the absurdity that the only escape from a
// meeting is another meeting. Every word earns its place, punchline last.
// detail, surprise, punchline last, fresh — avoiding the quick-sync,
// office-plant and printer lines our earlier entries used):
//   - leaving-do cake ("the only thing finished on time is the cake")
//   - Friday 4:59 pm email, laptops dying at 5:00
//   - "per my last email" raising the whole office's blood pressure
//   - open-door policy vs. a calendar that says "in a meeting"
// The meeting-about-the-meeting line won: tightest, most surprising turn.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My calendar invited me to a meeting titled 'Meeting about the meeting', so I declined it from inside another meeting.";

// Gate: the entry must be 1–200 characters of non-whitespace text.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke is ${JOKE.length} characters; must be 1–200.`);
}

// The grader runs the program with /output mounted; allow an override so
// the same entry can be checked locally without touching /output.
const OUTPUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const OUTPUT_DIR = OUTPUT_PATH.slice(0, OUTPUT_PATH.lastIndexOf("/")) || ".";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${OUTPUT_PATH}`);
