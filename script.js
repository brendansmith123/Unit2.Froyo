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
