let data;
let subsetIndex = 0;

function setup() {
  createCanvas(800, 400);
  textSize(12);

  // Data
  data = [
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
}

function draw() {
  background(240);

  // Divide data into subsets of 5
  const subsets = [
    data.slice(0, 5),  // Subset 1: Lengths 1–5
    data.slice(5, 10), // Subset 2: Lengths 6–10
    data.slice(10, 15) // Subset 3: Lengths 11–15
  ];

  // Get the current subset
  const subset = subsets[subsetIndex];

  // Draw Axes
  stroke(0);
  line(50, 350, 750, 350); // X-Axis
  line(50, 50, 50, 350);   // Y-Axis

  // Plot Data
  noFill();
  stroke(0);
  beginShape();
  for (let i = 0; i < subset.length; i++) {
    const x = map(i, 0, 4, 50, 750);
    const y = map(subset[i].percent, 0, 100, 350, 50);
    vertex(x, y);
  }
  endShape();

  // Draw Data Points
  fill(0);
  noStroke();
  for (let i = 0; i < subset.length; i++) {
    const x = map(i, 0, 4, 50, 750);
    const y = map(subset[i].percent, 0, 100, 350, 50);
    ellipse(x, y, 8, 8);
  }

  // Display Subset Info
  textSize(16);
  text(`Subset ${subsetIndex + 1}: Lengths ${subset[0].length}–${subset[subset.length - 1].length}`, 50, 30);

}