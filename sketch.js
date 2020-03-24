var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

let unicorn;
let uImg;
let tImg;
let bImg;
let trains = [];
let interval = 10;
let achive = 0;

bImg = new Image();
bImg.src="b.jpg";

uImg = new Image();
uImg.src = "unicorn.png"

tImg = new Image();
tImg.src = "train.png"
unicorn = new Unicorn(cvs.height-30);
  

tImg.onload = draw;




function jump(){
    unicorn.jump();
}
document.addEventListener("keydown", jump);



function draw() {
  
    if (Math.random()< 0.005) {
      trains.push(new Train(cvs.height-80,cvs.width));
    }
    
    ctx.drawImage(bImg,0,0)

    for (let t of trains) {
        ctx.drawImage(tImg,t.x,t.y);
        t.move();
        if( (unicorn.x>= t.x-20 && unicorn.x<t.x+20) && (unicorn.y>= t.y-50)){
            alert('game over\nочки: '+trains.length);
            trains.splice(0,trains.length);         
        }
       
    }
    ctx.drawImage(uImg,unicorn.x,unicorn.y);
    unicorn.move();
    requestAnimationFrame(draw);
}