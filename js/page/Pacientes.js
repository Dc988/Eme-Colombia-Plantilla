// const //TBL TIPO ID

tbl_pacientes = createDataTable('#tbl_Pacientes',
    "/Paciente/list",
   [{ 'data': 'id' },
   { 'data': 'IDENTIFICACION' },
   { 'data': 'Nombre_Completo' },
//          { 'data': 'Fecha_Ingreso' },
   { 'data': 'acciones' },
   ]);

if (typeof frmPaciente !== "undefined") {
    
    
    var typingTimer; // Temporizado

    Fecha_Na.setAttribute("target","Edad");
    Fecha_Na.addEventListener("change", (event) => {calcEdad(event)});

    Fecha_Na_2.setAttribute("target","Edad_2");
    Fecha_Na_2.addEventListener("change", (event) => {calcEdad(event)});
}

function btnPacienteViewData_onclick(id) {
    
    show_tap_panel("Panel_Paciente_Data_View");
}

function calcEdad(e) {

    txt_fecha_na = e.target;
    txt_edad = document.getElementById(e.target.getAttribute("target"));

  
    fechaNacimiento = new Date(txt_fecha_na.value);
    fechaActual = new Date();

    edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();


    if (fechaNacimiento.getMonth() > fechaActual.getMonth() || (fechaNacimiento.getMonth() === fechaActual.getMonth() && fechaNacimiento.getDate() > fechaActual.getDate())) {
        edad--;
    }

    if (edad > 0 && edad <= 110) {
        txt_fecha_na.classList.remove("is-invalid");
        setInputErrorMsg(txt_fecha_na, "Campo Requerido!!");
        txt_edad.value = edad;
    } else {

        txt_fecha_na.classList.add("is-invalid");
        setInputErrorMsg(txt_fecha_na, "Fecha no es valida!!");
        txt_edad.value = "";
    }

}

function validate_form_section(id) {
    var band = true;

    document.getElementById(id).querySelectorAll("input, select").forEach(item => {

        if (item.value == "") {
            item.classList.add("is-invalid");

            band = false;
        } else {
            item.classList.remove("is-invalid");
        }

    });

    return band;
}

function go_to_panel_2_onclick() {
    if (validate_form_section("Panel_1")) {
        show_tap_panel("Panel_2");
    }
}

function go_to_panel_3_onclick() {
    if (validate_form_section("Panel_2")) {
        MES_ACCIDENTE.value = "1";
        show_tap_panel("Panel_3");

    }
}

function go_to_panel_4_onclick() {
    if (validate_form_section("Panel_3")) {
        if (Id_2.value == "") {
            Id_2.value = id_form.value;
            IDENTIFICACION_2.value = IDENTIFICACION.value;
            Apellido_1_2.value = Apellido_1.value;
            Apellido_2_2.value = Apellido_2.value;
            Nombre_1_2.value = Nombre_1.value;
            Nombre_2_2.value = Nombre_2.value;
            Fecha_Na_2.value = Fecha_Na.value;
            Direccion_2.value = Direccion.value;
            Telefono_2.value = Telefono.value;
            Celular_2.value = Celular.value;
            Edad_2.value = Edad.value;
            Sexo_2.value = Sexo.value;
            Barrio_2.value = Barrio.value;
            Tipo_ID_FK_2.value = Tipo_ID_FK.value;
            tipo_pac_FK_2.value = tipo_pac_FK.value;
        }

        show_tap_panel("Panel_4");
    }
}

function DataPaciente_onclick() {


    if (frmPaciente.checkValidity()) {
        switch (btn_submit_form.textContent) {
            case "Registrar":
                save_paciente_data();
                break;
            case "Editar":
                //edit_paciente_data();
                break;

            default:
                alertas('Error en el componente submit', 'warning');
        }
    } else {
        alertas("Oops, Hay Campos abligatorios", "warning");
    }
}

function save_paciente_data() {
    confirmationAlert("Desea Guardar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            animation_load();
            url = "/Paciente/registrar";
            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(frmPaciente))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);

                    if (getFromJson(value, "code") == 200) {
                        alertas(getFromJson(value, "msg"), getFromJson(value, "icon"));
                        frmPaciente.reset();
                        tbl_pacientes.ajax.reload();
                        show_tap_panel("Panel_Main");
                    } else {
                        alertas(`Oops, ${getFromJson(value, "msg")}`, getFromJson(value, "icon"));
                        console.log(getFromJson(value, "msg"));
                    }
                    remove_animation_load();
                });
        }
    });
}

function edit_paciente_data() {

    confirmationAlert("Desea editar la información?", "", "info").then((result) => {
        if (result.isConfirmed) {
            url = "/Configuraciones/Usuarios/" + id_form.value + "/edit";

            http.setUrl(url)
                .setMethod("POST")
                .setBody(new FormData(form_user))
                .send()
                .then(function (value) {
                    value = JSON.parse(value);
                    if (getFromJson(value, "status") == "ok") {
                        alertas(getFromJson(value, "msg"), getFromJson(value, "icon"));
                        registrar_permisos(id_form.value);
                    } else {
                        alertas(`Oops, ${getFromJson(value, "msg")}`, getFromJson(value, "icon"));
                        console.log(getFromJson(value, "msg"));
                    }
                });
        }
    });
}


/*
Apellido_1:CASTRO
Apellido_1_2:CASTRO
Apellido_2:DOMINGUEZ
Apellido_2_2:DOMINGUEZ
Aseguradora_FK:10
Barrio:barrio
Barrio_2:barrio
Celular:3003003030
Celular_2:3003003030
Colaborador_FK:8
Departamento:Atlántico
Direccion:Carrera 2 sur
Direccion_2:Carrera 2 sur
Direccion_evento:AA
Edad:29
Edad_2:29
Estado_Civil_FK:1
Fecha_Ingreso:2024-05-02
Fecha_Na:2001-01-29
Fecha_Na_2:2001-01-29
Fecha_evento:2024-05-02
Hora_Ingreso:A
Hora_evento:A
IDENTIFICACION:1002012988
IDENTIFICACION_2:1002012988
Id:
Id_2:
Identificacion_prop_vehiculo:1
MES_ACCIDENTE:1
Marca:A
Municipio_fk:5
Nombre_1:DICMAR
Nombre_1_2:DICMAR
Nombre_2:ANDRES
Nombre_2_2:ANDRES
Nombre_prop_vehiculo:1
Ocupacion_FK:1
Placa:1
Poliza:1
Sexo:m
Sexo_2:m
Telefono:3003003030
Telefono_2:3003003030
Tipo_ID_FK:4
Tipo_ID_FK_2:4
Tipo_Vehiculo:1
Tipo_ingreso_FK:2
Triage:II
apellido_prop_vehiculo:1
tipo_pac_FK:5
tipo_pac_FK_2:5

"Id"=> $json["Id"],

"Apellido_1"=> $json["Apellido_1"],
"Apellido_2"=> $json["Apellido_2"],
"Nombre_1"=> $json["Nombre_1"],
"Nombre_2"=> $json["Nombre_2"],
"IDENTIFICACION"=> $json["IDENTIFICACION"],
"Fecha_Na"=> $json["Fecha_Na"],
"Direccion"=> $json["Direccion"],
"Telefono"=> $json["Telefono"],
"Celular"=> $json["Celular"],
"Edad"=> $json["Edad"],
"Sexo"=> $json["Sexo"],
"Barrio"=> $json["Barrio"],

"Tipo_ID_FK"=> $json["Tipo_ID_FK"],
"Estado_Civil_FK"=> $json["Estado_Civil_FK"],
"Ocupacion_FK"=> $json["Ocupacion_FK"],

"tipo_pac_FK"=> $json["tipo_pac_FK"],
"Aseguradora_FK"=> $json["Aseguradora_FK"],
"Colaborador_FK"=> $json["Colaborador_FK"],

"Tipo_ingreso_FK"=> $json["Tipo_ingreso_FK"],"]
"Fecha_Ingreso"=> $json["Fecha_Ingreso"],
"Triage"=> $json["Triage"],
"Hora_Ingreso"=> $json["Hora_Ingreso"],
"MES_ACCIDENTE"=> $json["MES_ACCIDENTE"],

"Fecha_evento"=> $json["Fecha_evento"],
"Departamento"=> $json["Departamento"],
"Direccion_evento"=> $json["Direccion_evento"],
"Hora_evento"=> $json["Hora_evento"],
"Municipio_fk"=> $json["Municipio_fk"],

"Tipo_Vehiculo"=> $json["Tipo_Vehiculo"],
"apellido_prop_vehiculo"=> $json["apellido_prop_vehiculo"],
"Poliza"=> $json["Poliza"],
"Marca"=> $json["Marca"],
"Placa"=> $json["Placa"],
"Nombre_prop_vehiculo"=> $json["Nombre_prop_vehiculo"],
"Identificacion_prop_vehic=> $json["Identificacion_prop_vehicu"],
*/













































