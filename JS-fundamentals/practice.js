let a = [2,4,6,8,10];
let b = [];

for(let i = 0; i < a.length; i++) {
	b.push(a[i] * a[i] *a[i]);
}

console.log(b);

let arr = [1,2,3,4,5,6,7,8,9];

let evenNumbers = arr.filter(item => item % 2 == 0);
console.log(evenNumbers);

let oddNumbers = arr.filter(item => item % 2 !== 0);
console.log(oddNumbers);

let oddNumUpdate = oddNumbers.map(item => item + 2);
console.log(oddNumUpdate);