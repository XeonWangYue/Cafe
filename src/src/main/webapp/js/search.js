var data = [];
data = [
	{
		"orderid":1,
		"ordertime":'0202',
		"orderstatus":"buying"
	},
	{
		"orderid":1,
		"ordertime":'0202',
		"orderstatus":"buying"
	},
	{
		"orderid":1,
		"ordertime":'0202',
		"orderstatus":"buying"
	}
]
function test()
		{
			var ht = '';//笨方法把json转化为数据，没有用到bootstrapTable的架构
			ht = ht+'<tr><th>订单编号</th><th>生成日期</th><th>订单状态</th></tr>';
  			for(var i=0;i<data.length;i++){//循环json对象，拼接tr,td的html
				
				ht = ht+'<tr>';
				ht = ht + '<th>' + data[i].orderid + '</th>';
				ht = ht + '<th>' + data[i].ordertime + '</th>';
				ht = ht + '<th>' + data[i].orderstatus + '</th>';
				ht = ht+'</tr>';
			}
  $('#order').html(ht);
		}

function search(){
	$.ajax({
		url:"searchOrder.action",
		method:"POST",
		dataType:"text",
		data:{
		"UserID":$("#UserID").val()
	},
		success:
		function(data)
		{
			var ht = '';
			ht = ht+'<tr><th>订单编号</th><th>生成日期</th><th>订单状态</th></tr>';
  			for(var i=0;i<data.length;i++){//循环json对象，拼接tr,td的html
				
				ht = ht+'<tr>';
				ht = ht + '<th>' + data[i].orderid + '</th>';
				ht = ht + '<th>' + data[i].ordertime + '</th>';
				ht = ht + '<th>' + data[i].orderstatus + '</th>';
				ht = ht+'</tr>';
			}
  $('#order').html(ht);
			}
	}
	)
}