function doIt(){
    var toDos = $('.js-to-dos');
    toDos.find('.js-complete').addClass('blue')
    toDos.parent().removeClass('hidden')
}

function milk(){
    $('.milk').addClass('check')
}

function rent(){
    $('.rent').addClass('check')
}

function party(){
    $('.party').addClass('check')
}

function reset(){
    $('.milk').removeClass('check')
    $('.rent').removeClass('check')
    $('.party').removeClass('check')
}