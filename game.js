var playerName = prompt("what is your robot's name?"); 
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyAttack, enemyHealth);

var fight = function() {
    alert ("Welcome to Robot Gladiators");
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  // Log a resulting message to the console so we know that it worked.

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth = enemyAttack;
  // Log a resulting message to the console so we know that it worked.
console.log(
  enemyName + " attacked " + playerName + " , " + playerName + " now has " + playerHealth + " health reamining. ")
};
if (playerHealth <= 0) {
  alert (playerName + " has died!");
}
else {
  alert (playerName + "still has " + playerHealth + " health left. ")
}

fight();

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

if (enemyHealth <= 0) {
  alert (enemyName = " has died!");
}
else {
  alert (enemyName + " still has " + enemyHealth + " health left.");
}