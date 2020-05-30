// Return even numbers only from the array;
const numbers = [1,2,3,4,5,6];

const even = numbers.filter((number) => {
    return number % 2 == 0;
});

console.log(even);

// Return Adults from the array i.e age > 18;

const people = [
    {
        name:"jhone",
        age:21
    },
    {
        name:"doe",
        age:14
    },
    {
        name:"chris",
        age:80
    }
];

const adults = people.filter((adult) => {
    return  adult.age >= 18;
});

console.log(adults);

// remove repeated numbers

const Repeatednumbers = [1,2,8,2,3,4,5,4,3,5,6,8,6,7,1,7];


const notRepeated = Repeatednumbers.filter ((number,index,arr) => {
    return arr.indexOf(number) == index;
});

console.log(notRepeated);








