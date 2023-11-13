const readlineSync = require('readline-sync');

while (true) { // running the day logic
  console.log("Do you want to work today?");
  console.log(' 0: Work today', '\n', '1: Do not work today', '\n', '2: Upgrade tool');

  const choice = readlineSync.questionInt('Enter your choice: ');

  switch (choice) {
    case 0:
      // Executing code for "Work today"
      console.log('You chose to work today.');
      // Exit the loop
      return;
    case 1:
      // Clearing the terminal and restarting the loop for "Do not work today"
      console.clear();
      console.log('You chose not to work yesterday.');
      continue; // Continueing to the next iteration of the loop
    case 2:
      // Executing code for "Upgrade tool"
      console.log('You chose to upgrade your tool.');
      // Exiting the loop
      return;
    default:
      // Clearing the terminal and continueing to the next iteration of the loop for invalid choices
      console.clear();
      console.log("Invalid choice. Please choose 0, 1, or 2.");
      continue; // Continueing to the next iteration of the loop
  }
}
