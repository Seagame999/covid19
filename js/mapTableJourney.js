google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'ประเทศ');
        data.addColumn('string', 'การเดินทาง');
        data.addRows([
          ['จีน',  'ห้ามเดินทาง'],
          ['อิหร่าน','ห้ามเดินทาง'],
          ['อิตาลี', 'ห้ามเดินทาง'],
          ['สหรัฐอเมริกา',   'มีความเสี่ยง'],
          ['อังกฤษ','มีความเสี่ยง' ],
          ['สเปน','มีความเสี่ยง'],
          ['สวีเดน', 'มีความเสี่ยง'],
          ['ฝรั่งเศส', 'มีความเสี่ยง']
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }