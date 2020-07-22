var data = [];
var op = '<a href="javascript:void(0) onclick="delRow();">删除</a> ' +
	'<a href="javascript:void(0) onclick="delRow();">编辑</a>'
data = [
	{
		"UserID": 1,
		"UserName": "玛利亚凯莉",
		"UserPwd": "19",
		"UserSex": 0,
		"UserPhone": "1567865475",
		"UserEmail": "109983@qq.com"
	},
	{
		"UserID": 2,
		"UserName": "亚丽安娜",
		"UserPwd": "20",
		"UserSex": 0,
		"UserPhone": "1567865475",
		"UserEmail": "10998345@qq.com"
	},
	{
		"UserID": 3,
		"UserName": "拉娜德芮",
		"UserPwd": "19",
		"UserSex": 0,
		"UserPhone": "1567865475",
		"UserEmail": "1099834577@qq.com"
	},
	{
		"UserID": 4,
		"UserName": "凯蒂佩瑞",
		"UserPwd": "19",
		"UserSex": 0,
		"UserPhone": "1567865475",
		"UserEmail": "109983@qq.com"
	}
];
$(document).ready(function () {
	$.ajax({
		url: "getAllUser.action",
		type: "POST",
		contentType: "json",
		dataType: "json",
		data: "",
		xhrFields: { withCredentials: true },
		success: function (result) {
			alert("success");
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
			title: '用户id',
			width: 50,
			field: 'UserID',
			visible:false
		},
		{
			title: '用户姓名',
			width: 110,
			field: 'UserName',
		},
		{
			title: '密码',
			width: 100,
			field: 'UserPwd',
		},
		{
			title: '性别',
			field: 'UserSex',
			width: 30,
			formatter: formatSex
		}, {
			title: '联系电话',
			width: 100,
			field: 'UserPhone'

		}, {
			title: '用户邮箱',
			width: 100,
			field: 'UserEmail'
		}],
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
		return row.UserID;
	})
	$table.bootstrapTable('remove', {
		field: 'UserID',
		values: ids
	})
});
$update.click(function () {
	alert(JSON.stringify($table.bootstrapTable('getData')));
});

$insert.click(function () {
	$table.bootstrapTable('insertRow', {
		index: 0,
		row: {
			UserID : "",
			UserName: "",
			UserPwd: "",
			UserSex: 2,
			UserPhone: "",
			UserEmail: ""
		}
	})
});


function saveData(index, field, value) {
	$table.bootstrapTable('updateCell', {
		index: index,       //行索引
		field: field,       //列名
		value: value       //cell值
	})
}

// 格式化性别"sex": 0,是男  "sex": 1,是女
function formatSex(value, row, index) {
		return value == 0 ? "男" : (value==1 ? "女" : "");
}
