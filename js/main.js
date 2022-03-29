$(document).ready(function () {
    $('.header__burger').on('click', function () {
        $(this).toggleClass('active')
        $('.header__body').toggleClass('active')
    });

});