function setup() {
  createCanvas(800, 400);
  background(240);
  textSize(12);
  
  const data = [
    { length: 1, percent: 99 },
    { length: 2, percent: 97 },
    { length: 3, percent: 96 },
    { length: 4, percent: 88 },
    { length: 5, percent: 77 },
    { length: 6, percent: 70 },
    { length: 7, percent: 60 },
    { length: 8, percent: 50 },
    { length: 9, percent: 45 },
    { length: 10, percent: 40 },
    { length: 11, percent: 37 },
    { length: 12, percent: 36 },
    { length: 13, percent: 34 },
    { length: 14, percent: 32 },
    { length: 15, percent: 23 },
  ];
  
  const maxLength = 15; // Max length in feet
  const maxPercent = 100; // Max percentage

  stroke(0);
  line(50, 350, 750, 350); // X-Axis
  line(50, 50, 50, 350);   // Y-Axis
  
  noFill();
  stroke(0);
  beginShape();
  for (let i = 0; i < data.length; i++) {
    const x = map(data[i].length, 1, maxLength, 50, 750);
    const y = map(data[i].percent, 0, maxPercent, 350, 50);
    vertex(x, y);
  }
  endShape();

  fill(0);
  noStroke();
  for (let i = 0; i < data.length; i++) {
    const x = map(data[i].length, 1, maxLength, 50, 750);
    const y = map(data[i].percent, 0, maxPercent, 350, 50);
    ellipse(x, y, 5, 5);
  }
}
