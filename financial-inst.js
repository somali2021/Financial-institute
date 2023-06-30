Highcharts.chart('container', {
    credits: {
        enabled: false // Disable Highcharts.com credits
    },
    chart: {
        type: 'line',
        height: 200
    },
    title: {
        text: null // Remove chart title
    },
    exporting: {
        enabled: false // Disable chart export menu
    },
    tooltip: {
        enabled: false // Disable the tooltip
    },
    legend: {
        enabled: false // Remove the legend
    },
    colors: ['#4FBD34', '#000000'],
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        labels: {
            style: {
                color: '#00000066' // Set the color for x-axis labels
            }
        }
    },
    yAxis: {
        min: 0,
        max: 1000, // Set the maximum value to 15 million (15M)
        tickInterval: 500,
        title: {
            text: null // Remove yAxis title
        },
        labels: {
            style: {
                color: '#00000066' // Set the color for x-axis labels
            }
        }

    },
    plotOptions: {
        line: {
            marker: {
                enabled: false // Disable data labels (dots)
            },
            enableMouseTracking: false // Disable mouse tracking
        }
    },
    series: [{
        name: 'Current Year',
        data: [50, 170, 400, 800, 900]
    }, {
        name: 'Next year',
        data: [300, 400, 500, 750, 450]
    }]
});

// bar chart

Highcharts.chart('bar-container', {

    credits: {
        enabled: false
    },
    chart: {
        type: 'column',
        height: 250
    },
    title: {
        text: null
    },
    exporting: {
        enabled: false // Disable chart export menu
    },
    tooltip: {
        enabled: false // Disable the tooltip
    },
    legend: {
        enabled: false // Remove the legend
    },
    colors: ['#BAEDBD', '#C6C7F8', '#1C1C1C', '#B1E3FF', '#FFE9B1'],
    xAxis: {
        categories: [
            'Crop Loan',
            'Equipment Loans',
            'Fertigation Loans',
            'Housing Loans',
            'Other Loans'
        ],
        crosshair: true,
        labels: {
           // enabled: false,
            style: {
                color: '#000000' // Set the color for x-axis labels
            }
        }
    },
    yAxis: {
        min: 0,
        max: 900,
        tickInterval: 300,
        labels: {
           // enabled: false,
            style: {
                color: '#00000066' // Set the color for x-axis labels
            }
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

        name: 'Crop Loan',
        data: [300,0,0,0,0]

    },{
        name: 'Equipment Loans',
        data: [0,500,0,0]

    }, {
        name: 'Fertigation Loans',
        data: [0,0,250,0,0]

    }, {
        name: 'Housing Loans',
        data: [0,0,0,700,0]

    }, {
        name: 'Other Loans',
        data: [0,0,0,0,200]
    }]
});

// doughnut chart
document.addEventListener("DOMContentLoaded", function () {
    var chart1 = new Highcharts.Chart({
        credits: {
            enabled: false
        },
        chart: {
            type: 'pie',
            renderTo: 'doughnut-container',
            width: 200
        },
        title: {
            text: null
        },
        exporting: {
            enabled: false // Disable chart export menu
        },
        tooltip: {
            enabled: false // Disable the tooltip
        },
        legend: {
            enabled: false // Remove the legend
        },

        plotOptions: {
            pie: {
                innerSize: '70%'
            },
            series: {
                dataLabels: {
                    enabled: false // Hide data labels
                }
            }
        },
        colors: ['#4EBC33', '#8CF173', '#BAFAAC', '#DBFFD2'],

        series: [{
            data: [
                ['SSP', 44.2],
                ['Corn Seeds', 26.6],
                ['Urea', 20],
                ['MOP', 3.1],
            ]
        }]
    });
});

// map marker chart

document.addEventListener("DOMContentLoaded", function () {
    var chart1 = new Highcharts.Chart({
        credits: {
            enabled: false
        },
        chart: {
            type: 'pie',
            renderTo: 'map-doughnut-container1',
            width: 150
        },
        title: {
            text: null
        },
        exporting: {
            enabled: false // Disable chart export menu
        },
        tooltip: {
            enabled: false // Disable the tooltip
        },
        legend: {
            enabled: false // Remove the legend
        },

        plotOptions: {
            pie: {
                innerSize: '70%'
            },
            series: {
                dataLabels: {
                    enabled: false // Hide data labels
                }
            }
        },
        colors: ['#D2B51C', '#E7D792', '#F8EABA',],

        series: [{
            data: [
                ['SSP', 44.2],
                ['Corn Seeds', 26.6],
                ['Urea', 20],
            ]
        }]
    });
});

// map

function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
        
    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Brooklyn Museum, NY', 40.671349546127146, -73.96375730105808],
        ['Central Library, Brooklyn, NY', 40.67254944015601, -73.9682162170653],
        ['Prospect Park Zoo, NY', 40.66427511834109, -73.96512605857858],
        ['Barclays Center, Brooklyn, NY', 40.68268267107631, -73.97546296241961]
    ];
                        
    // Info window content
    var infoWindowContent = [
    [document.getElementById('infoContent').innerHTML],
    [document.getElementById('infoContent').innerHTML],
    [document.getElementById('infoContent').innerHTML],
    [document.getElementById('infoContent').innerHTML]
    ];
        
    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
}

window.initMap = initMap;
