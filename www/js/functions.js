/**
 * Created by Seba on 15-07-2017.
 */

function ingresar(){
    window.location = "login.html";
}

function registrar(){
    window.location = "registro.html";
}

function menu(){
    window.location = "main.html";
}

function guardarRegistro(){
    var rut = document.getElementById("txtRutRegistroUsuario").value;
    var nombre = document.getElementById("txtNombreUsuario").value;
    var direccion = document.getElementById("txtDireccionUsuario").value;
    var telefono = document.getElementById("txtTelefono").value;
}