Highcharts.chart('partnersfem', {

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Nombre de partenaires - Femmes',
        align: 'center',
        verticalAlign: 'middle',
        y: -150,
        style: {fontFamily: 'Open Sans, sans-serif' }
    },
    tooltip: {
        pointFormat: '{series.name} : <b>{point.y:f}</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
                
            },  colors:['#08298A','#C6E8D2','#F781BE','#FAE392'],
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Pourcentage',
        innerSize: '50%',
        data: [
            ['1', 22],
            ['Entre 2 et 4', 41],
            ['Entre 5 et 9', 22],
            ['Plus de 10', 15]
         
        ]
    }] 
});