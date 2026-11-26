// Everyday Things, Two Lines — entry for the "Everyday Things, Two Lines,
// Longer Run" bounty.
//
// The entry is two lines about a toaster, printed one per line.

const lines: string[] = [
  "A toaster is a tiny sunbed for bread: your slice lies flat under glowing hot wires that tan it golden-brown, then it pops up when it's done.",
  "The sunbed comparison works because both use lying flat under glowing heat to turn something brown, but it leaves out that bread has no choice and no sunscreen — stay in too long and it doesn't tan, it burns.",
];

function printEntry(entry: string[]): void {
  // The bounty asks for exactly two lines — refuse to print anything else.
  if (entry.length !== 2) {
    throw new Error(`expected exactly 2 lines, got ${entry.length}`);
  }
  for (const line of entry) {
    console.log(line);
  }
}

printEntry(lines);
