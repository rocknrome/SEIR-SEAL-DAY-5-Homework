/////GLOBAL VARIABLES DECLARATION AND IMPORTING REQUIRED MODULES
const tools = [
  "Teeth", 
  "Rusty Scissors", 
  "Old-Timey Push Lawnmower", 
  "Fancy Battery-Powered Lawnmower", 
  "Team of Starving Students"
];

let bankAccount = 0; // Bank account global variable declaration
let earnings = 0; // Declaring and initializing the earnings variable
let currentTool = tools[0]; // Initializing the first element of the array of tools

const readlineSync = require('readline-sync');

/////IMPLEMENTING WORK DAY LOGIC
while (true) { // Running the work day logic
  console.log(`\nCurrent Tool: ${currentTool}`); // Displaying the current tool used
  console.log(`Bank Account: $${bankAccount}`); // Displaying current bank value

  /// Checking the WON condition:
  if (bankAccount >= 1000 && currentTool === tools[tools.length - 1]) {
    console.log("****************************************"); // Displaying congrats message
    console.log("***Congratulations! You won the game!***");
    console.log("****************************************");
    break; // Finishing up and exiting the game
  }

  /// Typical day logic, main window display
  console.log(`What do you want to do today?`); // Offering to run the day logic
  console.log(' 0: Work today', '\n', '1: Do not work today', '\n', '2: Upgrade tool'); // Offering choices

  const choice = readlineSync.questionInt('Enter your choice: '); // Asking for input (https://www.codecademy.com/article/getting-user-input-in-node-js)

  switch (choice) { // Decided to use switch-case for my model
    // Logic for "work today"
    case 0:
      console.log('You chose to work today.');
      // Executing code for "Work today"
      // Updating bank account based on the tool used
      if (currentTool === tools[0]) {
        bankAccount += 1;
      } else if (currentTool === tools[1]) {
        bankAccount += 5;
      } else if (currentTool === tools[2]) {
        bankAccount += 50;
      } else if (currentTool === tools[3]) {
        bankAccount += 100;
      } else if (currentTool === tools[4]) {
        bankAccount += 250;
      }
      break;

    // Logic for "do not work today"
    case 1:
      // Clearing the terminal and restarting the initial while loop
      console.clear();
      console.log('*You chose not to work yesterday.*');
      console.log('----------------------------------');
      break; // Implement break instead of `continue` to be able to use option 1 multiple times in a row.

    case 2:
      // Executing code for "Upgrade tool"
      console.log('You chose to upgrade your tool.');
      // Exiting the loop
      break;

    default:
      // Clearing the terminal and continuing to the next iteration of the loop for invalid choices
      console.clear();
      console.log("Invalid choice. Please choose 0, 1, or 2.");
      continue; // Continuing to the next iteration of the loop
  }

  ///// IMPLEMENTING UPGRADE TOOL LOGIC
  if (currentTool === tools[0] && bankAccount >= 5) {
    currentTool = tools[1];
    bankAccount -= 5;
  } else if (currentTool === tools[1] && bankAccount >= 25) {
    currentTool = tools[2];
    bankAccount -= 25;
  } else if (currentTool === tools[2] && bankAccount >= 250) {
    currentTool = tools[3];
    bankAccount -= 250;
  } else if (currentTool === tools[3] && bankAccount >= 500) {
    currentTool = tools[4];
    bankAccount -= 500;
  } else {
    console.log("**You don't have enough money to upgrade**");
  }
}
