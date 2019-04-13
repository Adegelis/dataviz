Highcharts.chart('hcgestion',{ 
                chart: {type: 'column'},
                title: {text: 'Temps moyen quotidien consacré à la gestion du ménage'},
                subtitle: {text: ''},
                xAxis: {categories: ['Sexe'],crosshair: true},yAxis: {min: 0,title: {text: 'Temps (minutes)'}},
                plotOptions: {column: {pointPadding: 0.2,borderWidth: 0}},
                series: [{name: 'Hommes',data: [8],color:'#2eaaff'}, {name: 'Femmes',data: [7],color:'#f748ea'}]
            });