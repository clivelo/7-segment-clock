const gap = 8;
let hrs, mins, secs;
let lineLength;
let w;
let d1, d2, d3, d4, d5, d6;

function setup() {
  createCanvas(450, 300);
  frameRate(60);
  lineLength = width / 3 / 2 - 5 * gap;
  w = lineLength + 2 * gap;
  d1 = new Digit('8', -3);
  d2 = new Digit('8', -2);
  d3 = new Digit('8', -1);
  d4 = new Digit('8', 0);
  d5 = new Digit('8', 1);
  d6 = new Digit('8', 2);
}

function draw() {
  background(0);
  translate(width / 2, 0);
  stroke(10, 200, 100);
  strokeWeight(8);
  line(-width / 6, height / 2 - gap, -width / 6, height / 2 - gap);
  line(-width / 6, height / 2 + gap, -width / 6, height / 2 + gap);
  line(width / 6, height / 2 - gap, width / 6, height / 2 - gap);
  line(width / 6, height / 2 + gap, width / 6, height / 2 + gap);

  getTime();
  d1.update(hrs[0]);
  d2.update(hrs[1]);
  d3.update(mins[0]);
  d4.update(mins[1]);
  d5.update(secs[0]);
  d6.update(secs[1]);

  d1.show();
  d2.show();
  d3.show();
  d4.show();
  d5.show();
  d6.show();
}

function getTime() {
  today = new Date();
  hrs = today.getHours();
  hrs = str(addZero(hrs));
  mins = today.getMinutes();
  mins = str(addZero(mins));
  secs = today.getSeconds();
  secs = str(addZero(secs));
}

function addZero(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}