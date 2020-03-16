google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['ประเทศ', 'จำนวน'],
          ['ไทย',     33],
          ['มาเลเซีย',      24],
          ['ญี่ปุ่น',  101],
          ['สหรัฐอเมริกา', 15],
        ]);

        var options = {
          title: 'รักษาหาย',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }