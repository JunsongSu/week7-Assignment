console.log (`-------------step 1-----------------`);

ages = [3, 9, 23, 64, 2, 8, 28, 93];

subt = ages [ages.length -1] - ages [0];
console.log (subt);

ages.push (100);
console.log (ages);

let sum = 0;
for (i = 0; i < ages.length ; i++){
    sum += ages [i];
}
avg = sum/ages.length;
console.log (avg);

console.log (`-------------END-----------------`);



console.log (`-------------step 2-----------------`);

names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
// const joinAllWords = names.join('');
// console.log (joinAllWords);
// const splitAllWords = joinAllWords.split('');
// console.log (splitAllWords);

// const splitWord = names [0].split('');
// // console.log (splitWord);
// console.log (splitWord.length);

let sumOfAllLetters = 0
for (let i = 0; i <names.length; i++) {
    const splitedWord = names[i].split('');
    const numberOfLetters = splitedWord.length;
    // console.log (numberOfLetters);
    sumOfAllLetters += numberOfLetters;  
           
}
const avgLetterInWord = sumOfAllLetters/names.length;
console.log (avgLetterInWord.toFixed(1));

// below is step 2 b, concatenate all the names
const joinAllNames = (names.join(' '));
console.log (joinAllNames);

console.log(`-------------END-----------------`);


console.log (`-------------step 3-----------------`);
numArray = [1,2,3,4,5];
console.log (numArray [numArray.length -1]);
console.log(`-------------END-----------------`);


console.log (`-------------step 4-----------------`);

console.log (numArray [0]);

console.log(`-------------END-----------------`);

console.log (`-------------step 5-----------------`);
let nameLengths = new Array ();
for (let i=0; i<names.length; i++){
    
    const splitedName = names [i].split('');
    nameLengths.push (splitedName.length);
}
console.log (nameLengths);

console.log(`-------------END-----------------`);


console.log (`-------------step 6-----------------`);
//caculate the sum of all the elements in nameLengths
let totalOfNameLength = 0;
//create a for loop to iterate all the elements in nameLengths
for (i=0; i <nameLengths.length; i++) {
//caculate the total of all the elements in nameLengths 
    totalOfNameLength += nameLengths [i];
}
//print out 
console.log (totalOfNameLength);

console.log(`-------------END-----------------`);

console.log (`-------------step 7-----------------`);


// repeat the word
function repeatTheWord (word, n){
    let result = '';
//iterate for n times
        for (let i = 0; i < n; i++){
//each time add one more time of the word
        result = result + word;
    }
        return result;
}
         
console.log (repeatTheWord('Hello', 3));



console.log(`-------------END-----------------`);

console.log (`-------------step 8-----------------`);
//create a full name, using arrow function
let fullname = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}

console.log (fullname('Junsong', 'Su'));
console.log(`-------------END-----------------`);

console.log (`-------------step 9-----------------`);
// return true if the sum of all the numbers in the array is greater than 100
function greaterThan100 (x) {
    let total = 0;
// use for loop to add up all the numbers in the array
    for (i = 0; i < x.length; i++){
        total += x [i];
    }
// use if condition to test if total of all numbers is greater than 100
    if (total > 100){
        return true;
    } else {
        return false;
    }
}

numArray.push (100);

console.log (greaterThan100 (numArray));
console.log(`-------------END-----------------`);

console.log (`-------------step 10-----------------`);
// retuns the average of all the elements 
function avgOfAllNumbers (y) {
    let total = 0;
// use for loop to add all the numbers in the array
    for (i=0; i < y.length; i++){
        total += y[i];
    }
// divide the total by the length
    return total/y.length;
}

console.log (avgOfAllNumbers(numArray));
console.log(`-------------END-----------------`);

console.log (`-------------step 11-----------------`);
// create an arrow function 
let compareAvg = (a,b) => {
    let totalA = 0;
// use for loop to find the total in the first array
    for (i = 0; i < a.length; i++){
        totalA += a [i];
    }
    let avgA = totalA/a.length;
// find the average for totalA

    let totalB = 0;
// find the total in the second array
    for (i = 0; i < b.length; i++){
        totalB += b [i];
    }
// find the average in totalB
    let avgB = totalB/b.length;
// use if condition to find which average is greater and return true
    if (avgA > avgB) {
        return true;
    } else {
        return false;
    }  
}
numArray2 = [1,2,3,4,5];

console.log (compareAvg (numArray,numArray2));
console.log(`-------------END-----------------`);


console.log (`-------------step 12-----------------`);

// create a function
function willBuyDrink (isHotOutside, moneyInPocket) {
// use if condition to let computer make decision 
    if (isHotOutside && moneyInPocket > 10.5){
        return true;
    } else {
        return false;
    }
}

console.log (willBuyDrink (true, 12));

console.log(`-------------END-----------------`);



