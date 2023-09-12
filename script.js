const dadosENADE = {
  labels: ["Ciência da Computação", "Engenharia Civil", "Administração", "Medicina", "Direito"],
  datasets: [{
      label: "Média de Nota",
      data: [7.2, 6.9, 6.8, 8.0, 7.5],
      backgroundColor: [
          'rgba(251, 171, 175, 0.6)',
          'rgba(0, 174, 237, 0.6)',
          'rgba(254, 240, 17, 0.6)',
          'rgba(244, 133, 51, 0.6)',
          'rgba(0, 167, 89, 0.6)',
      ],
  }],
};

const dadosENADEStacked = {
  labels: ["Ciência da Computação", "Engenharia Civil", "Administração", "Medicina", "Direito"],
  datasets: [
      {
          label: "Aprovados",
          data: [300, 400, 500, 600, 700],
          backgroundColor: 'rgba(0, 167, 89, 0.6)',
      },
      {
          label: "Reprovados",
          data: [100, 200, 300, 100, 200],
          backgroundColor: 'rgba(251, 171, 175, 0.6)',
      },
  ],
};

const ctx = document.getElementById('barChart').getContext('2d');
const ctxStacked = document.getElementById('barChartStacked').getContext('2d');

// gráfico de barras
const barChart = new Chart(ctx, {
  type: 'bar',
  data: dadosENADE,
  options: {
      scales: {
          y: {
              beginAtZero: true,
              max: 10,
          }
      }
  }
});
const barChartStacked = new Chart(ctxStacked, {
  type: 'bar',
  data: dadosENADEStacked,
  options: {
      scales: {
          y: {
              beginAtZero: true,
              max: 1500,
          }
      },
      plugins: {
          legend: {
              display: true,
              position: 'top',
          },
      },
  }
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
      ['Sudeste', 2400992],
      ['Sul', 1500025],
      ['Centro-Oeste', 1880025],
      ['Nordeste', 1000520],
      ['Norte', 900020]
  ]);

  var options = {
      'title': 'Matrículas por região do Brasil',
      'width': '100%',
      'height': 250,
      'colors': ['#fbabaf', '#00aeed', '#fef011', '#f48533', '#00a759'],
      'chartArea': { 'width': '70%', 'height': '80%' }
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}


