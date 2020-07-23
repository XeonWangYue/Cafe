var data = [];
var change=[];

$('#table').bootstrapTable({
	url: "getOrderInf.action",
	locale: 'zh-CN',
	search: true,
	toolbar:"#toolbar",
	data: data,    // 表格数据来源
	checkbox: true,
	pagination: true, // 是否分页
	pageSize: 30, // 单页记录数
	columns: [
		{
			checkbox: true
		},
		{
			title: '订单号',
			width: 70,
			field: 'orderId',
		},
		{
			title: '下单时间',
			width: 110,
			field: 'orderTime',
		},
		{
			title: '金额',
			width: 100,
			field: 'totalPrice'
		}
	],
	onClickCell: function (field, value, row, $element) {
		$element.attr('contenteditable', true);
		$element.blur(function () {
			let index = $element.parent().data('index');
			let tdValue = $element.html();

			saveData(index, field, tdValue);
		})
	},
});

var $table = $('#table');
var $update = $('#update');
var $remove = $('#remove');
var $insert = $('#insert');

$remove.click(function () {
	var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
		console.log(row);
		return row.userId;
	})
	$table.bootstrapTable('remove', {
		field: 'userId',
		values: ids
	})
});

$update.click(function () {
	var newjson = JSON.stringify(change);
	$.ajax({
		url:'updateOrder.action',
		type:'POST',
		contentType:"json",
		dataType:"json",
		data:newjson,
		success:function(result)
		{
			alert("更新成功！");
			$('#table').bootstrapTable('refresh');
		}
	})
});

$insert.click(function () {
	$table.bootstrapTable('insertRow', {
		index: 0,
		row: {
			orderId : "",
			orderTime: "",
			totalPrice: 0,
		}
	})
});


function saveData(index, field, value) {
	$table.bootstrapTable('updateCell', {
		index: index,       //行索引
		field: field,       //列名
		value: value       //cell值
	});
	var row=$table.bootstrapTable('getRowByIndex',index);
	var have=false;
	for(let i=0;i<change.length;i++){
		if(change[i].orderId==row.orderId){
			change[i]=row;
			have=true;
		}
	}
	if(!have){
		change.push(row);
	}
}