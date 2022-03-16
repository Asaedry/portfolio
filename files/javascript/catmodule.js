class Cats extends Phaser.Scene {
    

    constructor (location, source)
    {
        super();
        this._location = location;
        this._source = source;
    }

    preload() {
        this.load.spritesheet('cat', this._source, { frameWidth: 32, frameHeight: 32 });
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
        this.player = this.physics.add.sprite(this._location, -5);
        this.player.setScale(-2,2);
        this.player.play('idle');
    }

    animations(state){
        if(state === 'idle'){
            this.player.anims.play('idle', true);
        } else {
            if(state === 'right'){
                this.player.anims.play('walk', true);
                this.player.setScale(2, 2);
            }
            if (state === 'left'){
                this.player.anims.play('walk', true);
                this.player.setScale(-2, 2);
            }
        }
    }

    update() {
        
        // Handle horizontal movements
        if (this.arrow.right.isDown) {
            this.player.setVelocityX(180);
            this.animations('right');
        } else if (this.arrow.left.isDown) {
            this.player.setVelocityX(-180);
            this.animations('left')
        } else {
            this.player.setVelocityX(0);
            this.animations('idle');
        }
    }
}

export {Cats};