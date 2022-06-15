class Player {
  constructor() {
    this.position = {
      x: 90,
      y: 10,
    };
    this.tempo = {
      x: 0,
      y: 0,
    };
    this.width = 45;
    this.height = 45;
  }
  draw(scrollOffset = 0) {
    //draw function
    c.fillStyle = "red";
    const positionXOnScreen = this.position.x - scrollOffset;
    c.fillRect(this.position.x - scrollOffset, this.position.y, this.width, this.height);
  }
  update() {
    //update function
    this.position.x += this.tempo.x;
    this.position.y += this.tempo.y;

    if (this.position.y + this.height + this.tempo.y <= canvas.height)
      this.tempo.y += gravity;
  }
}

class Plattform {
  constructor({ x, y }) {
    this.position = {
      x: x,
      y: y,
    };
    this.width = 190;
    this.height = 30;
  }
  draw(scrollOffset = 0) {
    c.fillStyle = "yellow";
    c.fillRect(this.position.x - scrollOffset, this.position.y, this.width, this.height);
  }
  collidesWith(player) {
    const collidesY = player.position.y + player.height <= this.position.y &&
    player.position.y + player.height + player.tempo.y >=
      this.position.y;
    const collidesX = player.position.x + player.width >= this.position.x  &&
    player.position.x <= this.position.x + this.width

    return collidesY && collidesX;
  }
}

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 0.8;

const levels = [
  [
    new Plattform({ x: 90, y: 500 }),
    new Plattform({ x: 400, y: 500 }),
    new Plattform({ x: 700, y: 500 })
  ],
  [
    new Plattform({ x: 90, y: 300 }),
    new Plattform({ x: 450, y: 300 }),
    new Plattform({ x: 800, y: 300 }),
    new Plattform({ x: 1120, y: 300 }),
  ],
  [
    new Plattform({ x: 90, y: 300 }),
    new Plattform({ x: 450, y: 300 }),
    new Plattform({ x: 800, y: 480 }),
    new Plattform({ x: 1020, y: 380 }),
    new Plattform({ x: 1250, y: 450 }),
  ],
  [
    new Plattform({ x: 90, y: 500 }),
    new Plattform({ x: 500, y: 400 }),
    new Plattform({ x: 800, y: 280 }),
    new Plattform({ x: 1120, y: 210 }),
    new Plattform({ x: 1420, y: 150 }),
    new Plattform({ x: 1820, y: 450 }),
  ],
  [
    new Plattform({ x: 90, y: 500 }),
    new Plattform({ x: 500, y: 400 }),
    new Plattform({ x: 800, y: 280 }),
    new Plattform({ x: 1120, y: 280 }),
    new Plattform({ x: 1520, y: 500 }),
    new Plattform({ x: 1720, y: 400 }),
    new Plattform({ x: 1900, y: 280 }),
    new Plattform({ x: 2200, y: 200 }),
    new Plattform({ x: 2600, y: 450 }),
  ],
  [
    new Plattform({ x: 90, y: 150 }),
    new Plattform({ x: 400, y: 200 }),
    new Plattform({ x: 800, y: 300 }),
    new Plattform({ x: 1120, y: 480 }),
    new Plattform({ x: 1520, y: 480 }),
    new Plattform({ x: 1720, y: 350 }),
    new Plattform({ x: 1900, y: 280 }),
    new Plattform({ x: 2200, y: 200 }),
    new Plattform({ x: 2400, y: 160 }),
  ],
  [
    new Plattform({ x: 90, y: 540 }),
    new Plattform({ x: 400, y: 450 }),
    new Plattform({ x: 700, y: 400 }),
    new Plattform({ x: 900, y: 350 }),
    new Plattform({ x: 960, y: 350 }),
    new Plattform({ x: 1000, y: 350 }),
    new Plattform({ x: 1100, y: 350 }),
    new Plattform({ x: 1400, y: 300 }),
    new Plattform({ x: 1600, y: 500 }),
  ],
  [
    new Plattform({ x: 90, y: 300 }),
    new Plattform({ x: 450, y: 400 }),
    new Plattform({ x: 800, y: 300 }),
    new Plattform({ x: 1120, y: 400 }),
    new Plattform({ x: 1350, y: 300 }),
    new Plattform({ x: 1520, y: 300 }),
  ],
  [
    new Plattform({ x: 90, y: 500 }),
    new Plattform({ x: 450, y: 500 }),
    new Plattform({ x: 800, y: 450 }),
    new Plattform({ x: 1020, y: 380 }),
    new Plattform({ x: 1250, y: 250 }),
    new Plattform({ x: 1700, y: 450 }),
    new Plattform({ x: 1500, y: 350 }),
    new Plattform({ x: 1250, y: 480 }),
  ],
  [
    new Plattform({ x: 90, y: 100 }),
    new Plattform({ x: 280, y: 130 }),
    new Plattform({ x: 470, y: 160 }),
    new Plattform({ x: 660, y: 190 }),
    new Plattform({ x: 470, y: 450 }),
    new Plattform({ x: 930, y: 290 }),
    new Plattform({ x: 740, y: 320 }),
    new Plattform({ x: 1120, y: 260 }),
  ],
  [
    new Plattform({ x: 30, y: 210 }),
    new Plattform({ x: 750, y: 160 }),
    new Plattform({ x: 550, y: 280 }),
    new Plattform({ x: 360, y: 450 }),
    new Plattform({ x: 720, y: 380 }),
    new Plattform({ x: 920, y: 500 }),
    new Plattform({ x: 1120, y: 400 }),
    new Plattform({ x: 1300, y: 280 }),
    new Plattform({ x: 1000, y: 200 }),
    new Plattform({ x: 440, y: 140 }),
    new Plattform({ x: 90, y: 400 }),
  ],
];

let currentLevel = 0;

let platforms = levels[currentLevel];
let player = new Player();
let win = false;

const keys = {
  rechts: {
    pressed: false,
  },
  links: {
    pressed: false,
  },
};

let scrollOffset = 0;

function initializePlayer() {
  player = new Player();
  scrollOffset = 0;
}

function champion() {
  alert("Level erfolgreich absolviert! Ab zum nächsten!");
  currentLevel++;
  platforms = levels[currentLevel];
  win = false;

  if (platforms) {
    initializePlayer();
  } else {
    window.location.href = "./Erklärung/index.html";
  }
}
function animate() {
  if (win) champion();

  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.draw(scrollOffset)
  platforms.forEach((plattform) => {
    plattform.draw(scrollOffset);
  });



  if (keys.rechts.pressed && player.position.x -scrollOffset < 800) {
    player.tempo.x = 5;
  } else if (keys.links.pressed && player.position.x -scrollOffset > 200) {
    player.tempo.x = -5;
  } else {
    player.tempo.x = 0;

    if (keys.rechts.pressed) {
    player.tempo.x = 5;
      scrollOffset += 5;
    } else if (keys.links.pressed) {
    player.tempo.x = 5; 
      scrollOffset -= 5;
    }
  }

  //plattform collision detection

  platforms.forEach((plattform, i) => {
    if (plattform.collidesWith(player, scrollOffset)) {
      // && = add statement (conditional)
      player.tempo.y = 0;
      if (i + 1 == platforms.length) {
        win = true;
      }
    }
  });
  // condition fürs gewinnen

  // condition fürs verlieren
  if (player.position.y > canvas.height) {
    initializePlayer();
  }
}

animate();

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      keys.links.pressed = true;
      break;
    case 38:
      player.tempo.y -= 12;
      break;
    case 39:
      keys.rechts.pressed = true;
      break;
    case 40:
      break;
  } //switch case statment
});
addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      keys.links.pressed = false;
      break;
    case 38:
      break;
    case 39:
      keys.rechts.pressed = false;
      break;
    case 40:
      break;
  } //switch case statment
});
