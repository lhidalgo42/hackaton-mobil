function barcoderead() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
            //document.getElementById("btnRegistrar").disabled = true;
            if(result.format=="QR_CODE")
            {
                $.ajax({
                    url:result.text,
                    datatype:'html',
                    complete:function(data){
                        document.getElementById("contenidoRegistro").innerHTML=data;
                    }
                })

            }
            else
            {
                alert ("proximamente");
            }

        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera : false, // iOS and Android
            showFlipCameraButton : true, // iOS and Android
            showTorchButton : false, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            prompt : "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations : true, // iOS
            disableSuccessBeep: false // iOS
        }
    );
}
function ocultarContrato()
{
    document.getElementById("formTipoContrato").style="display: none";
}

function mostrarContrato() {
    document.getElementById("formTipoContrato").style="display: block";
}

function guardarPL()
{
    //informacion del usuario
    tipoTrabajador = document.getElementsByName("rbTrabajador").values;
    tipoContrato  =document.getElementsByName("rbContrato").values;
    antiguedad = document.getElementById("txtAntiguedad").values;
    fijo =document.getElementById("txtFijos").values;
    variable = document.getElementById("txtVariable").values

    $.post("p1.vcpc.cl/servicio/crear",{
        "algo":algo

    },function( data ) {
        $( ".result" ).html( data );
    });

}