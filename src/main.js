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
}


$('#genderVal').on('change', function () {
    if(this.checked)$('.save').attr('data-gender', 'male');
    else $('.save').attr('data-gender', 'female');

    $('.names-filed').toggleClass('male-input');
    $('.save').toggleClass('male-button');
});

$('.addRelative').draggable()
$('.new-picker').draggable()