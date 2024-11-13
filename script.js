

let imgbox = document.getElementById("imgboxs");
let qrimage = document.getElementById("qrimages");
let qrtext = document.getElementById("qrtexts");

function generateQR(){

    if(qrtext.value.length > 0){

        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imgboxs.classList.add("show-img"); 
    }else{
        qrtexts.classList.add('error');
        setTimeout(()=>{
            qrtexts.classList.remove('error')
        },1000)
    }
}