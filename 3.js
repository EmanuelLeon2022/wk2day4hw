//  Write a function that takes bill amount and item price and says how many quarters they'd get in return
let bill = 20
let price = 3.75

let difference= ( bill - price);

let change = (difference - Math.floor(difference));

console.log("Dollars = $" + (Math.floor(difference)));
console.log("Quarters = " + (change/.25));