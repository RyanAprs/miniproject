// SILDE
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var imgList = document.getElementsByClassName('about-image');

    if(n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = 'none';
    }

    imgList[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
    plusDivs(1);
}, 2000);



// VALIDATE FORM
function validateform() {
    var name = document.forms['contact-form']['name'].value;
    var email = document.forms['contact-form']['email'].value;
    var select = document.forms['contact-form']['select'].value;

    if (name == '' || email == '' ) {
        alert('Input tidak boleh kosong!!');
        return false;
    } 

    alert('data berhasil dikirim')
}


