var scope,scopeImg;
var score = 0;
var enemyGroup1,enemyGroup2,enemyGroup3,enemyGroup4;

var enemynum = 1;
var bg,bgImg;
function preload(){
  scopeImg = loadImage("scope.png");
  bgImg = loadImage("bg2.jpg");

}

function setup(){
  createCanvas(1400,800);
  bg = createSprite(900,400,1400,800);
  bg.addImage(bgImg);
  bg.scale = 4;
  scope = createSprite(mouseX,mouseY,1,1);
  scope.addImage(scopeImg);
  scope.scale = 0.3;
  enemyGroup1 = new Group();
  enemyGroup2 = new Group();
  enemyGroup3 = new Group();
  enemyGroup4 = new Group();

}

function draw(){
  background("red");
  scope.x = mouseX;
  scope.y = mouseY;

  enemies();
  drawSprites();

  if(enemyGroup1.isTouching(scope)) {
    score = score+100;
    enemyGroup1.destroyEach();
  }

  if(enemyGroup2.isTouching(scope)) {
    score = score+100;
    enemyGroup2.destroyEach();
  }

  if(enemyGroup3.isTouching(scope)) {
    score = score+100;
    enemyGroup3.destroyEach();
  }

  if(enemyGroup4.isTouching(scope)) {
    score = score+100;
    enemyGroup4.destroyEach();
  }

  textSize(30);
  text("score : " + score ,1000,50);

}

function enemies() {
  if(frameCount % (180) === 0) {

    var e = createSprite(0,560,20,200);
    e.addAnimation("1.png","2.png","3.png","4.png","5.png");
    e.scale = 0.5;
    e.velocityX = 6;
    e.lifetime = 235;
    enemyGroup1.add(e);

  }

  if(frameCount % (240) === 0) {
    var e2 = createSprite(0,560,20,200);
    e2.addAnimation("1.png","2.png","3.png","4.png","5.png");
    e2.scale = 0.5;
    e2.velocityX = 6;
    e2.lifetime = 235;
    enemyGroup2.add(e2);
  }

  if(frameCount % (300) === 0) {
    var e3 = createSprite(0,560,20,200);
    e3.addAnimation("1.png","2.png","3.png","4.png","5.png");
    e3.scale = 0.5;
    e3.velocityX = 6;
    e3.lifetime = 235;
    enemyGroup3.add(e3);
  }

  if(frameCount % (360) === 0) {
    var e4 = createSprite(0,560,20,200);
    e4.addAnimation("1.png","2.png","3.png","4.png","5.png");
    e4.scale = 0.5;
    e4.velocityX = 6;
    e4.lifetime = 235;
    enemyGroup4.add(e4);
  }

}