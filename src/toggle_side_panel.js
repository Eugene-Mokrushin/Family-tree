const $button = $('#toggle-side-panel');
const $arrow = $('#arrow-direction')
const $pannel = $('.menu');

$button.click(function () {
    $pannel.animate({
        width: 'toggle',
        
    }, 100)
    $arrow.text() == '❱' ? $arrow.text('❰') : $arrow.text('❱')
})


