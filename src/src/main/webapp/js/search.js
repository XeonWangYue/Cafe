var data = [];


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