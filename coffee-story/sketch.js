let coffee_exports;

let countriesNames = ["brazil", "colombia", "indonesia", "uganda", "vietnam"];
let countriesImgs = [];

let mug;

function preload() {
  coffee_exports = loadTable("./interactive.csv", "csv", "header");
  for (let i = 0; i < countriesNames.length; i++) {
    countriesImgs[i] = loadImage(`./assets/${countriesNames[i]}.png`);
  }
  mug = loadImage("./assets/mug.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ddccbe");

  //image(countriesImgs[1], 100,100, 100,60);

  //EXAMPLE LOGS
  print(coffee_exports.getRowCount() + " total rows in table");
  print(coffee_exports.getColumnCount() + " total columns in table");
  print(coffee_exports.getColumn("Area"));
  print(coffee_exports.getColumn("Area")[2]);

  //BODY COFFEE MACHINE
  noStroke();
  rectMode(CENTER);
  fill("#ddccbe");

  push();
  stroke("#997d62");
  strokeWeight(15);
  rect(windowWidth / 2, windowHeight / 2, 400, windowHeight - 100, 20);
  pop();

  //COUNTRY BUTTONS + FLAGS
  push();
  rectMode(CENTER);
  imageMode(CENTER);
  fill("#563517");
  rect(windowWidth / 2 - 110, windowHeight / 3 + 50, 100, 70, 10);
  image(
    countriesImgs[0],
    windowWidth / 2 - 110,
    windowHeight / 3 + 50,
    100,
    60
  );
  rect(windowWidth / 2, windowHeight / 3 + 50, 100, 70, 10);
  image(countriesImgs[1], windowWidth / 2, windowHeight / 3 + 50, 100, 60);
  rect(windowWidth / 2 + 110, windowHeight / 3 + 50, 100, 70, 10);
  image(
    countriesImgs[2],
    windowWidth / 2 + 110,
    windowHeight / 3 + 50,
    100,
    60
  );

  rect(windowWidth / 2 - 110, windowHeight / 3 + 130, 100, 70, 10);
  image(
    countriesImgs[3],
    windowWidth / 2 - 110,
    windowHeight / 3 + 130,
    100,
    60
  );
  rect(windowWidth / 2, windowHeight / 3 + 130, 100, 70, 10);
  image(countriesImgs[4], windowWidth / 2, windowHeight / 3 + 130, 100, 60);
  pop();

  //DISPLAY
  push();
  stroke("#563517");
  strokeWeight(5);
  rect(windowWidth / 2, windowHeight / 5 + 15, 320, windowHeight / 4 - 20, 10);
  pop();

  //SIDE
  push();
  fill("#422306");
  rect(windowWidth / 2 + 111, windowHeight/2 + 95, 100, windowHeight / 3, 4);
  fill("#271300");
  rect(windowWidth / 2 + 111, windowHeight/2 * 1.565, 80, 20, 4);
  fill("#997d62");
  rect(windowWidth / 2 + 111, windowHeight/2 - 18, 16, 16);
  image(mug, windowWidth/2 + 72, windowHeight/2 * 1.4, 80,80);
  pop();

  //Shadow
  push();
  fill("#c1a07f");
  ellipse(windowWidth / 2, windowHeight - 28, 460, 25);
  pop();

  //LEGS COFFEE MACHINE
  push();
  rectMode(CENTER);
  //left
  fill("#271300");
  rect(windowWidth / 2 - 150, windowHeight - 38, 60, 20, 8);
  //right
  rect(windowWidth / 2 + 150, windowHeight - 38, 60, 20, 8);
  fill("#563517");
  rect(windowWidth / 2, windowHeight - 68, 415, 50, 0, 0, 25, 25);
  pop();
}

function draw() {
  // if (
  //   mouseX >= windowWidth / 2 - 110 &&
  //   mouseX <= windowWidth / 2 + 110 &&
  //   mouseY >= windowHeight / 3 + 50 &&
  //   mouseY <= windowHeight / 3 + 130
  // ) {
  //   cursor("grab");
  // }
  // else{
  //   cursor(ARROW);
  // }
}

function mousePressed() {
  if(key == "b") {
    console.log("b");
  }
}

class Country {
  constructor(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }
  handleClick() {
    console.log();
  }
  display(cId, x, y) {
    image(cId, x, y);
  }
}
