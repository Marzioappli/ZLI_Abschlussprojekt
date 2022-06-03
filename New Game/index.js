const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
const gravity = 1

class Player {
    constructor() {
        this.position = {
            x: 230,
            y: 10
        }
        this.velocity = {
            x:0,
            y:0
        }
        this.width = 45
        this.height = 45
    }
    draw() { //draw function
        c.fillStyle ='pink'
        c.fillRect(this.position.x, this.position.y,
            this.width, this.height)
    }
    update() { //update function
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

class Plattform {
    constructor() {
        this.position = {
            x: 200,
            y: 300
        }
        this.width = 190
        this.height = 30
    }
    draw() {
        c.fillStyle = "purple"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
const player = new Player()
const plattform = new Plattform()
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
    plattform.draw()

    if(keys.rechts.pressed) {
        player.velocity.x = 5
    }else if (keys.links.pressed) {
        player.velocity.x = -5
    }else player.velocity.x = 0

    //plattform collision detection
    if (player.position.y + player.height <= plattform.position.y
        && player.position.y + player.height + player.velocity.y >= plattform.position.y
        && player.position.x + player.width >= plattform.position.x
        && player.position.x <= plattform.position.x + plattform.width) {// && = add statement (conditional)
        player.velocity.y = 0
    }
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
            player.velocity.y -= 7
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
            player.velocity.y -= 10
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