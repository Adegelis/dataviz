Highcharts.chart('partnersfem', {

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Femmes',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
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
                
            },  colors:['#74c476','#fb6a4a','#E7CE17','#264874'],
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Nombre de femmes',
        innerSize: '50%',
        data: [
            ['1', 1028],
            ['Entre 2 et 4', 1874],
            ['Entre 5 et 9', 986],
            ['Plus de 10', 707]
         
        ]
    }] 
});