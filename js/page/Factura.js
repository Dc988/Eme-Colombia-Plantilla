if(!(typeof tbl_Facturacion === 'undefined')){
    const tbl_factura = createDataTable('#tbl_Facturacion'
        , "/Facturacion/list_fact",
        [{ 'data': 'ID' },
        { 'data': 'FACTURA' },
        { 'data': 'FECHA_INGRESO' },
        { 'data': 'ESTADO' },
        { 'data': 'acciones' }]
    );
}

function btnEditarFact_onclick(id) {
    show_tap_panel("Panel_Form");
}

function setInicialState() {

    if (ESTADO_fk.value == 5) {
        ESTADO_fk.value = 4;
        ESTADO_fk.classList.add("disabled");
        VALOR.classList.add("disabled");
        GLOSA.classList.add("disabled");
        FACTURADOR_FK.classList.remove("disabled");
    } else {
        FACTURADOR_FK.classList.add("disabled");
        ESTADO_fk.classList.remove("disabled");
        VALOR.classList.remove("disabled");
        GLOSA.classList.remove("disabled");
    }
}

function calcValorT() {
    if (VALOR.value != 0) {
        VALOR_PAGADO.value = VALOR.value - GLOSA.value;
    }

}

function deleteFactura_onclick() {
    confirmationAlert("Desea eliminar el registro?", "", "info").then((result) => {
        if (result.isConfirmed) {
        }
    });
}

function DataFactura_onclick() {
    if (frmFactura.checkValidity()) {
        confirmationAlert("Desea ingresar la información?", "", "info").then((result) => {
            
        });
    } else {
        alertas("Oops, Hay Campos abligatorios", "warning");
    }

}


