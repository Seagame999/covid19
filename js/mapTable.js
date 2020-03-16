google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'ประเทศ');
        data.addColumn('number', 'จำนวนผู้ติดเชื้อ');
        data.addColumn('number', 'จำนวนประชากรทั้งหมด');
        data.addRows([
          ['ไทย',  {v: 53, f: '53'}, {v: 69000000, f: '69,000000'}],
          ['มาเลเซีย',   {v:151,   f: '151'},  {v: 31000000, f: '31,000000'}],
          ['ญี่ปุ่น', {v: 581, f: '581'}, {v: 127000000, f: '127,000,000'}],
          ['สหรัฐอเมริกา',   {v: 1670,  f: '1,670'},  {v: 327000000, f: '327,000,000'}],
          ['อิตาลี',   {v: 2500,  f: '2,500'},  {v: 60000000, f: '60,000,000'}],
          ['อิหร่าน',   {v: 3000,  f: '3,000'},  {v: 81000000, f: '81,000,000'}],
          ['สเปน',   {v: 1645,  f: '1,645'},  {v: 46000000, f: '46,000,000'}],
          ['เยอรมนี',   {v: 1457,  f: '1,457'},  {v: 82000000, f: '82,000,000'}],
          ['รัสเซีย',   {v: 150,  f: '150'},  {v: 144000000, f: '144,000,000'}],
          ['แคนาดา',   {v: 79,  f: '79'},  {v: 37000000, f: '37,000,000'}],
          ['ออสเตรเลีย',   {v: 150,  f: '150'},  {v: 24000000, f: '24,000,000'}]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }