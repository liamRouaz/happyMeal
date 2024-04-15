$.getJSON('data.json', function(data) {
    var items = data.items; // Assurez-vous que votre structure JSON contient un tableau "items"
    var carouselInner = $('.carousel-inner');

    // Ajouter le premier élément comme actif
    var firstItem = items[0];
    carouselInner.append('<div class="carousel-item active">' +
        '<img src="' + firstItem.img + '" class="d-block w-100" alt="' + firstItem.alt + '">' +
        '<div class="carousel-caption d-none d-md-block">' +
        '<h5>' + firstItem.title + '</h5>' +
        '<p>' + firstItem.description + '</p>' +
        '</div>' +
        '</div>');

    // Ajouter les autres éléments
    for (var i = 1; i < items.length; i++) {
        var item = items[i];
        carouselInner.append('<div class="carousel-item">' +
            '<img src="' + item.img + '" class="d-block w-100" alt="' + item.alt + '">' +
            '<div class="carousel-caption d-none d-md-block">' +
            '<h5>' + item.title + '</h5>' +
            '<p>' + item.description + '</p>' +
            '</div>' +
            '</div>');
    }
});
$(document).ready(function() {
    $('.carousel').carousel();
});
