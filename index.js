console.log("Hello! My name is bot. I was created in 2022. Please, remind me your name")

const prompt = require("prompt-sync") ({ sigint: true });
const name1 = prompt(); console.log(`What a great name you have, ${name1} !`);   
console.log("let me guess your age"); const name2 = prompt()
console.log("Enter reminders of dividing your age by 3, 5 and 7");
const age1 = prompt()
const age2 = prompt()
const age3 = prompt()
const age4 = (age1 * 70 + age2 * 21 + age3 * 15) % 105;
console.log(`${age4}`);
console.log(`Your age is ${age4}, that's a good time to start programming!`)