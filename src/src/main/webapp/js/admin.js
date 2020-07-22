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
			field: 'userid',
		},
		{
			title: '用户姓名',
			width: 110,
			field: 'username',
		},
		{
			title: '密码',
			width: 100,
			field: 'userpwd',
		},{
			title: '联系电话',
			width: 100,
			field: 'userphone'
		},{
			title: '用户生日',
			width: 100,
			field: 'userbirthday'
		},
		{
			title: '性别',
			field: 'usergender',
			width: 30,
			formatter: formatSex
		}, {
			title: '用户邮箱',
			width: 100,
			field: 'useremail'
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
var $test = $('#test');
$test.click(function(){
	var data = [];
	var res = $table.bootstrapTable('getData');
	var json = JSON.stringify(res);
	alert(json);
	data = [
		{
		"userid": 1,
		"username": "小红",
		"userpwd": "19",
		"usergender": 0,
		"userphone": "1567865475",
		"useremail": "109983@qq.com",
		"userbirthday": "2000/0909"
	},
	{
		"userid": 1,
		"username": "小明",
		"userpwd": "19",
		"usergender": 0,
		"userphone": "1567865475",
		"useremail": "109983@qq.com",
		"userbirthday": "2000/0909"
	}
	]
	$('#table').bootstrapTable('load',data);
})
$remove.click(function () {
	var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
		console.log(row);
		return row.userid;
	})
	$table.bootstrapTable('remove', {
		field: 'userid',
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
