const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
const gravity = 1

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
        c.fillStyle ='white'
        c.fillRect(this.position.x, this.position.y,
            this.width, this.height)
    }
    update() { //update function
        this.draw()
        this.position.x += this.tempo.x
        this.position.y += this.tempo.y

        if(this.position.y + this.height + this.tempo.y <= canvas.height)
        this.tempo.y += gravity
        else this.tempo.y = 0
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
        c.fillStyle = "darkgreen"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const player = new Player()
const platforms = [new Plattform({x: 90, y: 500}),
    new Plattform({x: 500, y: 400 }), new Plattform({x: 800, y: 280 }),  new Plattform({x: 1120, y: 280 })
    ,  new Plattform({x: 1520, y: 500 }), new Plattform({x: 1720, y: 400 }), new Plattform({x: 1900, y: 280 }), new Plattform({x: 2200, y: 200 }),
    new Plattform({x: 2600, y: 450 })]
const keys = {
    rechts: {
        pressed: false
    },
    links: {
        pressed: false
    },

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
            platforms.forEach(plattform => {
                plattform.position.x -= 5
            })

        }else if (keys.links.pressed) {
            platforms.forEach(plattform => {
                plattform.position.x += 5
            })
        }
    }

    //plattform collision detection
    platforms.forEach(plattform => {
    if (player.position.y + player.height <= plattform.position.y
        && player.position.y + player.height + player.tempo.y >= plattform.position.y
        && player.position.x + player.width >= plattform.position.x
        && player.position.x <= plattform.position.x + plattform.width) {// && = add statement (conditional)
        player.tempo.y = 0
    }
})
}
animate()

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 37:
            console.log('links')
            keys.links.pressed = true
            break
        case 38:
            console.log('oben')
            player.tempo.y -= 7
            break
        case 39:
            console.log('rechts')
            keys.rechts.pressed = true
            break
        case 40:
            console.log('unten')
            break
    } //switch case statment
})
addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 37:
            console.log('links')
            keys.links.pressed = false
            break
        case 38:
            console.log('oben')
            player.tempo.y -= 10
            break
        case 39:
            console.log('rechts')
            keys.rechts.pressed = false
            break
        case 40:
            console.log('unten')
            break
    } //switch case statment
})

