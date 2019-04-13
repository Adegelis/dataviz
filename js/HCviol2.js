Highcharts.chart('hcviol2', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Evolution du nombre de violences subies par les femmes'
    },
    subtitle: {
        text: 'En dehors du ménage et hors vol ou tentative de vol'
    },
    xAxis: {
        categories: ['2007', '2009', '2011', '2013', '2015'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ''
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Violences physiques',
        data: [294700,	375820,	319700,	301860,	379750], color: '#08298A'
    }, {
        name: 'Menaces',
        data: [869030,	857500,	805500,	851520,	880880], color:'#F781BE'
    }, {
        name: 'Violences sexuelles',
        data: [115500,	115500,	114660,	114660,	114660], color:      '#FAE392'
    }, 
    {
        name: 'Injures',
        data: [2860410,	2700540,	2373800,	2630100,	2934400], color: '#C6E8D2'
    }
    ]
});