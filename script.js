const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavors = {
  vanilla: 3,
  coffee: 2,
  strawberry: 1,
};

console.table(flavors);

const flavorsArr = {
  flavors: [],
};

for (let i = 0; i < flavorsArr.length; i++) {
  if (flavorsArr[i] % 2 === 1) {
    flavors.odds.push(flavorsArr[i]);
  }
}
console.log("flavors", flavors);
