// Config
const game = document.getElementById("game");
const context = game.getContext("2d");


// Imports:
import { freddy } from "./enteties/enteties/FREDDY.js";


// Setup
const Freddy = new freddy(context);


// Starting Components
Freddy.start();



// Update
setInterval(() => {
    // Clearing Screen
    context.clearRect(0, 0, game.width, game.height);


    // Calling Update in components
    Freddy.update();
}, 60);