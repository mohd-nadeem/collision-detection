var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 20, 70);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(200, 200, 30, 50);
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
        movingRect.shapeColor = "orange";
        fixedRect.shapeColor = "orange";
    }
  
    else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
    }


  drawSprites();
}