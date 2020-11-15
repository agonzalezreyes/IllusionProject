var amount = 400;
var x_arr = new Array(amount);
var y_arr = new Array(amount);
var z_arr = new Array(amount);
var area_size;
var grid_d = 3;
var img;
var font;
'use strict';

function preload() {
  img = loadImage('joker.png');
  font = loadFont(
    "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).parent('sketch-holder');
  area_size = windowHeight/2;
  background(0);
  noFill();
  stroke(255);
  strokeWeight(6);
  for(var i = 0; i < amount; i++) {
    x_arr[i] = random(-area_size, area_size);
    y_arr[i] = random(-area_size, area_size);
    z_arr[i] = random(-area_size, area_size);
  }
}

function draw() {

  background(0);
  
  push();
  fill(255);
  textSize(14);
  textAlign(CENTER, BOTTOM);
  textFont(font);
  text("Created by Alejandrina Gonzalez Reyes", 0, windowHeight/2 - 30);
  pop();

  push();
  rotateX(frameCount / 100.0);
  rotateY(frameCount / 100.0);
  for(var i = 0; i<amount; i++) {
    point(x_arr[i], y_arr[i], z_arr[i]);
  }
  pop();
  
  let initial = 100;
  let c = -1;
  let k = -1;
  
  let x = initial;
  let y = initial;
  let z = area_size;

  translate(0, 0, z);
  
  for (var i = 0; i < grid_d; i++){
      if (i == 1) c = 1;
    
      translate(x*c, 0, 0);
      
      for (var j = 0; j < grid_d; j++){
        if (j == 1) k = 1;

        translate(0, y*k, 0);
        
        push();
        image(img, -8, -8, 16, 16);
        pop();
     }
     
     translate(0, -y*grid_d, 0);

  }
  
  translate(-x*grid_d, 0, 0);

}
