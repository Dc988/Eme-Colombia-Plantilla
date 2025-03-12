class httpRequest {

    constructor() {
        this.url = "";
        this.method = "POST";
        this.body = null;
        this.response = null;
        this.http = new XMLHttpRequest();
    }

    setUrl(url) {
        this.url = url;
        return this;
    }

    setMethod(method) {
        this.method = method;
        return this;
    }

    setBody(body) {
        this.body = body;
        return this;
    }

    async send() {
        try {
            this.response = await fetch(this.url, {
                method: this.method,
                body: this.body
            });
            this.response = await this.response.text();

        } catch (error) {
            console.log("Error: " + error.name);
            console.log("Error: " + error.message);
            this.response = null;
        }

        this.setUrl("");
        this.setMethod("POST");
        this.setBody(null);

        return this.response;
    }
}

let sidebar_nicescroll_opts = {
    cursorcolor: "var(--default)",  // Rojo
    cursorwidth: "5px",
    cursorborder: "none",
    background: "none",   // Fondo de la barra de scroll
    cursorborderradius: "5px", // Bordes redondeados
    scrollspeed: 60,         // Velocidad de desplazamiento
    mousescrollstep: 40,     // Sensibilidad del scroll del mouse
};

const sidebar = document.querySelector(".sidebar"),
    title_form = document.getElementById("title"),
    btn_submit_form = document.getElementById("btnAccion"),
    btn_cancel_form = document.getElementById("btnCancel"),
    
    language = {
        'decimal': '',
        'emptyTable': 'No hay información',
        'info': 'Mostrando _START_ a _END_ de _TOTAL_ Entradas',
        'infoEmpty': 'Mostrando 0 to 0 of 0 Entradas',
        'infoFiltered': '(Filtrado de _MAX_ total entradas)',
        'infoPostFix': '',
        'thousands': ',',
        'lengthMenu': 'Mostrar  _MENU_  Entradas',
        'loadingRecords': 'Cargando...',
        'processing': 'Procesando...',
        'search': '<i class="fa fa-search fa-lg me-2"></i>',
        'zeroRecords': 'Sin resultados encontrados',
        'paginate': {
            'first': '<i class="fa fa-angle-double-left"></i>',
            'previous': '<i class="fa fa-angle-left"></i>',
            'last': '<i class="fa fa-angle-double-right"></i>',
            'next': '<i class="fa fa-angle-right"></i>'
        }

    },
    buttons = [/*{
        //Botón para Excel
        extend: 'excel',
        footer: true,
        title: 'Archivo',
        filename: 'Export_File',
    
        //Aquí es donde generas el botón personalizado
        text: '<button class="btn btn-success"><i class="fa fa-file-excel-o"></i></button>'
    },
    //Botón para PDF
    {
        extend: 'pdf',
        footer: true,
        title: 'Archivo PDF',
        filename: 'reporte',
        text: '<button class="btn btn-danger"><i class="fa fa-file-pdf-o"></i></button>'
    },
    //Botón para print
    {
        extend: 'print',
        footer: true,
        title: 'Reportes',
        filename: 'Export_File_print',
        text: '<button class="btn btn-info"><i class="fa fa-print"></i></button>'
    }*/
    ],
    http = new httpRequest();


function menu_animation() {
    if (sidebar == null) {
        alert("sidebar no definido", "info");
    } else {
        sidebar.classList.toggle("active");
    }
}

function animation_load() {
    $("#loading-modal").modal("show");
}

function remove_animation_load() {
    setTimeout(function () {
        $("#loading-modal").modal("hide");
    }, 500);
}

function form_validated(form) {
    if (!form.classList.contains("was-validated")) {
        form.classList.add("was-validated");
    }
}


function exit_sesion() {
    confirmationAlert("Desea cerrar sesión?", "", "info")
        .then((result) => {
            if (result.isConfirmed) {
                window.location.href ="index.html";
            }
        });
}

function alertas(msg, icono) {
    Swal.fire({
        position: 'center',
        icon: icono,
        title: msg,
        showConfirmButton: false,
        timer: 3000
    })
}

function confirmationAlert(titulo, texto, icon) {
    return Swal.fire({
        title: titulo,
        html: texto,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    });
}

function setInputErrorMsg(input, msg) {
    error_msg = input.nextElementSibling.nextElementSibling;
    error_msg.innerHTML = msg;
}

function createDataTable(table, url, columns) {
    return $(table).DataTable({
       
        columns: columns,
        responsive: true,
        autowidth: false,
        autoheigth:true,
        bDestroy: true,

        lengthMenu: [
            [5, 10, 15, 20, 25, 50, -1],
            [5, 10, 15, 20, 25, 50, 'All']
        ]
        ,
        order: [
            [0, "desc"]
        ],

        pagingType: 'simple_numbers',

        language,
        dom: "<'d-flex justify-content-end'<'d-none mb-2'l><'d-none'B><'mb-2'f>>" +
            "<'row'<'text-start col-sm-12'tr>>" +
            "<'d-flex justify-content-between'<'mt-3'i><'mt-2'p>>",
        buttons

    });
}


function show_tap_panel(target, container = null) {
    target = document.getElementById(target);


    if (target != undefined) {

        container = container ? document.getElementById(container) : target.parentNode;

        if (container != undefined) {

            container = Array.from(container.children).filter(function (child) {
                return child.getAttribute('role') === 'tabpanel';
            });

            container.forEach((panel) => {

                if (panel != target) {
                    panel.classList.remove("show");
                    panel.classList.remove("active");
                } else {

                    panel.classList.add("show");
                    panel.classList.add("active");
                }
            });
        } else {
            console.log("Okn´t container");
        }
    } else {
        console.log("Okn´t target");
    }

}

document.querySelectorAll('[data-toggle="tab"]').forEach((element) => {

    element.addEventListener("click", function () {
        target = element.getAttribute("data-target");
        //container = element.getAttribute("data-tab-content");
        show_tap_panel(target);

    });
});

(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {

        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');

        }, false)

        form.addEventListener('reset', event => {
            form.classList.remove('was-validated')
        }, false)
    })
})();

function getFromJson(json, prop){
    if(Object.keys(json).includes(prop)){
        return json[prop];
    }

    return null;
}


function setDataCombobox(table, combobox) {
    url =   `${base_url}${table}`;
    http.setUrl(url)
        .setMethod("GET")
        .send()
        .then(function (value) {
            value = JSON.parse(value);
            for (item of value) {
                key = Object.keys(item);
                key = key.length > 1 ? key[1] : key[0];

                opcion = document.createElement("option");
                opcion.text = item[key];
                opcion.value = item["id"];
                combobox.appendChild(opcion);
            }
        });
}


$(document).ready(function() {
    $(".body-content").niceScroll(sidebar_nicescroll_opts);
});



