Highcharts.chart('hcmenage',{ 
                chart: {type: 'column'},
                title: {text: 'Temps moyen quotidien consacré au ménage'},
                subtitle: {text: ''},
                xAxis: {categories: ['Sexe'],crosshair: true},yAxis: {min: 0,title: {text: 'Temps (minutes)'}},
                tooltip: {
                  headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:f} min</b></td></tr>',
                  footerFormat: '</table>',
                  shared: true,
                  useHTML: true
                },
                plotOptions: {column: {pointPadding: 0.2,borderWidth: 0}},
                series: [{name: 'Hommes',data: [19],color:'#2eaaff'}, {name: 'Femmes',data: [52],color:'#f748ea'}]
            });