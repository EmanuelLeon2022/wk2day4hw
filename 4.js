/*4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount. 
Return in as large denominations as possible. Parameters should be amount paid and amount cost*/

let bill = 104; // This part is the amount that you have paid.//
let price = 50; // This is the price of the transaction (Whether individual product or multiple is not my concern. MUNNY IS MUNNY).//
let diff = (bill - price);// This is the money the cash register has to work with//
let michelle = (Math.floor(diff/10));
let brian = (diff % 10)
let billy = (Math.floor(brian / 5)); //gives the number of five-dollar bilss required to return
let robert =( brian % 5); //gives the remainder of dollar bills
console.log("Ten-Dollar Bills = " + michelle)
console.log("Five-Dollar Bills = " + billy);
console.log("Dollar Bills = " + robert);