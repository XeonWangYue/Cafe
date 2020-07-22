var data = [];
var op = '<a href="javascript:void(0) onclick="delRow();">删除</a> ' +
	'<a href="javascript:void(0) onclick="delRow();">编辑</a>'
data = [
	{
		"foodid": 1,
		"foodname": "玛利亚凯莉",
		"foodtype": "19",
		"foodstock": 0,
		"foodunit": "1567865475",
		"foodprice": "109983@qq.com",
		"foodimg": "2000/0909"
	},
	{
		"userid": 1,
		"username": "玛利亚凯莉",
		"userpwd": "19",
		"usergender": 0,
		"userphone": "1567865475",
		"useremail": "109983@qq.com",
		"userbirthday": "2000/0909"
	},
	{
		"userid": 1,
		"username": "玛利亚凯莉",
		"userpwd": "19",
		"usergender": 0,
		"userphone": "1567865475",
		"useremail": "109983@qq.com",
		"userbirthday": "2000/0909"
	},
	{
		"userid": 1,
		"username": "玛利亚凯莉",
		"userpwd": "19",
		"usergender": 0,
		"userphone": "1567865475",
		"useremail": "109983@qq.com",
		"userbirthday": "2000/0909"
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
			title: '食物代号',
			width: 70,
			field: 'foodid',
		},
		{
			title: '食物名称',
			width: 110,
			field: 'foodname',
		},
		{
			title: '食物类型',
			width: 100,
			field: 'foodtype',
		},{
			title: '库存量',
			width: 100,
			field: 'foodstock'
		},{
			title: '单位',
			width: 100,
			field: 'foodunit'
		},
		{
			title: '食物价格',
			field: 'foodprice',
			width: 30,
			
		}, {
			title: '食物图片路径',
			width: 100,
			field: 'foodimg'
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
		return row.foodid;
	})
	$table.bootstrapTable('remove', {
		field: 'foodid',
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
