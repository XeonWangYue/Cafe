var data = [];


$('#table').bootstrapTable({
	url: "getMenuList.action",
	locale: 'zh-CN',
	search: true,
	toolbar:"#toolbar",   // 表格数据来源
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
			field: 'foodId',
			visible:false
		},
		{
			title: '食物名称',
			width: 110,
			field: 'foodName',
		},
		{
			title: '食物类型',
			width: 100,
			field: 'foodType',
		},{
			title: '库存量',
			width: 100,
			field: 'foodStock'
		},{
			title: '单位',
			width: 100,
			field: 'foodUnit'
		},
		{
			title: '食物价格',
			field: 'foodPrice',
			width: 30,
			
		}, {
			title: '食物图片路径',
			width: 100,
			field: 'foodImg'
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

$remove.click(function () {
	var ids = $.map($table.bootstrapTable('getSelections'), function (row) {
		console.log(row);
		return row.foodId;	
	})
	$table.bootstrapTable('remove', {
		field: 'foodId',
		values: ids
	})
});
$update.click(function () {
	var newjson = JSON.stringify(change);
	$.ajax({
		url:'updateFoode.action',
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
			foodId : "",
			foodName: "",
			foodStock: "",
			foodType: "",
			foodPrice: "",
			foodImg: "",
			foodUnit:""
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
		if(change[i].foodId==row.foodId){
			change[i]=row;
			have=true;
		}
	}
	if(!have){
		change.push(row);
	}
}
