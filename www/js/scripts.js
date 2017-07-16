function barcoderead() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            $("#result").html("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);

            if (result.format == "QR_CODE") {
                $.ajax({
                    type: "GET",
                    url: link,
                    success: function (data) {


                        try // Firefox, Mozilla, Opera, etc.
                        {
                            parser = new DOMParser();
                            xmlDoc = parser.parseFromString(data, "text/xml");
                        }
                        catch (e) {
                            alert(e.message);
                            return;
                        }

                        var estado = xmlDoc.getElementsByClassName("setWidthOfSecondColumn")[0].innerHTML;
                        var dni_number = xmlDoc.getElementsByName("form:docNumber")[0].value;
                        var rut = xmlDoc.getElementsByName("form:run")[0].value;
                        var tipo = xmlDoc.getElementsByName("form:selectDocType")[0].value;
                        if(estado == "Vigente"){
                            if(tipo == "CEDULA") {
                                $("#txtRut").val(rut);
                            }
                            else{
                                alert("Necesita Tener una Cedula de Identidad Chilena");
                            }
                        }
                        else{
                            alert("su cedula no esta vigente");
                        }
                    }
                });

            }
            else {
                alert("proximamente");
            }


        },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: false, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            prompt: "Ponga el Carnet de Identidad en la Camara", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations: true, // iOS
            disableSuccessBeep: true // iOS
        }
    );
}