Highcharts.chart('hcensemble',{ 
                chart: {type: 'column'},
                title: {text: 'Temps moyen quotidien consacré aux tâches domestiques'},
                subtitle: {text: ''},
                xAxis: {categories: ['Sexe'],crosshair: true},yAxis: {min: 0,title: {text: 'Temps (minutes)'}},
                plotOptions: {column: {pointPadding: 0.2,borderWidth: 0}},
                series: [{name: 'Hommes',data: [135],color:'#2eaaff'}, {name: 'Femmes',data: [223],color:'#f748ea'}]
            });