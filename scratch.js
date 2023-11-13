/////GLOBAL VARIABLES DECLARATION AND IMPORTING REQUIRED MODULES
const tools = [
  "Teeth", 
  "Rusty Scissors", 
  "Old-Timey Push Lawnmower", 
  "Fancy Battery-Powered Lawnmower", 
  "Team of Starving Students"
];

let bankAccount = 0; //bank account global variable declaration

let currentTool = tools[0]; //initializing the first element of the array of tools

const readlineSync = require('readline-sync');


/////IMPLEMENTING WORK DAY LOGIC

while (true) { // running the work day logic
  console.log(`\nCurrent Tool: ${currentTool}`); //displaing the current tool used
  console.log(`Bank Account: $${bankAccount}`); //displaying current bank value

  ///Checking the WON condition: 
  if (bankAccount >= 1000 && currentTool === tools[tools.length]) {
    console.log("****************************************"); //displaying congrats message
    console.log("***Congratulations! You won the game!***");
    console.log("****************************************");
    break; //finishing up and exiting the game
  }

  ///Typical day logic, main window diaplay
  console.log(`What do you want to do today?`); //offering to run the day logic
  console.log(' 0: Work today', '\n', '1: Do not work today', '\n', '2: Upgrade tool'); //offering choices

  const choice = readlineSync.questionInt('Enter your choice: '); //asking for input (https://www.codecademy.com/article/getting-user-input-in-node-js)

  switch (choice) { //decided to use switch-case for my model
        case 0:
          console.log('You chose to work today.');
          // Executing code for "Work today"
            //updating bank account based on the tool used
          if (currentTool === tools[0]) {
          bankAccount += 1;
          }
          else if (currentTool === tools[1]) {
          bankAccount += 5;
          }
          else if (currentTool === tools[2]) {
          bankAccount += 50;
          }
          else if (currentTool === tools[3]) {
          bankAccount += 100;
          }
          else if (currentTool === tools[4]) {
          bankAccount += 250;
          }
        break;

        //logic for "do not work today"
        case 1:
          // Clearing the terminal and restarting the initial while loop
          console.clear();
          console.log('*You chose not to work yesterday.*');
          console.log('----------------------------------');
        break; // implement break instead of `continue` to be able to use option 1 multiple times in a raw.

        case 2:
          // Executing code for "Upgrade tool"
          console.log('You chose to upgrade your tool.');
          // Exiting the loop
        break;

        default:
          // Clearing the terminal and continueing to the next iteration of the loop for invalid choices
          console.clear();
          console.log("Invalid choice. Please choose 0, 1, or 2.");
        continue; // Continueing to the next iteration of the loop
  }
}
