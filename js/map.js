google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['ประเทศ', 'จำนวนผู้ติดเชื้อ'],
      ['Thailand', 53],
      ['Malaysia', 151],
      ['Japan', 581],
      ['United States', 1670],
      ['Italy', 2500],
      ['Iran', 3000],
      ['Spain ', 1645],
      ['Germany', 1457],
      ['Russia', 150],
      ['Canada', 79],
      ['Australia', 150]
    ]);

    var options = {minValue: 0,  colors: ['#F0939C', '#FF0000']};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }