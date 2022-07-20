var gardenImg
var garden
var catImg1, catImg2, catImg3, catImg4, cat
var mouseImg1, mouseImg2, mouseImg3, mouseImg4, mouse

function preload() {
gardenImg = loadImage("images/garden.png")
catImg1 = loadImage("images/cat1.png")
catImg2 = loadImage("images/cat2.png")
catImg3 = loadImage("images/cat3.png")
catImg4 = loadImage("images/cat4.png")
mouseImg1 = loadImage("images/mouse1.png")
mouseImg2 = loadImage("images/mouse2.png")
mouseImg3 = loadImage("images/mouse3.png")
mouseImg4 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(450,370)
garden.addImage("garden",gardenImg)
cat = createSprite(350,500)
cat.addAnimation("cat_sitting",catImg4)
cat.scale = 0.2
mouse = createSprite(450,600)
mouse.addAnimation("mouse_gift",mouseImg1)
mouse.scale = 0.2
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === RIGHT_ARROW){
  mouse.addAnimation("mouse_teasing", mouseImg3)
  mouse.changeAnimation("mouse_teasing")
  mouse.frameDelay = 10
  cat.x = cat.x+20
}

if (keyCode === LEFT_ARROW){
    mouse.addAnimation("mouse_teasing", mouseImg3)
    mouse.changeAnimation("mouse_teasing")
    mouse.frameDelay = 10
    cat.x = cat.x-20
  }
}