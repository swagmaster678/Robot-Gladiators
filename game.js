var playerName = prompt("what is your robot's name?"); 
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyAttack, enemyHealth);

var fight = function() {
    alert ("Welcome to Robot Gladiators");

var promptFight = window.prompt ("would you like to 'FIGHT' or 'SKIP' to choose.")

    //prompts user to fight, pressing confirm will make them fight.
if (promptFight === "fight" || promptFight === "FIGHT") { 

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth = enemyAttack;

console.log(
  enemyName + " attacked " + playerName + " , " + playerName + " now has " + playerHealth + " health reamining. ")
};
//checking players health
if (playerHealth <= 0) {
  alert (playerName + " has died!");
}
else {
  alert (playerName + "still has " + playerHealth + " health left. ")
}

fight();

var confirmSkip = confirm ("Are you sure you'd like to quit?");

if (confirmSkip){
  alert (playerName + " has decided to skip this fight. Goodbye!");
  playerMoney = playerMoney - 2;
}
 else {
   fight();
 }
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
//checking enemy's health
if (enemyHealth <= 0) {
  alert (enemyName = " has died!");
}
else {
  alert (enemyName + " still has " + enemyHealth + " health left.");
}
}
// if player choses to skip 
else if (promptFight === "skip" || promptFight === "SKIP") {
  alert(playerName + " has chosen to skip the fight!");
}
else { 
  alert("You need to choose a valid option. Try again!")
}