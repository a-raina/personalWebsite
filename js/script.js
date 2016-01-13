var toggleButton = document.getElementById("toggleButton");
function changeButtonText(){
    if (toggleButton.value=="+"){
       toggleButton.value = "-"; 
       toggleButton.innerHTML="-";
    } 
    else{
        toggleButton.value = "+";
        toggleButton.innerHTML="+";

    }
}

var bgImage = document.getElementById("aboutMe-bgimage");
var bgImageArray = ['images/aboutMeImage_2.jpg','images/aboutMeImage_3.jpg','images/aboutMeImage_1.jpg'];
var bgImageIndex = 0;

function change_bgImage(){
    var checkWidth = window.innerWidth
    if (checkWidth > 700){
        bgImage.style.backgroundImage = "url('tempPath')".replace("tempPath",bgImageArray[bgImageIndex]);
        bgImageIndex++;
        bgImageIndex = bgImageIndex % bgImageArray.length;
    }
    else{
        bgImage.style.backgroundImage = null;
    }
}

setInterval(change_bgImage,5000);

$('.panel-heading').on('click', function(){
    var checkAll = $('.panel-heading').find('span');
    if(checkAll.hasClass('glyphicon-circle-arrow-down')) {
        checkAll.removeClass('glyphicon-circle-arrow-down');
        checkAll.addClass('glyphicon-circle-arrow-up');
    }
    
    if($(this).find('span').hasClass('glyphicon-circle-arrow-down')){
        $(this).find('span').removeClass('glyphicon-circle-arrow-down');
        $(this).find('span').addClass('glyphicon-circle-arrow-up');
    }
    else{
        $(this).find('span').removeClass('glyphicon-circle-arrow-up');
        $(this).find('span').addClass('glyphicon-circle-arrow-down');
    }
});

//$('.panel-heading').click(function(){
//    $(this).find('span').toggleClass('glyphicon-circle-arrow-up').toggleClass('glyphicon-circle-arrow-down');
//});




