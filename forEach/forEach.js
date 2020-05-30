// sum all the numbers in the array;

const numbers = [1,2,3,4,5];

let sum = 0;

numbers.forEach((number) => {
    sum += number
});


// count the number of similar letters in the array;

const letters = ["a","b","c","d","c","c","c","d","d","a","B"];

let count = {};

letters.forEach((letter) => {
    if(count[letter]){
        count[letter]++;
    }
    else {
        count[letter] = 1;
    }
})

console.log(sum);
console.log(count);