let bounds;
let points_in = 0;
let points = [];
function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
    background(0);
    stroke(255);
    fill(0);
    translate(width/2 - height/2, 0);
    rectMode(CORNER);
    ellipseMode(CORNER);
    rect(0,0,height,height);
    ellipse(0,0,height,height);
    for(let i = 0; i < points.length; i++){
        point(points[i].x, points[i].y);
    }
    points.push(createVector(random(height), random(height)));
    if(points[points.length-1].dist(createVector(height/2, height/2)) < height/2) points_in++;
    let pi_approx = 4 * (points_in / points.length);
    fill(255);
    text(points_in, -150, 20);
    text(points.length, -150, 40)
    text(pi_approx, -150, 60);
}