import { Person } from "./personTypes";

export function logAllPeopleInTree(topPerson: Person): void {
  const workStack: Person[] = [];
  workStack.push(topPerson);

  while (workStack.length > 0) {
    const currentPerson: Person | undefined = workStack.pop();
    if (currentPerson !== undefined) {
      console.log(currentPerson.name);
      const children: Person[] = currentPerson.children;
      for (const child of children) {
        workStack.push(child);
      }
    }
  }
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
  console.log("TODO!  First person is " + topPerson.name);
}

/* *-*-- PSEUDO CODE --*-*
function logAllPeopleInTree(rootPerson)
    workStack = empty stack of Person objects
    push rootPerson onto workStack

		while workStack is not empty: 
        currentPerson = pop person off workStack
        log the name property of currentPerson
        push each element of currentPerson's children onto the workStack
*/
