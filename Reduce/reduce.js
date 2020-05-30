// adding all the numbers inside an array

const numbers = [1, 7, 2, 3, 4, 5];

const total = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);

console.log(total);

// finding the max number from an array;

const max = numbers.reduce((accumulator, number) => {
  if (number > accumulator) {
    accumulator = number;
  }
  return accumulator;
});

console.log(max);

// the overall coast of the items

const store = [
  {
    name: "laptop",
    value: 1000,
    count: 3,
  },
  {
    name: "mobile",
    value: 3000,
    count: 3,
  },
  {
    name: "desktop",
    value: 2000,
    count: 5,
  },
];

const totalCoast = store.reduce((accumulator, item) => {
  return (accumulator +=  (item.value * item.count));
},0);
console.log(totalCoast);
