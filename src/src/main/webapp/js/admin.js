var data = [];

$(document).ready(function () {
	$.ajax({
		url: "getAllUser.action",
		type: "POST",
		contentType: "json",
		dataType: "json",
		data: "",
		xhrFields: { withCredentials: true },
		success: function (result) {
			$('#table').bootstrapTable('load',result);
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
			field: 'userId',
			visible: false
		},
		{
			title: '用户姓名',
			width: 110,
			field: 'userName',
		},
		{
			title: '密码',
			width: 100,
			field: 'userPwd',
		},{
			title: '联系电话',
			width: 100,
			field: 'userPhone'
		},{
			title: '用户生日',
			width: 100,
			field: 'userBirthday'
		},
		{
			title: '性别',
			field: 'userGender',
			width: 30,
			formatter: formatSex
		}, {
			title: '用户邮箱',
			width: 100,
			field: 'userEmail'
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
	alert(JSON.stringify($table.bootstrapTable('getData')));
	var res = $table.bootstrapTable('getData');
	var newjson = JSON.stringify(res);
	$.ajax({
		url:'updateUser.action',
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
			userId : "",
			userName: "",
			userPwd: "",
			userGender: 2,
			userPhone: "",
			userEmail: "",
			userBirthday:""
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
