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


//main tree event trigger
$mainCanvas.click(function (e) {
    

})

//first person create
$saveFirstTime.click(function (e) {
    firstPersonCreate($newPicker, e)
})




$mainCanvas.on('click', function (e) {
    let check;
    if (firstTime()) newPickerToggle($newPicker, e, 1, -150, -150);
    $mainCanvas.on('mousedown', '.person', function (e) {
        if (e.which === 1) {
            check = 1
            seePersonDetails(e);
        }
        if (e.which === 3) {
            chooseToAddNewRelative(e);
            check = 2
        }
    });
    if (check != 1 || check != 2) {
        $addRelative.css('transform', 'scale(0)');
        $addRelative.attr('data-active', 'not-active');
        $personDetails.css('transform', 'scale(0)');
        $personDetails.attr('data-active', 'not-active');
    }

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
    createNewPerson()
    console.log(e.target.dataset.relative)
})


