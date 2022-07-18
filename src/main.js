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

$('.new-picker').draggable({
    cursor: 'pointer'
})

$('#genderVal').change = function(e){
    console.log('asdasd')
    console.log($('.test'))

}

$('#genderVal').on('change', function () {
    if(this.checked)$('.save').attr('data-gender', 'male');
    else $('.save').attr('data-gender', 'female');

    $('.names-filed').toggleClass('male-input');
    $('.save').toggleClass('male-button');
});

