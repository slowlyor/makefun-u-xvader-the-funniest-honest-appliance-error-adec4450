import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Honest Appliance Error — one deadpan line from a washing
// machine that did exactly what it was built to do, to the wrong thing:
// it cleaned the passport, which is precisely why the passport is ruined,
// and the owner finds out three hours before the flight.
const line =
  "ERROR E04: I washed your passport. It is clean, unreadable, and useless. Your flight leaves in three hours.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
