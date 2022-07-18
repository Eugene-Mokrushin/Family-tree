const canvas = document.getElementById('cv1');
const context = canvas.getContext('2d');
let bubblePopUpAnimation;
let bubblePopDownAnimation;

const femaleColor = '#f55187';
const femaleColorLighter = '#ff78a4';
const maleColor = '#5190f5';
const maleColotLighter = '#6ea5ff';

let familyData = [];

canvas.onclick = () => {
    newPerson = new FamilyMember(context, canvas.width, canvas.height);
    newPerson.animatePopUp(0);
}

canvas

class FamilyMember {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.lineWidth = 1;
        this.#width = width;
        this.#height = height;
        this.lastTime = 0;
        this.interval = 10;
        this.timer = 0;
        this.cellSize = 15;
        this.gradient;
        this.#ctx.strokeStyle = this.gradient;
        this.radius = 10;
        this.radiusToDown = 50;
        this.radiusMax = 70;
        this.vr = 0.03;
    }
    animatePopUp(timeStamp) {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        if (this.timer > this.interval && this.radius < this.radiusMax) {
            context.beginPath();
            context.fillStyle = maleColor;
            context.lineWidth = 8;
            context.strokeStyle= maleColotLighter;
            context.arc(canvas.width / 2 - 300, canvas.height / 2, this.radius, 0, 6.283185307179586, false);
            context.stroke();
            context.fill();
            context.closePath();
            context.save();
            this.radius += 4;
        } else {
            this.timer += deltaTime;
        }
        if (this.radius >= this.radiusMax) {
            cancelAnimationFrame(bubblePopUpAnimation);
            bubblePopDownAnimation = requestAnimationFrame(this.animatePopDown.bind(this))
            return;
        }
        bubblePopUpAnimation = requestAnimationFrame(this.animatePopUp.bind(this))
    }
    animatePopDown(timeStamp) {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        if (this.timer > this.interval && this.radius >= this.radiusToDown) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.fillStyle = maleColor;
            context.lineWidth = 8;
            context.strokeStyle= maleColotLighter;
            context.arc(canvas.width / 2 - 300, canvas.height / 2, this.radius, 0, 6.283185307179586, false);
            context.stroke();
            context.fill();
            context.closePath();
            context.save();
            this.radius -= 3;
        } else {
            this.timer += deltaTime;
        }
        if (this.radius <= this.radiusToDown) return;
        bubblePopDownAnimation = requestAnimationFrame(this.animatePopDown.bind(this))
    }
}

console.log('I am here')