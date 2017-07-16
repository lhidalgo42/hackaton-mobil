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


///-----------*******************FUNCIONES CARGA CHARTS PRINCIPALES***************-----------------------
//----------------------------------**************************-------------------------------------------
function loadChartDeudaDirecta(){
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    window.chartColors = {
        red: 'rgb(255, 51, 51)',
        yellow: 'rgb(255, 255, 0)',
        green: 'rgb(0, 204, 0)'
    };

    var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.yellow,
                    window.chartColors.green,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Deudas 90 días o más",
                "Deudas 30 días o más",
                "Deudas vigentes"
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true
        }};
    var canvasGrafico = document.getElementById("canvasGraficoDeudaDirecta");
    var ctx = canvasGrafico.getContext("2d");
    char = new Chart(ctx, config);
    $("#canvasGraficoDeudaDirecta").click(
        function(evt){
            var activePoints = char.getElementsAtEvent(evt);
            if(activePoints.length > 0) {
                var clickedElementindex = activePoints[0]["_index"];
                //get specific label by index
                var label = char.data.labels[clickedElementindex];
                //get value by index
                var value = char.data.datasets[0].data[clickedElementindex];
                alert(value+label);
                if(label=="Deudas vigentes"){
                    window.location="espDeudaDirectaVigente.html";
                }
                if(label=="Deudas 30 días o más"){
                    window.location="espDeudaDirecta30dias.html";
                }
                if(label=="Deudas 90 días o más"){
                    window.location="espDeudaDirecta90dias.html";
                }

            }
        }
    );

}

function loadChartDeudaIndirecta(){
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    window.chartColors = {
        red: 'rgb(255, 0, 0)',
        yellow: 'rgb(255, 255, 0)',
        green: 'rgb(0, 204, 0)'
    };

    var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.yellow,
                    window.chartColors.green
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Deudas 90 días o más",
                "Deudas 30 días o más",
                "Deudas vigentes"
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true
        }};
    var canvasGrafico = document.getElementById("canvasGraficoDeudaIndirecta");
    var ctx = canvasGrafico.getContext("2d");
    char = new Chart(ctx, config);
    $("#canvasGraficoDeudaIndirecta").click(
        function(evt){
            var activePoints = char.getElementsAtEvent(evt);
            if(activePoints.length > 0) {
                var clickedElementindex = activePoints[0]["_index"];
                //get specific label by index
                var label = char.data.labels[clickedElementindex];
                //get value by index
                var value = char.data.datasets[0].data[clickedElementindex];
                alert(value+label);
                if(label=="Deudas vigentes"){
                    window.location="espDeudaIndirectaVigente.html";
                }
                if(label=="Deudas 30 días o más"){
                    window.location="espDeudaIndirecta30dias.html";
                }
                if(label=="Deudas 90 días o más"){
                    window.location="espDeudaIndirecta90dias.html";
                }
            }
        }
    );

}

function loadChartCreditosDisponibles(){
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };


    var Bancos = ["BCI", "Santander", "Banco Estado", "Banco de Chile","Total"];
    var color = Chart.helpers.color;
    window.chartColors = {
        red: 'rgb(255, 0, 0)',
        yellow: 'rgb(255, 255, 0)',
        green: 'rgb(0, 204, 0)'
    };

    var barChartData = {
        labels: Bancos,
        datasets: [{
            label: 'Instituciones',
            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            borderWidth: 1,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]
    };

    window.onload = function() {
        var ctx = document.getElementById("canvasGraficoCreditos").getContext("2d");
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                }
            },
            animation: {
                duration: 0,
                onComplete: function () {
                    // render the value of the chart above the bar
                    var ctx = this.chart.ctx;
                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
                    ctx.fillStyle = this.chart.config.options.defaultFontColor;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset) {
                        for (var i = 0; i < dataset.data.length; i++) {
                            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                            ctx.fillText(dataset.data[i], model.x, model.y - 5);
                        }
                    });
                }}
        });

    };
}

//----------------------------------**************************-------------------------------------------
//----------------------------------**************************-------------------------------------------
//----------------------------------**************************-------------------------------------------


function loadDetalleDeudaDirecta(){
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };


    var Bancos = ["BCI", "Santander", "Banco Estado", "Banco de Chile","Total"];
    var color = Chart.helpers.color;
    window.chartColors = {
        red: 'rgb(255, 0, 0)',
        yellow: 'rgb(255, 255, 0)',
        green: 'rgb(0, 204, 0)'
    };

    var barChartData = {
        labels: Bancos,
        datasets: [{
            label: 'Instituciones',
            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            borderWidth: 1,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]
    };

    window.onload = function() {
        var ctx = document.getElementById("canvasGraficoDeudaDirectaDetalle").getContext("2d");
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                }
            },
            animation: {
                duration: 0,
                onComplete: function () {
                    // render the value of the chart above the bar
                    var ctx = this.chart.ctx;
                    ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
                    ctx.fillStyle = this.chart.config.options.defaultFontColor;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset) {
                        for (var i = 0; i < dataset.data.length; i++) {
                            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                            ctx.fillText(dataset.data[i], model.x, model.y - 5);
                        }
                    });
                }}
        });

    };
}

