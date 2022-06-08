const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
const gravity = 0.8


class Player {
    constructor() {
        this.position = {
            x: 90,
            y: 10
        }
        this.tempo = {
            x:0,
            y:0
        }
        this.width = 45
        this.height = 45
    }
    draw() { //draw function
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y,
            this.width, this.height)
    }
    update() { //update function
        this.draw()
        this.position.x += this.tempo.x
        this.position.y += this.tempo.y

        if(this.position.y + this.height + this.tempo.y <= canvas.height)
        this.tempo.y += gravity
    }
}

class Plattform {
    constructor({x, y}) {
        this.position = {
            x: x,
            y: y
        }
        this.width = 190
        this.height = 30
    }
    draw() {
        c.fillStyle = "yellow"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
let player = new Player()
let lastPlatform = new Plattform({x: 2600, y: 450 });
let platforms = [new Plattform({x: 90, y: 500}),
    new Plattform({x: 500, y: 400 }), new Plattform({x: 800, y: 280 }),  new Plattform({x: 1120, y: 280 })
    ,  new Plattform({x: 1520, y: 500 }), new Plattform({x: 1720, y: 400 }), new Plattform({x: 1900, y: 280 }), new Plattform({x: 2200, y: 200 }),
    lastPlatform]
    const keys = {
        rechts: {
            pressed: false
        },
        links: {
            pressed: false
        },
    }

let scrollOffset = 0

function Init() {

class Player {
    constructor() {
        this.position = {
            x: 90,
            y: 10
        }
        this.tempo = {
            x:0,
            y:0
        }
        this.width = 45
        this.height = 45
    }
    draw() { //draw function
        c.fillStyle ='red'
        c.fillRect(this.position.x, this.position.y,
            this.width, this.height)
    }
    update() { //update function
        this.draw()
        this.position.x += this.tempo.x
        this.position.y += this.tempo.y

        if(this.position.y + this.height + this.tempo.y <= canvas.height)
        this.tempo.y += gravity
    }
}

class Plattform {
    constructor({x, y}) {
        this.position = {
            x: x,
            y: y
        }
        this.width = 190
        this.height = 30
    }
    draw() {
        c.fillStyle ='yellow'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
player = new Player()
let lastPlatform = new Plattform({x: 2600, y: 450 });
let platforms = [new Plattform({x: 90, y: 500}),
    new Plattform({x: 500, y: 400 }), new Plattform({x: 800, y: 280 }),  new Plattform({x: 1120, y: 280 })
    ,  new Plattform({x: 1520, y: 500 }), new Plattform({x: 1720, y: 400 }), new Plattform({x: 1900, y: 280 }), new Plattform({x: 2200, y: 200 }),
    lastPlatform]

scrollOffset = 0
}


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    platforms.forEach(plattform => {
        plattform.draw()
    })

    if(keys.rechts.pressed && player.position.x < 500) {
        player.tempo.x = 5
    }else if (keys.links.pressed && player.position.x > 100) {
        player.tempo.x = -5
    }else {
        player.tempo.x = 0

        if (keys.rechts.pressed) {
            scrollOffset += 5
            platforms.forEach(plattform => {
                plattform.position.x -= 5
            })

        }else if (keys.links.pressed) {
            scrollOffset -= 5
            platforms.forEach(plattform => {
                plattform.position.x += 5
            })
        }
    }

    //plattform collision detection
    let win = false;
        platforms.forEach(plattform => {
        if (player.position.y + player.height <= plattform.position.y
            && player.position.y + player.height + player.tempo.y >= plattform.position.y
            && player.position.x + player.width >= plattform.position.x
            && player.position.x <= plattform.position.x + plattform.width && !win) {// && = add statement (conditional)
            player.tempo.y = 0
            if (plattform == lastPlatform) {
                win = true;
                alert("Level geschafft!")
            }
        }
    })
// condition fürs gewinnen
if (scrollOffset > 2200) {
    console.log('Du hast es geschafft! Ab zum nächsten Level')
}
// condition fürs verlieren
if (player.position.y > canvas.height){
    Init()
}
}

animate()

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 37:
            keys.links.pressed = true
            break
        case 38:
            player.tempo.y -= 12
            break
        case 39:
            keys.rechts.pressed = true
            break
        case 40:
            break
    } //switch case statment
})
addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 37:
            keys.links.pressed = false
            break
        case 38:
            break
        case 39:
            keys.rechts.pressed = false
            break
        case 40:
            break
    } //switch case statment
})

