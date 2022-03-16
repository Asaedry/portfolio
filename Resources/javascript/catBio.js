import { Cats } from "./catmodule.js";

const catSprites = "./resources/imgs/cats/CatSpriteSheet.png";
let location;
const header = document.getElementById('header')

if(header.style.display === 'flex'){
    location = 120
} else {
    location = 320;
}

const bioCat = new Cats(location, catSprites);

const config = {
    type: Phaser.Game,
    width: 355,
    height: 25,
    backgroundColor: "#5c5c5c",
    physics: {
        default: 'arcade',
    },
    scene: bioCat,
    parent: "game"
}

var game = new Phaser.Game(config);    
   

