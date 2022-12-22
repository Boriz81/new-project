function greet(a, b) {
  console.log(`Hello! My name is ${a}`);
  console.log(`I was created in ${b}`);
}

const prompt = require("prompt-sync") ({ sigint: true });

function remind_name() {
  console.log("Please, remind me your name.");
  let name = prompt();
  console.log("What a great name you have, " + name + "!");
  }

function guess_age() {
  console.log("let me guess your age"); const name2 = prompt()
  console.log("Enter reminders of dividing your age by 3, 5 and 7");
  const age3 = prompt()
  const age5 = prompt()
  const age7 = prompt()
  const age4 = (age3 * 70 + age5 * 21 + age7 * 15) % 105;
  console.log(`Your age is ${age4}, that's a good time to start programming!`)
  }

function count() {
  console.log("Now I will prove to you that I can count to any number you want"); const              
  count = prompt();
  let n = 0;
    do {
       console.log(n + "!");
       n = n + 1;
       } while (n <= count);
  }

function test() {

  console.log("Let's test your programming knowledge.");
  console.log("Why do we use methods?");
  console.log("1. To repeat a statement multiple times.");
  console.log("2. To decompose a program into several small subroutines.");
  console.log("3. To determine the execution time of a program.");
  console.log("4. To interrupt the execution of a program.");
  let tnum = Number(prompt());
if (tnum == 2) {
  while (tnum == 2) {
	  console.log("Congratulations, have a nice day!");
        break; end();
        }
    } else {
        console.log("Please, try again."); test();

      }
}

function end() {
  console.log("Completed, have a nice day!");
}


greet('Aid', '2020');
remind_name();
guess_age();
count();
test();
end();