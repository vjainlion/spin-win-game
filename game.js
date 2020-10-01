// game for spin and win

let config = {
    width: 800,
    height: 800,
    scene: {
        preload:preload,
        create:create,
        update:update,
        spinwheel: spinwheel
    }
};

// defining state of rotation

let rotation = 0;

let game = new Phaser.Game(config);

 function preload()
{
  // load an image
    this.load.image('background',"Assets/back.jpg");
    this.load.image('wheel','Assets/wheel.png');
    this.load.image('stand','Assets/stand.png');
    this.load.image('pin','Assets/pin.png');
    this.load.image('play','Assets/play now.png');
    this.load.audio('spin','Assets/spin.wav');
    this.load.audio('success','Assets/success.mp3');
}

function create()
{
    // create an object
    
    
     let H = game.config.height;
     let W = game.config.width;
    
    this.add.sprite(0,0,'background');
    
    let pin = this.add.sprite(W/2,H/2-250,'pin');
    pin.setScale(0.25);
    pin.depth = 1;
    let stand = this.add.sprite(W/2,H/2 + 250,'stand').setScale(0.25);
    
    this.wheel = this.add.sprite(W/2,H/2,'wheel');
    this.wheel.setScale(0.25);
    
    let playNow = this.add.sprite(W/2,H/2-340,'play');
    console.log(playNow);
    
    this.soundSample = this.sound.add('spin');
    
    
    playNow.setScale(0.75);
   
    this.input.on("pointerup",spinwheel,this);
    
   
  
    
    
}

function update()
{
    console.log('In update');
    
}

let prize = ['CB BOOK','CB TSHIRT','2 EXTRA SPIN','AMAZON VOUCHER','50% OFF','NETFLIX SUBSCIPTION','100% OFF','CB SWAGPACK','70% OFF','HARD LUCK','35% OFF','3000 CB CREDITS'];
    


function spinwheel()
{
    if(rotation===0){
        this.soundSample.play();
    console.log('In SpinWheel');
    console.log(rotation);
    rotation = 1;
    let rounds = Phaser.Math.Between(2,4);
    
    let extraRound = Phaser.Math.Between(0,11);
    
    let totalAngle = rounds*360 + extraRound*30;
    
    let prizeAngle = totalAngle % 360;
    let prizeNo = prizeAngle/30;
    
    
    let tween = this.tweens.add({
        targets: this.wheel,
        angle:totalAngle,
        ease:"Cubic.easeOut",
        duration: 6000
    });
    setTimeout(function()
               {
        if(prizeNo==9)
            {
                document.querySelector('.luck').innerHTML='Oops !! Better luck next time';
            }else{
        document.querySelector('.luck').innerHTML='Congratulations!!, You have won '+prize[prizeNo];
               
            }
        rotation = 0;
        
            },5300);
    }
   
}
