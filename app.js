console.log('app.js is connected, choose wisely!');

window.onload = function(){
    //game init
    alert("You are about to embark on a grand adventure! \n Your fate is in your hands, choose wisely!");
    //user's name
    var name = prompt("What is your name adventurer?");
    //welcome response
    alert("Welcome " + name + "!");

    //starting hitpoints between 2-12
    var startingHitPoints = Math.floor(Math.random()* 11 )+ 2;


    //damage
    var damage = startingHitPoints / 3;

    alert("You have " + startingHitPoints + " hitpoints");

    alert("You can do " + damage + " damage!");

    var weapons = ['Sword', 'Roll of Tums', 'Shotgun', 'Candybar', 'Hot Coffee', 'Machine Gun', 'Knife'];
    var weaponsDisplay = weapons.join(", ");
    alert("These are your weapons: " + weaponsDisplay);
































};
