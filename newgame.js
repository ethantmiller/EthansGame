let gameOver = false;
let gameWin = false;
var obstacles = [];
var x = 30;
var y = 200;
var diam = 20;

function setup() {
  bg = loadImage('background.jpg');
  createCanvas(700, 500);
  
    for (var i = 0; i < 20; i++){
    obstacles.push(new Obstacle());
  }
  
      for (var i = 0; i < obstacles.length; i++){
      obstacles[i].collide();
      obstacles[i].draw();
      obstacles[i].move();
  }

}

function draw() {
  background(bg);
  rectMode(CENTER);
 
  rect(350, 80, 80, 80);
  ellipse(mouseX, mouseY, 50, 50);
  
  if (mouseX >310 && mouseX <390 && mouseY<120 && mouseY>40){
    gameWin = true;
    fill(255,0,0);
    }

gamecondition()
textSize(24);

for (var i = 0; i < obstacles.length; i++){
      obstacles[i].collide();
      obstacles[i].draw();
      obstacles[i].move();
    }
}
 
function gamecondition(){
   if (gameOver === true){
   fill(10);
   rect(width/2, height/2, 700, 500);
   fill(255);
   textSize(32);
   textAlign(CENTER, CENTER);
   text("Game Over", width/2, height/2 - 40);
   text("press space to play again", width/2, height/2 - 5);
   }
   if (gameWin === true){
   fill(10);
   rect(width/2, height/2, 700, 500);
   fill(255);
   textSize(32);
   textAlign(CENTER, CENTER);
   text("WIN!", width/2, height/2 - 40);
   text("press refresh to play again", width/2, height/2 - 5);
   } 
}

function keyPressed(){
 if (key === ' '){
       gameOver = false;
     }
   }
   
class Obstacle {
  constructor(){
    this.diam = 50;
    this.x = width + random(width);
    this.y = random(height);
  }
  draw(){
    // push();
    noStroke();
    fill(128);
    ellipse(this.x, this.y, this.diam);
    // pop();
  }
   move(){
    this.x--;
    if (this.x < -this.diam/2){
      this.x = width + random(width);
    }
  }
  
    collide(){
    var distToMe = dist(mouseX, mouseY, this.x, this.y);
    if (distToMe < this.diam/2 + diam/2){
      gameOver = true;
    }
  }
}
