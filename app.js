console.log('app.js is connected, choose wisely!');

window.onload = function(){
    alert("You are about to embark on a grand adventure! \n Your fate is in your hands, choose wisely!");
    var name = prompt("What is your name adventurer?");

    console.log(name);

    alert("Welcome " + name + "!");
};
