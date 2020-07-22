$(document).ready(function change(){
	var chart = $('#container').highcharts();
	console.log(chart);
	var data=[];
	$.ajax({
		url:"GetPopulor.action",
		type:"POST",
		dataType:"json",
		contentType:"json",
		data:"",
		success:function(result){
			for(let i=0;i<result.length;i++){
				data.push({
					name: result[i].foodName,
					y: parseFloat(result[i].percent)
				});
			}
			console.log(data);
			chart.addSeries({
				"name": "比例",
				"colorByPoint": true,
				"data":data
			});
		}
	})
});