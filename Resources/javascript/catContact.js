
class Example extends Phaser.Scene {
    
    walking = false;

    constructor ()
    {
        super();
    }

    preload() {
        this.load.spritesheet('cat', 'https://github.com/Asaedry/portfolio/tree/main/Resources/imgs/cats/CatSpriteSheet.png', { frameWidth: 32, frameHeight: 32 });
    }

    create () {
        this.arrow = this.input.keyboard.createCursorKeys();
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('cat', { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('cat', { frames: [ 32, 33, 34, 35, 36, 37, 38, 39]}),
            frameRate: 8,
            repeat: -1
        });
        this.player = this.add.sprite(400, -5);
        this.player.setScale(2,2);
        this.player.play('idle');
    }


    update() {
        //handle animation changes
        this.input.keyboard.on('keydown-RIGHT', () => {
            this.player.play('walk');
            this.player.setScale(2, 2)
        })
        this.input.keyboard.on('keyup-RIGHT', () => {
            if(!this.arrow.left.isDown) {
            this.player.play('idle');
            }
        })
        this.input.keyboard.on('keydown-LEFT', () => {
            this.player.play('walk');
            this.player.setScale(-2, 2)
        })
        this.input.keyboard.on('keyup-LEFT', () => {
            if(!this.arrow.right.isDown) {
            this.player.play('idle');
            }
        })

        // Handle horizontal movements
        if (this.arrow.right.isDown) {
            this.player.x += 3;
        } else if (this.arrow.left.isDown) {
            this.player.x -= 3;
        } 
    }
}


const config = {
    type: Phaser.Game,
    width: 2000,
    height: 25,
    backgroundColor: "#5c5c5c",
    physics: {
        default: 'arcade',
    },
    scene: [Example],
    parent: "game-contact"
}

    var game = new Phaser.Game(config);    

