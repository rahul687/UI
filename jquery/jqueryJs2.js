function doIt(){
    var toDos = $('.js-to-dos');
    toDos.find('.js-complete').addClass('blue')
    toDos.parent().removeClass('hidden')
}