Highcharts.chart('hclinge',{ 
                chart: {type: 'column'},
                title: {text: 'Temps moyen quotidien consacré au linge'},
                subtitle: {text: ''},
                xAxis: {categories: ['Sexe'],crosshair: true},yAxis: {min: 0,title: {text: 'Temps (minutes)'}},
                plotOptions: {column: {pointPadding: 0.2,borderWidth: 0}},
                series: [{name: 'Hommes',data: [1],color:'#2eaaff'}, {name: 'Femmes',data: [15],color:'#f748ea'}]
            });