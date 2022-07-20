document.getElementById('cv1').width = window.innerWidth;
document.getElementById('cv1').height = window.innerHeight;
window.onresize = () => {
    $('.container').css({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    $('#toggle-side-panel').css({
        marginTop: window.innerHeight / 2 - 80
    })
    document.getElementById('cv1').width = window.innerWidth;
    document.getElementById('cv1').height = window.innerHeight;
    let listOfNodes = extractStorage();
    if (listOfNodes.length != 0) {
        let objListOfNodes = JSON.parse(extractStorage())
        newPerson_1 = new FamilyMember(context, objListOfNodes.x, objListOfNodes.y, objListOfNodes.gender, objListOfNodes.fname, objListOfNodes.sname);
        newPerson_1.animatePopUp(0);
    }
}

window.onload = () => {
    $('.container').css({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    $('#toggle-side-panel').css({
        marginTop: window.innerHeight / 2 - 80
    })
    let listOfNodes = extractStorage();
    if (listOfNodes != null) {
        let objListOfNodes = JSON.parse(extractStorage())
        newPerson_1 = new FamilyMember(context, objListOfNodes.x, objListOfNodes.y, objListOfNodes.gender, objListOfNodes.fname, objListOfNodes.sname);
        newPerson_1.animatePopUp(0);
    } else {
        
    }
}


$('#genderVal').on('change', function () {
    if(this.checked)$('.save').attr('data-gender', 'male');
    else $('.save').attr('data-gender', 'female');

    $('.names-filed').toggleClass('male-input');
    $('.save').toggleClass('male-button');
});

$('.addRelative').draggable()
$('.new-picker').draggable()


$('#clear-storage').click(function (e) { 
    e.preventDefault();
    localStorage.clear();
    location.reload();
});