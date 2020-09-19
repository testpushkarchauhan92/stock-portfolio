import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // By Stock Volume
    var ctxTopCompaniesInIndiaByMarketCap = document.getElementById('myChartTopCompaniesInIndiaByMarketCap');
    var myChartTopCompaniesInIndiaByMarketCap = new Chart(ctxTopCompaniesInIndiaByMarketCap, {
      type: 'bar',
      data: {
        labels: ['Reliance', 'TCS', 'HDFC Bank', 'HUL', 'INFOSYS', 'Bharti Airtel'],
        datasets: [{
          label: 'Market Cap',
          data: [1338898.31, 859202.29, 616240.17, 499186.72, 391544.91, 285380.21],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: '<----- Company ----->'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: '<----- Value ----->'
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // By Stock Performance With Time
    var ctxStockPerformanceWithTime = document.getElementById('myChartStockPerformanceWithTime');
    var myChartStockPerformanceWithTime = new Chart(ctxStockPerformanceWithTime, {
      type: 'line',
      data: {
        labels: ['9:15', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30'],
        datasets: [{
          label: 'Stock Price',
          data: [7000.0, 8000.0, 9000.0, 10000.0, 8000.0, 9000.0, 8500.0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            // type: 'time',
            display: true,
            scaleLabel: {
              display: true,
              labelString: '<----- Time ----->'
            },
            ticks: {
              major: {
                fontStyle: 'bold',
                fontColor: '#FF0000'
              }
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: '<----- Value ----->'
            }
            ,
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // By Conservative Portfolio
    var ctxConservativePortfolio = document.getElementById('myChartConservativePortfolio');
    var myChartConservativePortfolio = new Chart(ctxConservativePortfolio, {
      type: 'doughnut',
      data: {
        labels: ['Stock', 'Bond', 'Cash'],
        datasets: [{
          label: 'Stock Volume',
          data: [23.0, 42.0, 35.0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      /*
      options: {
        scales: {
          xAxes: [{
            // type: 'time',
            display: true,
            scaleLabel: {
              display: true,
              labelString: '<----- Time ----->'
            },
            ticks: {
              major: {
                fontStyle: 'bold',
                fontColor: '#FF0000'
              }
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: '<----- Value ----->'
            }
            ,
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
      */
    });

    // By Aggressive Portfolio
    var ctxAggressivePortfolio = document.getElementById('myChartAggressivePortfolio');
    var myChartAggressivePortfolio = new Chart(ctxAggressivePortfolio, {
      type: 'pie',
      data: {
        labels: ['Stock', 'Bond', 'Cash'],
        datasets: [{
          label: 'Stock Volume',
          data: [70.0, 20.0, 10.0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      /*
      options: {
        scales: {
          xAxes: [{
            // type: 'time',
            display: true,
            scaleLabel: {
              display: true,
              labelString: '<----- Time ----->'
            },
            ticks: {
              major: {
                fontStyle: 'bold',
                fontColor: '#FF0000'
              }
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: '<----- Value ----->'
            }
            ,
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
      */
    });

    // By Stock Performance With Time Scatter Chart
    var ctxStockPerformanceWithTimeScatter = document.getElementById('myChartStockPerformanceWithTimeScatter');
    var myChartStockPerformanceWithTimeScatter = new Chart(ctxStockPerformanceWithTimeScatter, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset For Monthly Target',
          data: [{
            x: 1,
            y: 10
          },
          {
            x: 2,
            y: 11
          },
          {
            x: 3,
            y: 10.5
          },
          {
            x: 4,
            y: 12
          },
          {
            x: 5,
            y: 13
          },
          {
            x: 6,
            y: 12
          },
          {
            x: 7,
            y: 10
          },
          {
            x: 8,
            y: 9
          },
          {
            x: 9,
            y: 8
          },
          {
            x: 10,
            y: 7
          },
          {
            x: 11,
            y: 12
          },
          {
            x: 12,
            y: 13
          }]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
              display: true,
              labelString: '<----- Time ----->'
            },
            ticks: {
              major: {
                fontStyle: 'bold',
                fontColor: '#FF0000'
              }
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: '<----- Value ----->'
            }
            ,
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // By Stock Profits Coming From Countries Radar Chart
    var ctxStockPerformanceWithTimeRadar = document.getElementById('myChartStockPerformanceWithTimeRadar');
    var myChartStockPerformanceWithTimeRadar = new Chart(ctxStockPerformanceWithTimeRadar, {
      type: 'radar',
      data: {
        labels: ['USA', 'UK', 'Australia', 'India', 'China', 'Pakistan'],
        datasets: [{
          label: "Stock Profits From Different Regions",
          data: [90, 80, 50, 70, 95, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            suggestedMin: 1,
            suggestedMax: 100
          }
        }
      }
    });

    // By Stock Profits Coming From Countries Polar Chart
    var ctxStockPerformancePolar = document.getElementById('myChartStockPerformanceWithTimePolar');
    var myChartStockPerformanceWithTimePolar = new Chart(ctxStockPerformancePolar, {
      type: 'polarArea',
      data: {
        labels: ['Asia', 'Africa', 'Australia', 'North America', 'South America', 'Europe', 'Antarctica'],
        datasets: [{
          label: "Stock Profits From Different Continents",
          data: [90, 80, 40, 95, 65, 90, 0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            suggestedMin: 1,
            suggestedMax: 100
          }
        }
      }
    });
  }

}