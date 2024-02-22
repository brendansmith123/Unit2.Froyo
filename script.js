const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavors = userInputString.split(",");

const flavor = {
  vanilla: 3,
  coffee: 2,
  strawberry: 1,
};

function countFlavors(flavors) {
  const flavorCount = {};
  flavors.forEach(flavor => {
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
  });
  return flavorCount;
}

console.table(flavors);

const flavorsArr = {
  flavors: [],
};

console.log("flavors", flavors);