google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart() {

    var data = google.visualization.arrayToDataTable([
        ['ID', 'อุณหภูมิเฉลี่ย', 'จำนวนผู้ติดเชื้อ','สี'],
        ['ไทย', 36, 53,'ไทย'],
        ['มาเลเซีย', 33, 151,'มาเลเซีย'],
        ['ญี่ปุ่น', 17, 581,'ญี่ปุ่น'],
        ['สหรัฐอเมริกา', 7,1670,'สหรัฐอเมริกา'],
    ]);

    var options = {
        title: 'ผู้ติดเชื้อแยกตามประเทศ',
        hAxis: { title: 'อุณหภูมิเฉลี่ย' },
        vAxis: { title: 'จำนวนผู้ติดเชื้อ' },
        bubble: { textStyle: { fontSize: 11 } }
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
    chart.draw(data, options);
}



// ['ID', 'อุณหภูมิเฉลี่ย', 'จำนวนผู้ติดเชื้อ'],
//         ['ไทย', 53, 36],
//         ['จีน', 80700, 15],
//         ['ญี่ปุ่น', 581, 17],
//         ['เกาหลีใต้', 7513, 7],


        // var data = google.visualization.arrayToDataTable([
        //     ['ID', 'อุณหภูมิเฉลี่ย', 'จำนวนผู้ติดเชื้อ'],
        //     ['ไทย', 36, 53],
        //     ['จีน', 15, 80700],
        //     ['ญี่ปุ่น', 17, 581],
        //     ['เกาหลีใต้', 7, 7513],