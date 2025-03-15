

// page paciente

id_paciente.innerHTML = "1";
nombre_paciente.innerHTML = "Fernández Torres Juan Pablo";
edad_paciente.innerHTML = "29";
fecha_nacimiento_paciente.innerHTML = "29/12/1986";
estado_civil_paciente.innerHTML = "SOLTERO";
identificacion_paciente.innerHTML = "22569986";
telefono_paciente.innerHTML = "N/A";
celular_paciente.innerHTML = "3022563652";
ocupacion_paciente.innerHTML = "AMA DE CASA";
sexo_paciente.innerHTML = "F";
direccion_paciente.innerHTML = "CALLE 2 SUR 1 256";
barrio_paciente.innerHTML = "LAS FLORES";

function on_keydown_searck(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        setData();
    }
}


function setData() {
    if (fecha_ingreso_search.value != "") {
        animation_load();
        //do something

        setTimeout(function () {
            remove_animation_load();
        }, 500);
    }
}
function paciente_show_form_edit(){
    show_tap_panel("Panel_form");
    changeScroll(".panel-body","#frmPaciente_data");
}

function gotoMain(){
    show_tap_panel("Panel_Main");
    changeScroll("#frmPaciente_data",".panel-body");
}

function goto_facturaFormat() {

    if (fecha_ingreso_search.value != "" && id_ingreso.value != "-1") {
        window.location = "../Facturacion/factura.html";
    } else {
        alertas("SIN REISTRO SELECCIONADO", "warning");
    }
}

function changeScroll(panel_1,panel_2){
    $(panel_1).getNiceScroll().remove();
    $(panel_2).niceScroll(sidebar_nicescroll_opts);
}

$(document).ready(function () {
    changeScroll("#frmPaciente_data",".panel-body");
});


