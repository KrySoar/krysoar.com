var play = document.getElementById('play');
var posX = document.getElementById('posX');
var posY = document.getElementById('posY');
var sizeX = document.getElementById('sizeX');
var sizeY = document.getElementById('sizeY');
var rectangle = document.getElementById('rectangle');

posX.onchange = function() {
    rectangle.style.left = posX.value + 'px';
}

posY.onchange = function() {
    rectangle.style.top = posY.value + 'px';
}

sizeX.onchange = function() {
    rectangle.style.width = sizeX.value + 'px';
}

sizeY.onchange = function() {
    rectangle.style.height = sizeY.value + 'px';
}

rectangle.onclick = function() {
    rectangle.style.borderRadius = '20px';
}

play.onclick = function() {

    if(13 === 12+1)
    {
        console.log("ok");
    }else{
        console.log("no");
    }
}
