Highcharts.chart('hcvaisselle',{ 
  chart: {type: 'column'},
                title: {text: 'Temps moyen quotidien consacré à la vaisselle'},
                subtitle: {text: ''},
                xAxis: {categories: ['Sexe'],crosshair: true},yAxis: {min: 0,title: {text: 'Temps (minutes)'}},
                plotOptions: {column: {pointPadding: 0.2,borderWidth: 0}},
                series: [{name: 'Hommes',data: [8],color:'#2eaaff'}, {name: 'Femmes',data: [18],color:'#f748ea'}]
            });