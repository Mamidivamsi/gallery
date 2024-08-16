var imgfullbox = document.getElementById('imgfullbox')
var imgfull = document.getElementById('imgfull')





function openfullimg(pic){
    imgfullbox.style.display="flex";
    imgfull.src= pic;

}
function closeimg(){
    imgfullbox.style.display="none";
}