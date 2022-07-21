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
$('.tree-box-wrapper').click(function (e) {
    if (firstTime()) newPickerToggle($newPicker, e, 1, -150, -150);
})

//first person create
$saveFirstTime.click(function (e) {
    firstPersonCreate($newPicker, e)    
})


$('body').on('click', '.person', function (e) {
    console.log(e)
})



