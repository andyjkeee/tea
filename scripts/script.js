new WOW ({

    animateClass: 'animate__animated',

}).init();

$('.item-image').magnificPopup({
    type: 'image'
});

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


$( function() {
    $( "#accordion" ).accordion({
        heightStyle: "content"
    });
} );

document.getElementById('lastButton').onclick = function () {
    let name = document.getElementById('inputName');
    let surname = document.getElementById('inputSurname');
    let phone = document.getElementById('inputPhone');
    let country = document.getElementById('inputCountry');
    let index = document.getElementById('inputIndex');
    let address = document.getElementById('inputAddress');

    if (!name.value) {
        alert('Заполните поле Имя!');
        return
    }

    if (!surname.value) {
        alert('Заполните поле Фамилия!');
        return
    }

    if (!phone.value) {
        alert('Заполните поле Телефон!');
        return
    }

    if (!country.value) {
        alert('Заполните поле Страна!');
        return
    }

    if (!index.value) {
        alert('Заполните поле Индекс!');
        return
    }

    if (!address.value) {
        alert('Заполните поле Адрес!');
        return
    }

    if (index.value.length < 6) {
        alert('Индекс должен содержать не менее 6 символов');
        return
    }

    document.getElementById('form').style.display = 'none';
    document.getElementById('tnx').style.display = 'block';
}