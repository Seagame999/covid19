google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['ประเทศ', 'จำนวน'],
          ['ไทย',     19],
          ['มาเลเซีย',      105],
          ['ญี่ปุ่น',  470],
          ['สหรัฐอเมริกา', 1599],
        ]);

        var options = {
          title: 'กำลังรักษา'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }