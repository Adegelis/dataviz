Highcharts.chart('firstsex', {

    title: {
        text: 'Age au premier rapport'
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: 'Age au premier rapport'
        }
    },
      xAxis: {
        title: {
            text: 'Année des 18 ans'
        }
    },
    
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1978 
        }
    },

    series: [{
        name: 'Hommes',
        data: [18.2,	17.5,	17.4,	17.5,	18.1,	17.4,	18.3,	17.7,	17.9,	17.5,	17.5,	18.0,	17.2,	17.5,	17.6,	17.0,	17.3,	17.4,	17.4, 17.3,	17.0,	17.1,	17.5,	17.1,	16.8,	17.2,	16.7,	16.6,	16.6,	16.3,	16.4,	15.9], color: '#2eaaff'
    }, {
        name: 'Femmes',
        data: [19.3,	18.8,	18.1,	18.2,	18.2,	18.0,	18.4,	18.0,	18.4,	18.3,	18.2,	17.9,	18.3,	18.4,	18.1,	18.2,	17.9,	18.1,	18.1,	17.7,	17.8,	17.8,	17.6,	17.6,	17.6,	17.4,	17.3,	17.1,	17.1,	16.9,	16.6,	16.7], color:'#f748ea'
    }, ], 

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
