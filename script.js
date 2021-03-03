var x;

var BALLS;

var xPositions;

var yPositions;

var xSpeeds;

var ySpeeds;

var sizes;

var colors;

function setup() {
    initializeFields();
    createCanvas(windowWidth, windowHeight);
    strokeWeight(3);
    resetApp();
    noFill();
    rectMode(CENTER);
    frameRate(60);
}

function draw() {
    fill(0, 0, 0, 20);
    rect(width / 2, height / 2, width, height);
    for (var i = 0; i < BALLS; i++) {
        fill(colors[i]);
        rect(xPositions[i], yPositions[i], sizes[i], sizes[i]);
        var radius = sizes[i] + 0.5;
        if (xPositions[i] < radius || xPositions[i] > width - radius) {
            // rebota x
            xSpeeds[i] *= -1;
        }
        if (yPositions[i] < radius || yPositions[i] > height - radius) {
            // rebota y
            ySpeeds[i] *= -1;
        }
        sizes[i] += 0.1;
    }
}

function mousePressed() {
    resetApp();
}

function resetApp() {
    for (var i = 0; i < BALLS; i++) {
        xPositions[i] = random(width);
        yPositions[i] = random(height);
        xSpeeds[i] = random(-10, 10);
        ySpeeds[i] = random(-10, 10);
        sizes[i] = random(0, 100);
        colors[i] = color(255);
    }
}

function keyPressed() {
    save("saturation.png" + frameCount + ".png");
}

function initializeFields() {
    x = 0;
    BALLS = 100;
    xPositions = new Array(BALLS);
    yPositions = new Array(BALLS);
    xSpeeds = new Array(BALLS);
    ySpeeds = new Array(BALLS);
    sizes = new Array(BALLS);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    x = width / 2
    y = height / 2
}