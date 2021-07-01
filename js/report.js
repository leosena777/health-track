/* globals Chart:false, feather:false */

(function () {
  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '09/01/2021',
        '08/01/2021',
        '07/01/2021',
        '06/01/2021',
        '05/01/2021',
        '04/01/2021',
        '03/01/2021',
      ],
      datasets: [{
        data: [
          70,
          73,
          80,
          78,
          75,
          79,
          82
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#000',
        borderWidth: 2,
        pointBackgroundColor: '#f00'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
