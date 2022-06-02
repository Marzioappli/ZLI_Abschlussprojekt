const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x:0,
            y:1
        }
        this.width = 40
        this.height = 40
    }
    draw() {
        c.fillStyle ='blue'
        c.fillRect(this.position.x, this.position.y, 
            this.width, this.height)
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
    }
}

const player = new Player()
player.draw()