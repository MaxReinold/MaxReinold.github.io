let chars = [];
let constantRainbow = false;
let rainbowHue = 0;

//Customizable Parameters
let keyWidth;
let keyPadding = 10;
let myHue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  textSize(32)
  keyWidth = (windowWidth - (keyPadding * 2)) / 12.3
  colorMode(HSB, 100);
  fill(0, 100, 100);
}

function draw() {
  background(0);
  for (let i = 0; i < chars.length; i++) {
    chars[i].draw();
    chars[i].update();
    if (!chars[i].onScreen()) {
      chars.splice(i, 1);
    }
  }
}

let keys = {
  "1": 1,
  "q": 1.3,
  "a": 1.5,
  "z": 1.7,
  "2": 2,
  "w": 2.3,
  "s": 2.5,
  "x": 2.9,
  "3": 3,
  "e": 3.3,
  "d": 3.5,
  "c": 3.7,
  "4": 4,
  "r": 4.3,
  "f": 4.5,
  "v": 4.9,
  "5": 5,
  "t": 5.3,
  "g": 5.5,
  "b": 5.9,
  "6": 6,
  "y": 6.3,
  "h": 6.5,
  "n": 6.9,
  "7": 7,
  "u": 7.3,
  "j": 7.5,
  "m": 8,
  "8": 8,
  "i": 8.3,
  "k": 8.5,
  ",": 9,
  "9": 9,
  "o": 9.3,
  "l": 9.5,
  ".": 10,
  "0": 10,
  "p": 10.3,
  ";": 10.5,
  "/": 11,
  "-": 11,
  "[": 11.3,
  "'": 11.5,
  "=": 12,
  "]": 12.3,
}

function getRandomKey() {
  return Object.entries(keys)[floor(random(0, Object.entries(keys).length))][0];
}

function keyPressed() {
  if (key == " ") {
    if (myHue < 100)
      myHue += 10;
    else myHue = 0;
  }
  if (key.length == 1) {
    if (constantRainbow) {
      chars.push(new CharObject(key, rainbowHue));
      if (rainbowHue <= 100)
        rainbowHue++;
      else rainbowHue = 0;
    }
    else {
      chars.push(new CharObject(key, myHue));
    }

  }
}

function mouseClicked() {
  chars.push(new CharObject(getRandomKey()))
}

class CharObject {
  constructor(character, myHue) {
    this.char = character;
    this.velocity = createVector(random(-4, 4), random(-12, -7));
    let x = keyPadding + keys[this.char] * keyWidth;
    this.position = createVector(x, windowHeight);
    this.myHue = myHue;
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(0, .05);
  }

  draw() {
    fill(this.myHue, 100, 100);
    text(this.char, this.position.x, this.position.y);
  }

  onScreen() {
    if (this.position.y > windowHeight) return false;
    else return true;
  }
}
