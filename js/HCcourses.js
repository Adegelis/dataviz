Highcharts.chart('hccourses',{ 
                chart: {type: 'column'},
                title: {text: 'Temps moyen quotidien consacré aux courses'},
                subtitle: {text: ''},
                xAxis: {categories: ['Sexe'],crosshair: true},yAxis: {min: 0,title: {text: 'Temps (minutes)'}},
                plotOptions: {column: {pointPadding: 0.2,borderWidth: 0}},
                series: [{name: 'Hommes',data: [18],color:'#2eaaff'}, {name: 'Femmes',data: [25],color:'#f748ea'}]
            });