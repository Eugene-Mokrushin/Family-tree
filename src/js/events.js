'use strcit';

//clean storage
$('#clear-storage').click(function (e) {
    e.preventDefault();
    localStorage.clear();
    location.reload();
});

//toggle side panel
$buttonMenuToggle.click(function () {
    $pannelMenu.animate({
        width: 'toggle',

    }, 100)
    $arrowMenu.text() == '❱' ? $arrowMenu.text('❰') : $arrowMenu.text('❱')
})

//set attribute of button for further taking
$('#genderVal').on('change', function () {
    if (this.checked) $('.save').attr('data-gender', 'male');
    else $('.save').attr('data-gender', 'female');

    $('.names-filed').toggleClass('male-input');
    $('.save').toggleClass('male-button');
});




//first person create
$saveFirstTime.click(function (e) {
    firstPersonCreate($newPicker, e)
})




$mainCanvas.on('click', function (e) {
    let classTarget = e.target.classList[0];
    let classTargetParentCheck = $(`.${classTarget}`).parents('.person').length

    if (firstTime()) newPickerToggle($newPicker, e, 1, -150, -150);
    if (classTargetParentCheck === 0) {
        $addRelative.attr('data-active', 'not-active');
        $personDetails.attr('data-active', 'not-active');
    }
    return
});

$mainCanvas.on('wheel', function (e) {
    let classTarget = e.target.classList[0]
    let parentsClassTarget_1 = $(`.${classTarget}`).parents('.selectPerson').length;
    let parentsClassTarget_2 = $(`.${classTarget}`).parents('.addRelative').length;

    if (parentsClassTarget_1 === 0 && parentsClassTarget_2 === 0) {
        zoom(e)
    }
})


$('td').on('click', function (e) {
    createNewPerson(e);
    return
})

$mainCanvas.on('mousedown', '.person', function (e) {
    if (e.which === 1) {
        seePersonDetails(e);
        $addRelative.css('transform', 'scale(0)');
        $addRelative.attr('data-active', 'not-active');
    }
    if (e.which === 3) {
        chooseToAddNewRelative(e);
        $personDetails.css('transform', 'scale(0)');
        $personDetails.attr('data-active', 'not-active');
    }
    idElementClicked = this.id
    return

});