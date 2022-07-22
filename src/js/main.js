'use strcit';


window.onresize = () => {
    $('.container').css({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    $('#toggle-side-panel').css({
        marginTop: window.innerHeight / 2 - 80
    })

}

window.onload = () => {
    $('.container').css({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    $('#toggle-side-panel').css({
        marginTop: window.innerHeight / 2 - 80
    })
    $('.tree-box-wrapper').css({
        left: '-18000px',
        top: '-18000px'
    })
    checkLocalStorageForListOfPeople();
    if (listPeople.length != 0) recreateLocalStorage();
    
    document.querySelector('.tree-box-wrapper').click()
    disableScroll()
}

window.addEventListener("contextmenu", e => e.preventDefault());

$('.new-picker').draggable()
$('.tree-box-wrapper').draggable()


