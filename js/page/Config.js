const
    //TBL TIPO ID

    tbl_tipo_id = createDataTable('#tbl_tipo_id',
        "/Configuraciones/General/Tipo_id/list",
        [{ 'data': 'id' },
        { 'data': 'TIPO_ID' },
        { 'data': 'acciones' },
        ]),

    //TBL COLABORADOR

    frmColaborador = document.getElementById("frmColaborador"), tbl_colaborador = createDataTable('#tbl_Colaborador',
        "/Configuraciones/General/Colaborador/list",
        [{ 'data': 'id' },
        { 'data': 'COLABORADOR' },
        { 'data': 'acciones' },
        ]),

    //TBL COLABORADOR

    tbl_Seguradora = createDataTable('#tbl_Seguradora',
        "/Configuraciones/General/Seguradora/list",
        [{ 'data': 'id' },
        { 'data': 'SEGURADORA' },
        { 'data': 'acciones' },
        ]),

    //TBL FACTURADOR

    tbl_Facturador = createDataTable('#tbl_Facturador',
        "/Configuraciones/General/Facturador/list",
        [{ 'data': 'id' },
        { 'data': 'FACTURADOR' },
        { 'data': 'acciones' },
        ]),

    //TBL Estado_Fact
    tbl_Estado_Fact = createDataTable('#tbl_Estado_Fact',
        "/Configuraciones/General/Estado_Fact/list",
        [{ 'data': 'id' },
        { 'data': 'ESTADO' },
        { 'data': 'acciones' },
        ]),

    //TBL ESTADO_CIVIL
    tbl_Estado_Civil = createDataTable('#tbl_Estado_Civil',
        "/Configuraciones/General/Estado_Civil/list",
        [{ 'data': 'id' },
        { 'data': 'ESTADO_CIVIL' },
        { 'data': 'acciones' },
        ]),

    //TBL CONDICION_PACIENTE
    tbl_Condicion_Paciente = createDataTable('#tbl_Condicion_Paciente',
        "/Configuraciones/General/Condicion_Paciente/list",
        [{ 'data': 'id' },
        { 'data': 'CONDICION_PACIENTE' },
        { 'data': 'acciones' },
        ]),

    //TBL OCUPACION
    tbl_Ocupacion = createDataTable('#tbl_Ocupacion',
        "/Configuraciones/General/Ocupacion/list",
        [{ 'data': 'id' },
        { 'data': 'OCUPACION' },
        { 'data': 'acciones' },
        ]),

    //TBL Tipo_Ingreso
    tbl_Tipo_Ingreso = createDataTable('#tbl_Tipo_Ingreso',
        "/Configuraciones/General/Tipo_Ingreso/list",
        [{ 'data': 'id' },
        { 'data': 'TIPO' },
        { 'data': 'acciones' },
        ]),

    //TBL MUNICIPIO
    tbl_Municipio = createDataTable('#tbl_Municipio',
        "/Configuraciones/General/Municipio/list",
        [{ 'data': 'id' },
        { 'data': 'MUNICIPIO' },
        { 'data': 'acciones' },
        ]);

// METODOS TIPO ID
function frmTipo_Id_onclick() {
    title_form.innerHTML = "<i class='fa fa-file-circle-plus icon' ></i> Nuevo Registro";
    btn_submit_form.textContent = "Registrar";
    id_form.value = "";
    frmTipo_Id.reset();
}

function btnEliminarTipo_Id_onclick(id) {
    confirmationAlert("Desea eliminar el registro?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Tipo_id/" + id + "/delete";
            http.setUrl(url)
                .setMethod("DELETE")
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_tipo_id.ajax.reload();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();

                });
        }
    });
}

function btnEditarTipo_Id_onclick(id) {
    show_tap_panel("Panel_Form");
    title_form.innerHTML = "<i class='fa fa-tasks icon' ></i> Detalles ";
    btn_submit_form.textContent = "Editar";
    frmTipo_Id.reset(); set_tipo_id_data(id);
}

function set_tipo_id_data(id) {
    url = "/Configuraciones/General/Tipo_id/" + id;
    http.setUrl(url)
        .setMethod("POST")
        .send()
        .then(function (value) {
            value = JSON.parse(value);
            if (value.status == "ok") {
                value = value.data; id_form.value = value.id;
                TIPO_ID.value = value.TIPO_ID;
                ABREVIACION.value = value.ABREVIACION;
            } else {
                alertas(`Oops, ${value.msg}`, value.icon);
                console.log(value.msg);
            }
        });
}

function save_tipo_id_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Tipo_id/registrar";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmTipo_Id))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.code == 200) {
                        tbl_tipo_id.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function edit_tipo_id_data() {
    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Tipo_id/" + id_form.value + "/edit";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmTipo_Id))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_tipo_id.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function DataTipo_id_onclick(e) {
    
    if (frmTipo_Id.checkValidity()) {
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_tipo_id_data();
                break;
            case "Editar":
                edit_tipo_id_data();
                break;
            default:
                alertas('Error en el componente submit', 'warning');
        }
    }
    

}// METODOS COLABORADOR
function frmColaborador_onclick() {
    title_form.innerHTML = "<i class='fa fa-file-circle-plus icon' ></i> Nuevo Registro";
    btn_submit_form.textContent = "Registrar";
    id_form.value = "";
    frmColaborador.reset();
}

function btnEliminarColaborador_onclick(id) {
    confirmationAlert("Desea eliminar el registro?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Colaborador/" + id + "/delete";
            http.setUrl(url)
                .setMethod("DELETE")
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_colaborador.ajax.reload();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function btnEditarColaborador_onclick(id) {
    show_tap_panel("Panel_Form");
    title_form.innerHTML = "<i class='fa fa-tasks icon' ></i> Detalles ";
    btn_submit_form.textContent = "Editar";
    frmColaborador.reset(); 
    set_Colaborador_data(id);
}

function set_Colaborador_data(id) {
    url = "/Configuraciones/General/Colaborador/" + id;
    http.setUrl(url)
        .setMethod("POST")
        .send()
        .then(function (value) {
            value = JSON.parse(value);
            if (value.status == "ok") {
                value = value.data; id_form.value = value.id;
                COLABORADOR.value = value.COLABORADOR;
                CODIGO_ASIGNADO.value = value.CODIGO_ASIGNADO;
            } else {
                alertas(`Oops, ${value.msg}`, value.icon);
                console.log(value.msg);
            }
        });
}

function save_Colaborador_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Colaborador/registrar";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmColaborador))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.code == 200) {
                        tbl_colaborador.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function edit_Colaborador_data() {
    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Colaborador/" + id_form.value + "/edit";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmColaborador))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_colaborador.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function DataColaborador_onclick(e) {
    if (frmColaborador.checkValidity()) {
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_Colaborador_data();
                break;
            case "Editar":
                edit_Colaborador_data();
                break;
            default:
                alertas('Error en el componente submit', 'warning');
        }
    }
}// METODOS Municipio
function frmMunicipio_onclick() {
    title_form.innerHTML = "<i class='fa fa-file-circle-plus icon' ></i> Nuevo Registro";
    btn_submit_form.textContent = "Registrar";
    id_form.value = "";
    frmMunicipio.reset();
}

function btnEliminarMunicipio_onclick(id) {
    confirmationAlert("Desea eliminar el registro?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Municipio/" + id + "/delete";
            http.setUrl(url)
                .setMethod("DELETE")
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Municipio.ajax.reload();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function btnEditarMunicipio_onclick(id) {
    show_tap_panel("Panel_Form");
    title_form.innerHTML = "<i class='fa fa-tasks icon' ></i> Detalles ";
    btn_submit_form.textContent = "Editar";
    frmMunicipio.reset(); set_Municipio_data(id);
}

function set_Municipio_data(id) {
    url = "/Configuraciones/General/Municipio/" + id;
    http.setUrl(url)
        .setMethod("POST")
        .send()
        .then(function (value) {
            value = JSON.parse(value);
            if (value.status == "ok") {
                value = value.data; id_form.value = value.id;
                MUNICIPIO.value = value.MUNICIPIO;
            } else {
                alertas(`Oops, ${value.msg}`, value.icon);
                console.log(value.msg);
            }
        });
}

function save_Municipio_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Municipio/registrar";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmMunicipio))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.code == 200) {
                        tbl_Municipio.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function edit_Municipio_data() {
    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Municipio/" + id_form.value + "/edit";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmMunicipio))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Municipio.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function DataMunicipio_onclick(e) {
    if (frmMunicipio.checkValidity()) {
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_Municipio_data();
                break;
            case "Editar":
                edit_Municipio_data();
                break;
            default:
                alertas('Error en el componente submit', 'warning');
        }
    }
}// METODOS Tipo_Ingreso
function frmTipo_Ingreso_onclick() {
    title_form.innerHTML = "<i class='fa fa-file-circle-plus icon' ></i> Nuevo Registro";
    btn_submit_form.textContent = "Registrar";
    id_form.value = "";
    frmTipo_Ingreso.reset();
}

function btnEliminarTipo_Ingreso_onclick(id) {
    confirmationAlert("Desea eliminar el registro?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Tipo_Ingreso/" + id + "/delete";
            http.setUrl(url)
                .setMethod("DELETE")
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Tipo_Ingreso.ajax.reload();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function btnEditarTipo_Ingreso_onclick(id) {
    show_tap_panel("Panel_Form");
    title_form.innerHTML = "<i class='fa fa-tasks icon' ></i> Detalles ";
    btn_submit_form.textContent = "Editar";
    frmTipo_Ingreso.reset(); set_Tipo_Ingreso_data(id);
}

function set_Tipo_Ingreso_data(id) {
    url = "/Configuraciones/General/Tipo_Ingreso/" + id;
    http.setUrl(url)
        .setMethod("POST")
        .send()
        .then(function (value) {
            value = JSON.parse(value);
            if (value.status == "ok") {
                value = value.data; id_form.value = value.id;
                TIPO.value = value.TIPO;
            } else {
                alertas(`Oops, ${value.msg}`, value.icon);
                console.log(value.msg);
            }
        });
}

function save_Tipo_Ingreso_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Tipo_Ingreso/registrar";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmTipo_Ingreso))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.code == 200) {
                        tbl_Tipo_Ingreso.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function edit_Tipo_Ingreso_data() {
    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Tipo_Ingreso/" + id_form.value + "/edit";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmTipo_Ingreso))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Tipo_Ingreso.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function DataTipo_Ingreso_onclick(e) {
    if (frmTipo_Ingreso.checkValidity()) {
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_Tipo_Ingreso_data();
                break;
            case "Editar":
                edit_Tipo_Ingreso_data();
                break;
            default:
                alertas('Error en el componente submit', 'warning');
        }
    }
}
// METODOS Ocupacion
function frmOcupacion_onclick() {
    title_form.innerHTML = "<i class='fa fa-file-circle-plus icon' ></i> Nuevo Registro";
    btn_submit_form.textContent = "Registrar";
    id_form.value = "";
    frmOcupacion.reset();
}

function btnEliminarOcupacion_onclick(id) {
    confirmationAlert("Desea eliminar el registro?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Ocupacion/" + id + "/delete";
            http.setUrl(url)
                .setMethod("DELETE")
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Ocupacion.ajax.reload();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function btnEditarOcupacion_onclick(id) {
    show_tap_panel("Panel_Form");
    title_form.innerHTML = "<i class='fa fa-tasks icon' ></i> Detalles ";
    btn_submit_form.textContent = "Editar";
    frmOcupacion.reset(); set_Ocupacion_data(id);
}

function set_Ocupacion_data(id) {
    url = "/Configuraciones/General/Ocupacion/" + id;
    http.setUrl(url)
        .setMethod("POST")
        .send()
        .then(function (value) {
            value = JSON.parse(value);
            if (value.status == "ok") {
                value = value.data; id_form.value = value.id;
                OCUPACION.value = value.OCUPACION;
            } else {
                alertas(`Oops, ${value.msg}`, value.icon);
                console.log(value.msg);
            }
        });
}

function save_Ocupacion_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Ocupacion/registrar";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmOcupacion))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.code == 200) {
                        tbl_Ocupacion.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function edit_Ocupacion_data() {
    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Ocupacion/" + id_form.value + "/edit";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmOcupacion))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Ocupacion.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function DataOcupacion_onclick(e) {
    if (frmOcupacion.checkValidity()) {
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_Ocupacion_data();
                break;
            case "Editar":
                edit_Ocupacion_data();
                break;
            default:
                alertas('Error en el componente submit', 'warning');
        }
    }
}// METODOS Condicion_Paciente
function frmCondicion_Paciente_onclick() {
    title_form.innerHTML = "<i class='fa fa-file-circle-plus icon' ></i> Nuevo Registro";
    btn_submit_form.textContent = "Registrar";
    id_form.value = "";
    frmCondicion_Paciente.reset();
}

function btnEliminarCondicion_Paciente_onclick(id) {
    confirmationAlert("Desea eliminar el registro?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Condicion_Paciente/" + id + "/delete";
            http.setUrl(url)
                .setMethod("DELETE")
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Condicion_Paciente.ajax.reload();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function btnEditarCondicion_Paciente_onclick(id) {
    show_tap_panel("Panel_Form");
    title_form.innerHTML = "<i class='fa fa-tasks icon' ></i> Detalles ";
    btn_submit_form.textContent = "Editar";
    frmCondicion_Paciente.reset(); set_Condicion_Paciente_data(id);
}

function set_Condicion_Paciente_data(id) {
    url = "/Configuraciones/General/Condicion_Paciente/" + id;
    http.setUrl(url)
        .setMethod("POST")
        .send()
        .then(function (value) {
            value = JSON.parse(value);
            if (value.status == "ok") {
                value = value.data; id_form.value = value.id;
                CONDICION_PACIENTE.value = value.CONDICION_PACIENTE;
            } else {
                alertas(`Oops, ${value.msg}`, value.icon);
                console.log(value.msg);
            }
        });
}

function save_Condicion_Paciente_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Condicion_Paciente/registrar";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmCondicion_Paciente))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.code == 200) {
                        tbl_Condicion_Paciente.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function edit_Condicion_Paciente_data() {
    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Condicion_Paciente/" + id_form.value + "/edit";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmCondicion_Paciente))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Condicion_Paciente.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function DataCondicion_Paciente_onclick(e) {
    if (frmCondicion_Paciente.checkValidity()) {
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_Condicion_Paciente_data();
                break;
            case "Editar":
                edit_Condicion_Paciente_data();
                break;
            default:
                alertas('Error en el componente submit', 'warning');
        }
    }
}// METODOS Estado_Civil
function frmEstado_Civil_onclick() {
    title_form.innerHTML = "<i class='fa fa-file-circle-plus icon' ></i> Nuevo Registro";
    btn_submit_form.textContent = "Registrar";
    id_form.value = "";
    frmEstado_Civil.reset();
}

function btnEliminarEstado_Civil_onclick(id) {
    confirmationAlert("Desea eliminar el registro?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Estado_Civil/" + id + "/delete";
            http.setUrl(url)
                .setMethod("DELETE")
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Estado_Civil.ajax.reload();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function btnEditarEstado_Civil_onclick(id) {
    show_tap_panel("Panel_Form");
    title_form.innerHTML = "<i class='fa fa-tasks icon' ></i> Detalles ";
    btn_submit_form.textContent = "Editar";
    frmEstado_Civil.reset(); set_Estado_Civil_data(id);
}

function set_Estado_Civil_data(id) {
    url = "/Configuraciones/General/Estado_Civil/" + id;
    http.setUrl(url)
        .setMethod("POST")
        .send()
        .then(function (value) {
            value = JSON.parse(value);
            if (value.status == "ok") {
                value = value.data; id_form.value = value.id;
                ESTADO_CIVIL.value = value.ESTADO_CIVIL;
            } else {
                alertas(`Oops, ${value.msg}`, value.icon);
                console.log(value.msg);
            }
        });
}

function save_Estado_Civil_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Estado_Civil/registrar";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmEstado_Civil))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.code == 200) {
                        tbl_Estado_Civil.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function edit_Estado_Civil_data() {
    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Estado_Civil/" + id_form.value + "/edit";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmEstado_Civil))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Estado_Civil.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function DataEstado_Civil_onclick(e) {
    if (frmEstado_Civil.checkValidity()) {
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_Estado_Civil_data();
                break;
            case "Editar":
                edit_Estado_Civil_data();
                break;
            default:
                alertas('Error en el componente submit', 'warning');
        }
    }
}
// METODOS Estado_Fact
function frmEstado_Fact_onclick() {
    title_form.innerHTML = "<i class='fa fa-file-circle-plus icon' ></i> Nuevo Registro";
    btn_submit_form.textContent = "Registrar";
    id_form.value = "";
    frmEstado_Fact.reset();
}

function btnEliminarEstado_Fact_onclick(id) {
    confirmationAlert("Desea eliminar el registro?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Estado_Fact/" + id + "/delete";
            http.setUrl(url)
                .setMethod("DELETE")
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Estado_Fact.ajax.reload();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function btnEditarEstado_Fact_onclick(id) {
    show_tap_panel("Panel_Form");
    title_form.innerHTML = "<i class='fa fa-tasks icon' ></i> Detalles ";
    btn_submit_form.textContent = "Editar";
    frmEstado_Fact.reset(); set_Estado_Fact_data(id);
}

function set_Estado_Fact_data(id) {
    url = "/Configuraciones/General/Estado_Fact/" + id;
    http.setUrl(url)
        .setMethod("POST")
        .send()
        .then(function (value) {
            value = JSON.parse(value);
            if (value.status == "ok") {
                value = value.data; id_form.value = value.id;
                ESTADO.value = value.ESTADO;
            } else {
                alertas(`Oops, ${value.msg}`, value.icon);
                console.log(value.msg);
            }
        });
}

function save_Estado_Fact_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Estado_Fact/registrar";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmEstado_Fact))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.code == 200) {
                        tbl_Estado_Fact.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function edit_Estado_Fact_data() {
    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Estado_Fact/" + id_form.value + "/edit";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmEstado_Fact))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Estado_Fact.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function DataEstado_Fact_onclick(e) {
    if (frmEstado_Fact.checkValidity()) {
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_Estado_Fact_data();
                break;
            case "Editar":
                edit_Estado_Fact_data();
                break;
            default:
                alertas('Error en el componente submit', 'warning');
        }
    }
}// METODOS Facturador
function frmFacturador_onclick() {
    title_form.innerHTML = "<i class='fa fa-file-circle-plus icon' ></i> Nuevo Registro";
    btn_submit_form.textContent = "Registrar";
    id_form.value = "";
    frmFacturador.reset();
}

function btnEliminarFacturador_onclick(id) {
    confirmationAlert("Desea eliminar el registro?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Facturador/" + id + "/delete";
            http.setUrl(url)
                .setMethod("DELETE")
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Facturador.ajax.reload();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function btnEditarFacturador_onclick(id) {
    show_tap_panel("Panel_Form");
    title_form.innerHTML = "<i class='fa fa-tasks icon' ></i> Detalles ";
    btn_submit_form.textContent = "Editar";
    frmFacturador.reset(); 
    set_Facturador_data(id);
}

function set_Facturador_data(id) {
    url = "/Configuraciones/General/Facturador/" + id;
    http.setUrl(url)
        .setMethod("POST")
        .send()
        .then(function (value) {
            value = JSON.parse(value);
            if (value.status == "ok") {
                value = value.data; id_form.value = value.id;
                FACTURADOR.value = value.FACTURADOR;
            } else {
                alertas(`Oops, ${value.msg}`, value.icon);
                console.log(value.msg);
            }
        });
}

function save_Facturador_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Facturador/registrar";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmFacturador))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.code == 200) {
                        tbl_Facturador.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function edit_Facturador_data() {
    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Facturador/" + id_form.value + "/edit";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmFacturador))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Facturador.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function DataFacturador_onclick(e) {
    if (FACTURADOR.checkValidity()) {
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_Facturador_data();
                break;
            case "Editar":
                edit_Facturador_data();
                break;
            default:
                alertas('Error en el componente submit', 'warning');
        }
    }
}// METODOS Seguradora
function frmSeguradora_onclick() {
    title_form.innerHTML = "<i class='fa fa-file-circle-plus icon' ></i> Nuevo Registro";
    btn_submit_form.textContent = "Registrar";
    id_form.value = "";
    frmSeguradora.reset();
}

function btnEliminarSeguradora_onclick(id) {
    confirmationAlert("Desea eliminar el registro?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Seguradora/" + id + "/delete";
            http.setUrl(url)
                .setMethod("DELETE")
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Seguradora.ajax.reload();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function btnEditarSeguradora_onclick(id) {
    show_tap_panel("Panel_Form");
    title_form.innerHTML = "<i class='fa fa-tasks icon' ></i> Detalles ";
    btn_submit_form.textContent = "Editar";
    frmSeguradora.reset(); set_Seguradora_data(id);
}

function set_Seguradora_data(id) {
    url = "/Configuraciones/General/Seguradora/" + id;
    http.setUrl(url)
        .setMethod("POST")
        .send()
        .then(function (value) {
            value = JSON.parse(value);
            if (value.status == "ok") {
                value = value.data; id_form.value = value.id;
                SEGURADORA.value = value.SEGURADORA;
            } else {
                alertas(`Oops, ${value.msg}`, value.icon);
                console.log(value.msg);
            }
        });
}

function save_Seguradora_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Seguradora/registrar"; http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmSeguradora))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.code == 200) {
                        tbl_Seguradora.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function edit_Seguradora_data() {
    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Configuraciones/General/Seguradora/" + id_form.value + "/edit";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmSeguradora))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (value.status == "ok") {
                        tbl_Seguradora.ajax.reload();
                        btn_cancel_form.click();
                        alertas(value.msg, value.icon);
                    } else {
                        alertas(`Oops, ${value.msg}`, value.icon);
                        console.log(value.msg);
                    }
                    remove_animation_load();
                });
        }
    });
}

function DataSeguradora_onclick(e) {
    if (frmSeguradora.checkValidity()) {
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_Seguradora_data();
                break;
            case "Editar":
                edit_Seguradora_data();
                break;
            default:
                alertas('Error en el componente submit', 'warning');
        }
    }
}