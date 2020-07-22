Highcharts.chart('container', {
		chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie'
		},
		title: {
				text: '2020年七月菜品欢迎度'
		},
		tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
				pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
								enabled: true,
								format: '<b>{point.name}</b>: {point.percentage:.1f} %',
								style: {
										color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
								}
						}
				}
		},
//		series: [{
//				name: 'Brands',
//				colorByPoint: true,
//				data: [{
//						name: '冰拿铁',
//						y: 29.41,
//						sliced: true,
//						selected: true
//				}, {
//						name: '意式黑椒牛排',
//						y: 21.84
//				}, {
//						name: '蜂蜜松饼',
//						y: 17.85
//				}, {
//						name: '鸡肉披萨',
//						y: 14.67
//				}, {
//						name: '摩卡咖啡',
//						y: 6.18
//				}, {
//						name: '扬州炒饭',
//						y: 3.64
//				}, {
//						name: '盐焗鸡翅',
//						y: 2.6
//				}, {
//						name: '炸牛奶',
//						y: 1.2
//				}, {
//						name: '其他',
//						y: 2.61
//				}]
//		}]
});