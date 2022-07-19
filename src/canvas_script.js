const canvas = document.getElementById('cv1');
const context = canvas.getContext('2d');
const $canv = $('#cv1');
const $pannelFP = $('.new-picker');
let bubblePopUpAnimation;
let bubblePopDownAnimation;
let checker = 0;
const femaleColor = '#f55187';
const femaleColorLighter = '#ff78a4';
const maleColor = '#5190f5';
const maleColotLighter = '#6ea5ff';

let familyData = [];


$('.save').on('click', function (e) {
    let gender = $('.save').attr('data-gender');
    let fName = $('#first-name').val();
    let sName = $('#surname').val();
    progressAnim($pannelFP, e, -1)
    if (familyData.length === 0) {
        newPerson = new FamilyMember(context, canvas.width / 2 - 300, canvas.height / 2, gender, fName, sName);
        newPerson.animatePopUp(0);
        // newPerson.drawText()
    }
});



function progressAnim(elem, event, direct = 1, additionalOfsetX = 0, additionalOfsetY = 0) {
    let scale = direct === 1 ? 0 : 1;
    let inter = setInterval(function () {
        direct === 1 ? scale += 0.05 : scale -= 0.05
        if (scale > 1 || scale < 0) { clearInterval(inter) }
        elem.css({
            'transform': 'scale(' + scale + ')'
        });

    }, 10);
    elem.css({
        'left': event.x + additionalOfsetX,
        'top': event.y + additionalOfsetY
    });

}

// const Member = (x, y, gender, radius = 50, firstName, surName) => {
//     this.x = x,
//         this.y = y,
//         this.gender = gender,
//         this.radius = radius,
//         this.firstName = firstName,
//         this.surName = surName
// }

// canvas.onclick = (e) => {
//     x = e.offsetX;
//     y = e.offsetY;
//     console.log(x, y)
// }
