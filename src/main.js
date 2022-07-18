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
