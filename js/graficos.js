

    // gráfico 1

    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawCurveTypes);

    function drawCurveTypes() {
      var data = new google.visualization.DataTable();

      data.addColumn('string', 'Month');
      data.addColumn({type: 'string', role: 'annotation'});
      data.addColumn('number', 'aprovados');
      data.addColumn('number', 'recusados');
      data.addColumn('number', 'inconclusivos');
      data.addRows([
        ['Set/2015',' ', 50, 100, 80],
        ['Out',' ',  150, 250, 100],
        ['Nov',' ',  200, 300, 100],
        ['Dez',' ',  250, 210, 100],
        ['Jan',' ',  150, 200, 150],
        ['Fev',' ',  100, 300, 150],
        ['Mar',' ',  200, 680, 150],
        ['Abr',' ',  170, 270, 150],
        ['Mai',' ',  150, 250, 150],
        ['Jun',' ',  200, 260, 150],
        ['Jul',' ',  100, 100,150],
        ['Ago',' ',  120, 240, 150],
        ['Set/2016',' ',  100, 200, 150],
        ]);

      var options = {
        selectionMode: 'multiple',
        
        hAxis: {

        },
        vAxis: {

        },
        series: {
          1: {curveType: 'function'}
        },
        legend: {
          position: 'bottom',
          alignment: 'start',
          textStyle: {
            fontName: 'Raleway',
            fontSize: 12,
          }
        },

        chartArea: {
          width: '90%',
          height: 300

        },
        annotations: {
          opacity: 0.5,
          style: 'line',
        },


        colors: ['#4ab49f','#b44e9b', '#8a9bb4'],
        // focusTarget: 'category',
        fontName: 'Raleway',
        pointsVisible: true,
        tooltip: {showColorCode: true},

      };

      var chart = new google.visualization.LineChart(document.getElementById('qtd-mes'));
      chart.draw(data, options);


    }




      // gráfico 2

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['sexo', 'percentage'],
          ['Masculino', 50],
          ['Feminino', 50],

          ]);

        var options = {
          pieHole: 0.4,

          chartArea: {
          width: '100%',
            height: 150,
          left:0,
          },

          fontName: 'Raleway',
          fontSize: 13,
           colors: ['#A54D66','#CC578F'],

           legend: {
            textStyle:{
              bold: true
            },
            alignment: 'center' 
          },
          pieSliceText: 'none',



        };
         var chart = new google.visualization.PieChart(document.getElementById('sexo'));
        chart.draw(data, options);
      }



      // grafico 3
      google.charts.load("current", {packages:['corechart']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {

        var data = google.visualization.arrayToDataTable([
         ['idade', 'quantidade', { role: 'style' }],
         ["18-25", 32, 'color: #DAF9DD'],
         ["26-30", 46, 'color: #BDE4C0'],
         ["31-35", 27, 'color: #92CCAA'],
         ["36-40", 53, 'color: #6FBF9D'],
         ["41-45", 45, 'color: #2DAC8B'],
         ["46-50", 33, 'color: #789E8C'],
         ["51-55", 41, 'color: #8DAB89'],
         ["56-60", 37, 'color: #A6BD91'],
         ["61-65", 30, 'color: #BABD91'],
         ["66", 44, 'color: #BAB097']
         ]);
        var options = {
          legend: { position: 'none' },
          axes: {
            x: {
              0: { side: 'bottom', label: ' '} 
            }
          },
          bar: { groupWidth: "50%" },
          fontName: 'Raleway',
          fontSize: 12,

         tooltip: {
            text:'both'
          }

        };

        var chart = new google.visualization.ColumnChart(document.getElementById('idade'));
        chart.draw(data, options);
      }


      // // gráfico 4
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart2);
      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['imc', 'percent' ],
          ['Abaixo do peso',24 ],
          ['Sobrepeso',24 ],
          ['Obesidade', 24],
          ['Obesidade Grau II',  24],
          ['Obesidade Grau III', 24],
        ]);

        var options = {
          pieHole: 0.4,
          chartArea: {
            width: '80%',
            height: 150,
            left:0,
            },

            slices: [{color: '#F69DB1'}, {color: '#49374D'}, {color: '#D4BFAE'}, {color: '#85A7F2'}, {color: '#118963'}],
            fontName: 'Raleway',
            fontSize: 13,
            legend: {
              textStyle:{
                bold: true
              },
            alignment: 'center' 
          },
          pieSliceText: 'none',

        };

        var chart = new google.visualization.PieChart(document.getElementById('imc'));
        chart.draw(data, options);
      }


      // gráfico 5

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart3);
      function drawChart3() {

        var data = google.visualization.arrayToDataTable([
          ['situacao', 'quantidade'],
          ['Novo', 19],
          ['Em andamento', 19],
          ['Parecer Resseguradora',19],
          ['Parecer médico', 19],
          ['Concluído', 19],
          ['Entrevista não realizada', 19],
          ['Cancelado', 19]
        ]);

        var options = {
          pieHole: 0.4,
          pieSliceTextStyle: {
            color: 'black',

          },

          chartArea: {
          width: '90%',
            height: 150,
          left:0,
          },

          fontName: 'Raleway',
          fontSize: 13,
           slices: [{color: '#b44e9b'}, {color: '#f0725b'}, {color: '#cbc471'}, {color: '#4ab49f'}, {color: '#B9A0BC'}, {color: '#0d04f6'}, {color: '#F69DB1'}],

           legend: {
            textStyle:{
              bold: true
            },
            alignment: 'center' 
          },
          pieSliceText: 'none',



        };
         var chart = new google.visualization.PieChart(document.getElementById('situacao'));
        chart.draw(data, options);

      }

        // gráfico 6

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart4);
      function drawChart4() {

        var data = google.visualization.arrayToDataTable([
          ['diabetes', 'percentage'],
          ['Sim', 50],
          ['Não', 50],

          ]);

        var options = {
          pieHole: 0.4,

          chartArea: {
          width: '100%',
            height: 120,
          left:0,
          },

          fontName: 'Raleway',
          fontSize: 13,
           colors: ['#076B58','#05C29F'],

           legend: {
            textStyle:{
              bold: true
            },
            alignment: 'center' 
          },
          pieSliceText: 'none',



        };
         var chart = new google.visualization.PieChart(document.getElementById('diabetes'));
        chart.draw(data, options);
      }

            // gráfico 7

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart5);
      function drawChart5() {

        var data = google.visualization.arrayToDataTable([
          ['cancer', 'percentage'],
          ['Sim', 50],
          ['Não', 50],

          ]);

        var options = {
          pieHole: 0.4,

          chartArea: {
          width: '100%',
            height: 120,
          left:0,
          },

          fontName: 'Raleway',
          fontSize: 13,
           colors: ['#8794C4','#97B3E8'],

           legend: {
            textStyle:{
              bold: true
            },
            alignment: 'center' 
          },
          pieSliceText: 'none',
           tooltip:{
            trigger: 'focus'
          }


        };
         var chart = new google.visualization.PieChart(document.getElementById('cancer'));
        chart.draw(data, options);
      }

            // gráfico 8

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart6);
      function drawChart6() {

        var data = google.visualization.arrayToDataTable([
          ['hipertensao', 'percentage'],
          ['Sim', 50],
          ['Não', 50],

          ]);

        var options = {
          pieHole: 0.4,

          chartArea: {
          width: '100%',
            height: 120,
          left:0,
          },

          fontName: 'Raleway',
          fontSize: 13,
           colors: ['#B9A0BC','#F9D9F5'],

           legend: {
            textStyle:{
              bold: true
            },
            alignment: 'center' 
          },
          pieSliceText: 'none',
          tooltip:{
            trigger: 'focus'
          }


        };
         var chart = new google.visualization.PieChart(document.getElementById('hipertensao'));
        chart.draw(data, options);
      }

            // gráfico 9

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart7);
      function drawChart7() {

        var data = google.visualization.arrayToDataTable([
          ['fumante', 'percentage'],
          ['Sim', 50],
          ['Não', 50],

          ]);

        var options = {
          pieHole: 0.4,

          chartArea: {
          width: '100%',
            height: 120,
          left:0,
          },

          fontName: 'Raleway',
          fontSize: 13,
           colors: ['#FFEC45','#F0DA16'],

           legend: {
            textStyle:{
              bold: true
            },
            alignment: 'center' 
          },
          pieSliceText: 'none',

          tooltip:{
            trigger: 'focus'
          }

        };
         var chart = new google.visualization.PieChart(document.getElementById('fumante'));
        chart.draw(data, options);

      }

 


