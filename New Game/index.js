const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
const gravity = 0.5

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
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

const player = new Player()
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

    if(keys.rechts.pressed) {
        player.velocity.x = 5
    }else if (keys.links.pressed) {
        player.velocity.x = -5
    }else player.velocity.x = 0
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
            player.velocity.y -= 10
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