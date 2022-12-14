import { createBaratheonTree } from "./families/baratheon";
import { createBritishSuccessionTree } from "./families/britain";
import { createLannisterTree } from "./families/lannister";
import { createStarkTree } from "./families/stark";
// import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./solutions/solution";
import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./treeLogging";
import { printBanner } from "./utils/bannerUtils";
import { printPersonTreeAsAscii } from "./utils/toAsciiTree";
import { logIfInTree } from "./treeLogging";
import { isDescendant } from "./treeLogging";

async function mainProgram() {
  printBanner("BARATHEON");
  printPersonTreeAsAscii(createBaratheonTree());

  printBanner("STARK");
  printPersonTreeAsAscii(createStarkTree());

  printBanner("LANNISTER");
  printPersonTreeAsAscii(createLannisterTree());

  printBanner("All people in STARK");
  logAllPeopleInTree(createStarkTree());

  printBanner("WITH STACK - british royals");
  logAllPeopleInTree(createBritishSuccessionTree());
  printBanner("WITH QUEUE - british royals");
  logAllPeopleInTreeWithQueue(createBritishSuccessionTree());
  console.log(logAllPeopleInTreeWithQueue(createBritishSuccessionTree()));

  console.log(logIfInTree("Arya", createStarkTree()));
  console.log(logIfInTree("Tyrion", createLannisterTree()));
  console.log(logIfInTree("Alessia", createLannisterTree()));

  console.log(isDescendant("Jamie", "Tywin", createLannisterTree()));
  console.log(isDescendant("Tywin", "Jamie", createLannisterTree()));
  console.log(isDescendant("George", "Anne", createBritishSuccessionTree()));
  console.log(isDescendant("Anne", "George", createBritishSuccessionTree()));
}

mainProgram();
