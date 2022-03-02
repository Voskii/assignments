const readline = require("readline-sync");
const name = readline.question("What is your name? ");
    console.log("Greetings, " + name + "!")
var mood = readline.question("Are you well on this day? ");
    console.log("Welp, it's time to Die! Or not /shrug ");
    readlineSync.keyInPause();
    console.log("Heavy Breathing");
    console.log("You have found yourself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts their hand in the hole, they die. Side Note..You can't open the door unless you find the key first. You die if you put your hand in the hole :).");
var choices = ["Put hand in hole", "Find the key", "Open the door"];
var selectChoice = readlineSync.keyInSelect(choices, "What choice are you making");


    if(index = 1){
        hasKey = true
}   else{
        hasKey = false
}


while(hasKey = false){
    if(selectChoice === 0){
        console.log("YOU DIED");
}   else if(index === 1){
        console.log("Okay, you have the key!");
}   else {    
        console.log("YOU DIED");
    }
}
while(hasKey = true){
      if(selectChoice === 0){
        console.log("YOU DIED");
    } else if(selectChoice === 1){
        console.log("You already have the key..");
    } else {    
        console.log("YOU ESCAPED!");
    }
}