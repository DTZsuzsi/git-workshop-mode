// Task: Create a function that shows an ordered list from the items.

// Execute: node pets.js

//  Example output:
//  1. Cat
//  2. Dog
//  ...

const pets = ['Cat', 'Dog', 'Hamster', 'Guinea Pig', 'Salmon'];

function main() {
  let count = 1;
  const callingArray = [];
  pets.forEach((pet) => {
    callingArray.push(`${count}. ${pet}`);
    count++;
  });

  return callingArray;
}

console.log(main(pets));
