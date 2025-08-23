let coffee_exports;

function preload() {
  coffee_exports = loadTable("./interactive.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ddccbe");

  //EXAMPLE LOGS
  print(coffee_exports.getRowCount() + " total rows in table");
  print(coffee_exports.getColumnCount() + " total columns in table");
  print(coffee_exports.getColumn("Area"));
  print(coffee_exports.getColumn("Area")[2]);

  //BODY COFFEE MACHINE
  noStroke();
  push();
  rectMode(CENTER);
  stroke("#997d62");
  fill("#ddccbe");
  strokeWeight(15);
  rect(windowWidth / 2, windowHeight / 2, 400, windowHeight - 100, 20);
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

function draw() {}
