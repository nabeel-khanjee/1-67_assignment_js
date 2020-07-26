function showImg(e){
  var imageAddress = e.src;
  console.log(imageAddress);
  var modalImage = document.getElementById('modal_inner_image');
  modalImage.src = imageAddress ;
}

var fontSize = 16;
function zoomIn(){
  var para = document.getElementById('paragraph');
  fontSize += 10;
  para.style.fontSize = fontSize + "px";
}

function zoomOut(){
  var para = document.getElementById('paragraph');
  fontSize -= 10;
  para.style.fontSize = fontSize + "px";
}
