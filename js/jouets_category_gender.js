Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Nombre de jouets par catégorie et par sexe'
    },
    subtitle: {
        text: 'Source: La Grande Récré'
    },
    xAxis: {
        categories: ['bijoux-accessoires-et-beaute', 'educatifs-et-scientifiques', 'energie-et-accessoires', 'figurines-et-aventures', 'jeux-de-construction', 'jeux-de-societe', 'jeux-et-jouets-d-imitation', 'jeux-pour-la-recre', 'jouets-collector', 'jouets-en-bois', 'marionnettes', 'musique', 'peluches', 'poupees-baigneurs-et-bebes', 'puzzles', 'vehicules-vehicules-radiocommandes-et-circuits'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Fille',
        data: [333,46,0,871,191,61,208,204,4,19,0,51,243,1156,57,26]

    }, {
        name: 'Garçon',
        data: [28,45,0,1010,706,67,24,205,0,73,1,1,75,6,17,1217]

    }, {
        name: 'Mixte',
        data: [63,465,26,1092,512,1384,262,268,1,276,50,107,933,90,756,569]

    }]
});