import { Person } from "../personTypes";

export function createLannisterTree(): Person {
  //https://en.wikipedia.org/wiki/Template:Family_tree_of_Tytos_Lannister
  const cAndJKids: Person[] = [
    { name: "Jeoffrey", children: [] },
    { name: "Tommen", children: [] },
    { name: "Myrcella", children: [] },
  ];

  const tywinsKids: Person[] = [
    { name: "Cersei", children: cAndJKids },
    { name: "Jamie", children: cAndJKids },
    { name: "Tyrion", children: [] },
  ];

  const topPerson: Person = { name: "Tywin", children: tywinsKids };

  return topPerson;
}
