let privMembers = extractStorage()
let $addRelative = $('.addRelative')
let xMain;
let yMain;
class AddNewMemberSelector {
    #x;
    #y;

}

canvas.onclick = (e) => {
    if (privMembers != null || checker === 1) {
        try {
            xMain = JSON.parse(privMembers).x;
            yMain = JSON.parse(privMembers).y;
        } catch {
            xMain = catcher.x;
            yMain = catcher.y;
        } 
        finally {
            
        }

        xMouse = e.offsetX;
        yMouse = e.offsetY;
        if (calcHypotenuse(xMouse, yMouse, xMain, yMain)) {
            progressAnim($addRelative, e, 1, 60, -100)
        }

    }
    if (checker === 0 && parseInt(localStorage.getItem('checker')) === 0) {
        progressAnim($pannelFP, e, 1, -150, -150)
    }
}


function calcHypotenuse(xMouse, yMouse, xMain, yMain) {

    hypotenuse = Math.sqrt((xMouse - xMain) * (xMouse - xMain) +
        (yMouse - yMain) * (yMouse - yMain))
    if (hypotenuse < 50) return true
    else return false
}

