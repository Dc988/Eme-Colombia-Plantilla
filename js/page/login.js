let frm = document.getElementById("login-form");

function frmLogin(e) {

    if(frm.checkValidity()){
        animation_load();
        window.location = "home.html";
    }


}


