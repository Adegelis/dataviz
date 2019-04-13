Highcharts.chart('parite', {

    title: {
        text: 'Part des femmes à différents postes politiques (1992-2017)',
        style: {fontFamily: 'Open Sans, sans-serif' }
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: 'Part des femmes (%)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemStyle:{fontFamily: 'Open Sans, sans-serif' }
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1992
        }
    },

    series: [{
        name: 'Sénateurs',
        data: [5.0,5.0,5.0,5.6,5.6,5.6,5.9,5.9,5.9,10.9,10.9,10.9,16.9,16.9,16.9,16.9,21.9,21.9,22.1,22.1,22.1,25.0,25.0,25.0,32.1],
        color : '#F03521'
    }, {
        name: 'Députés',
        data: [null,6.0,6.0,6.0,6.0,11.0,11.0,11.0,11.0,11.0,12.3,12.3,12.3,12.3,12.3,18.5,18.5,18.5,18.5,18.5,26.9,26.9,26.9,26.9,26.9,38.8],
        color : '#C6E8D2'
    }, {
        name: 'Conseillers régionaux',
        data: [12.0,12.0,12.0,12.0,12.0,12.0,27.1,27.1,27.1,27.1,27.1,27.1,47.6,47.6,47.6,47.6,47.6,47.6,48.0,48.0,48.0,48.0,48.0,47.8,47.8,47.8],
        color : '#08298A'
    }, {
        name: 'Conseillers départementaux',
        data: [5.6,5.6,5.4,5.4,5.4,5.4,8.6,8.6,8.6,9.8,9.8,9.8,10.9,10.9,10.9,10.9,13.1,13.1,13.1,13.8,13.8,13.8,13.8,50.0,50.0,50.0],
        color : '#FAE392'
    }, {
        name: 'Conseillers municipaux',
        data: [null, null, null, 21.7, 21.7, 21.7,21.7,21.7,21.7,33.0,33.0,33.0,33.0,33.0,33.0,33.0,35.0,35.0,35.0,35.0,35.0,35.0,40.3,40.3,40.3,40.3],
        color : '#F781BE'
    }],

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