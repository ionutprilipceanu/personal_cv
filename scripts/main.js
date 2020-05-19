let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/Prilipceanu_Ionut.jpg') {
      myImage.setAttribute ('src','image/Prilipceanu_Ionut2.jpg');
    } else {
      myImage.setAttribute ('src','image/Prilipceanu_Ionut.jpg');
    }
}
