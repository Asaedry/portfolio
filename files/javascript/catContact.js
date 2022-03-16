import { Cats } from "./catmodule.js";


const catSprites = "../files/imgs/cats/CatSpriteSheet.png";
const location = 400;
const contCat = new Cats(location, catSprites);

const config = {
    type: Phaser.Game,
    width: 2000,
    height: 25,
    backgroundColor: "#5c5c5c",
    physics: {
        default: 'arcade',
    },
    scene: contCat,
    parent: "game-contact"
}

var game = new Phaser.Game(config);    

