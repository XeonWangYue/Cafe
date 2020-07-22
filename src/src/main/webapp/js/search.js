var data = [];

$(document).ready(function () {
	$.ajax({
		url: "getOrderInf.action",
		type: "POST",
		contentType: "json",
		dataType: "json",
		data: "",
		xhrFields: { withCredentials: true },
		success: function (result) {
			$('#table').bootstrapTable('load',result);//在下面的测试中发现不需要通过JSON.stringify转化为对象，json数组可以直接转化成表格的数据
		}
	})
})

$('#table').bootstrapTable({

	locale: 'zh-CN',
	search: true,

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
			title: '操作',
			width: 100,
			field: 'operator'
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