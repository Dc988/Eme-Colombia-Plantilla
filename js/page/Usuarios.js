

const user_name_form = document.getElementById("user");
const pass_form = document.getElementById("pass");
const confirm_pass_form = document.getElementById("confirm_pass");
const estado_form = document.getElementById("estado");

const claves_panel = document.getElementById("claves_panel");
const permisos_panel = document.getElementById("permisos_panel");
const estado_panel = document.getElementById("estado_panel");

const form_user = document.getElementById("frmUsuario");
const form_permisos = document.getElementById("frmPermisos");

const tbl_users = createDataTable('#tbl_Users'
    , "/Configuraciones/Usuarios/list_users",
    [{ 'data': 'id' },
    { 'data': 'Usuario' },
    { 'data': 'Estado' },
    { 'data': 'acciones' }]
);

function frmUsuario_onclick() {
    title_form.innerHTML = "<i class='fa fa-user-plus icon' ></i>Nuevo Usuario";
    btn_submit_form.textContent = "Registrar";

    claves_panel.classList.remove("d-none");
    permisos_panel.classList.remove("d-none");
    estado_panel.classList.remove("d-none");
    user_name_form.disabled = false;

    form_user.reset();
    form_permisos.reset();
    id_form.value = "";
}

function btnPassFormn_onclick(id_user) {
    title_form.innerHTML = "<i class='fa fa-key icon' ></i>Cambiar Contraseña";
    id_form.value = id_user;
    user_name_form.disabled = true;
    btn_submit_form.textContent = "Cambiar Contraseña";

    claves_panel.classList.remove("d-none");
    permisos_panel.classList.add("d-none");
    estado_panel.classList.add("d-none");

    form_user.reset();
    form_permisos.reset();
    show_tap_panel("Panel_Form");
}

function btnReingresarUser_onclick(id) {
    confirmationAlert("Desea reingresar el usuario?", "", "info").then((result) => {
        if (result.isConfirmed) {

            
        }
    });
}

function btnEliminarUser_onclick(id) {

    confirmationAlert("Desea eliminar el usuario?", "", "info").then((result) => {
        if (result.isConfirmed) {

        }
    });
}

function btnEditarUser_onclick(id_user) {
    title_form.innerHTML = "<i class='fa fa-tasks icon' ></i> Detalles Usuario";
    btn_submit_form.textContent = "Editar";
    form_user.reset();
    form_permisos.reset();
    user_name_form.disabled = false;

    claves_panel.classList.add("d-none");
    
    pass_form.value=0;
    confirm_pass_form.value=0;

    permisos_panel.classList.remove("d-none");
    estado_panel.classList.remove("d-none");

    show_tap_panel("Panel_Form");
}

function DataUser_onclick(e) {
    
    if (confirm_pass_form.value != pass_form.value && !claves_panel.classList.contains("d-none")) {
        alertas('Contraseñas No Coinciden', 'warning');
    } else if (form_user.checkValidity()) {
        
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_user_data();
                break;
            case "Editar":
                edit_user_data();
                break;
            case "Cambiar Contraseña":
                edit_user_pass();
                break;
            default:
                alertas('Error en el componente submit', 'warning');
        }
    }
}

function save_user_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            
        }
    });
}

function edit_user_data() {
    
    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            
        }
    });
}

function edit_user_pass() {

    confirmationAlert("Desea editar la contraseña?", "", "info").then((result) => {
        if (result.isConfirmed) {
            
        }
    });
}

function cambiar_pass_onclick(e) {
    
    if (confirm_pass_form.value != pass_form.value) {
        alertas('Contraseñas No Coinciden', 'warning');
    } else if (form_user.checkValidity()){
        edit_user_pass();
    }

}