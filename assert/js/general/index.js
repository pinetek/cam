/**
 * Created by chang on 14/11/4.
 */
define(function (require, exports) {
    function init() {
        $('#high_chart_1').highcharts({
            title: {
                text: '',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['1号', '5号', '9号', '13号', '17号', '21号','25号', '29号']
            },
            yAxis: {
                title: {
                    text: '意向客户'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '个'
            },
            credits:{
                text:'',
                href:''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                //name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }]
        });
    }

    exports.init = init;
});