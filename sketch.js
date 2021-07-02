var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  rectfix = createSprite(800, 200, 50, 80);
  rectfix.shapeColor = "red";
  rectmoving = createSprite(200, 600, 80, 30);
  rectmoving.shapeColor = "yellow";
  abc = createSprite(300, 300, 50, 80)
  abc.shapeColor = "purple";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(Istouching(fixedRect, movingRect)){
    movingRect.shapeColor = "black";
    fixedRect.shapeColor = "black";
  }
  else if(Istouching(rectfix, movingRect)){
    movingRect.shapeColor = "black";
    rectfix.shapeColor = "black";
  } 
  else if(Istouching(rectmoving, movingRect)){
    movingRect.shapeColor = "black";
    rectmoving.shapeColor = "black";
  }
  else if(Istouching(abc, movingRect)){
    movingRect.shapeColor = "black";
    abc.shapeColor = "black";
  }
  else{
    rectfix.shapeColor = "red";
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    rectmoving.shapeColor = "yellow";
    abc.shapeColor = "purple";
  }
  
  drawSprites();
}
