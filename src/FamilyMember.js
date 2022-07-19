class FamilyMember {
    #ctx;
    #coordX;
    #coordY;
    #gender;
    #fname;
    #sname;
    constructor(ctx, x, y, gender, fName = 'John', sName = 'Smith') {
        this.#ctx = ctx;
        this.#gender = gender
        this.#ctx.lineWidth = 1;
        this.#coordX = x;
        this.#coordY = y;
        this.#fname = fName;
        this.#sname = sName;
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
            context.fillStyle = this.#gender == 'female' ? femaleColor : maleColor;
            context.lineWidth = 8;
            context.strokeStyle = this.#gender == 'female' ? femaleColorLighter : maleColotLighter;
            context.arc(this.#coordX, this.#coordY, this.radius, 0, 6.283185307179586, false);
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
            context.clearRect(this.#coordX - this.radiusMax - 10, this.#coordY - this.radiusMax - 10, this.radiusMax * 2.5, this.radiusMax * 2.5);
            context.beginPath();
            context.fillStyle = this.#gender == 'female' ? femaleColor : maleColor;
            context.lineWidth = 8;
            context.strokeStyle = this.#gender == 'female' ? femaleColorLighter : maleColotLighter;
            context.arc(this.#coordX, this.#coordY, this.radius, 0, 6.283185307179586, false);
            context.stroke();
            context.fill();
            context.closePath();
            context.save();
            this.radius -= 3;
        } else {
            this.timer += deltaTime;
        }
        if (this.radius <= this.radiusToDown) {
            let person = new Member(this.#coordX, this.#coordY, this.radiusToDown, this.#gender, this.#fname, this.#sname);
            familyData.push(person);
            populateStorage(familyData)
            this.drawText(this.#fname, this.#sname, this.#coordX, this.#coordY)
            return
        };
        bubblePopDownAnimation = requestAnimationFrame(this.animatePopDown.bind(this))
    }
    drawText(fname, sname, x, y) {
        context.beginPath();
        context.fillStyle = 'white';

        const text = context.measureText(fname);
        const leftPadding = (this.radius * 2 - text.width) / 4;
        let topPadding = 0;
        sname.length == 0 ? topPadding = 5 : null;
        context.font = '16px arial';
        // context.textBaseline = "hanging";
        context.fillText(fname.toUpperCase(), x - this.radius + leftPadding , y + topPadding);
        context.fillText(sname, x - this.radius, y + 20);
        context.fill();
        context.closePath();
        return
    }
}


