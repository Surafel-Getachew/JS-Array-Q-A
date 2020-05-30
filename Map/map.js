// Doubling numbers inside the array;
const numbers = [1,2,3,4,5];

const numbersDouble = numbers.map((number) => {
    return number *2;
})
const multiplyByIndex = numbers.map((number,index) => {
    return number * index;
})

console.log(numbersDouble);
console.log(multiplyByIndex);

// total coast of each item

const products = [
    {
        name:"laptop",
        price:2000,
        count:5
    },
    {
        name: "phone",
        price: 4000,
        count: 2
    },
    {
        name: "desktop",
        price: 2000,
        count: 5
    }
];

const coastOfProducts = products.map((item) => ({
    name:item.name,
    totalCoast:item.price * item.count
}))

console.log(coastOfProducts);

// converting array of strings to numbers

const str = ["1","2","3","4","5"];

const toNumber = str.map(Number);

console.log(toNumber);