var imgURL;//用于传输图片的地址
var imgUploadSuccess=false;
var imgName;
function initFileInput(ctrlName,uploadUrl,removeUrl){
    var control=$("#"+ctrlName);
    control.fileinput({
        'language': 'zh',
        'theme' : 'fa',
        'previewFileType': 'image',
        'allowedFileTypes': ['image'],
        'allowedFileExtensions': ['jpg', 'jpeg', 'png'],//接收的数据类型
        'replaceFileInput':false,
        'uploadUrl' : uploadUrl,
        'deleteUrl' : removeUrl,
        'uploadAsync': false, //默认异步上传
        'showUpload': true,//是否显示上传按钮
        'showRemove': true,//显示移除按钮
        'showPreview': true, //是否显示预览
        'browseClass': "btn btn-info", //按钮样式   
        'dropZoneEnabled': true,
        'minFileCount': 1,
        'maxFileCount': 1,
        'maxFileSize': 5000,
    }).on("filebatchselected", function (event, data) {//选择即上传
        if (data.length == 0) {
            return;
        }
    }).on('fileuploaded', function (event, data) {//异步上传成功结果处理
        console.log(event, data);
    }).on('fileerror', function (event, data, msg) {//异步上传失败结果处理
        console.log(event, data, msg);
    }).on('fileuploaderror', function (event, data, msg) {//异步上传失败结果处理
        console.log(event, data, msg);
    }).on('filebatchuploadsuccess', function(event,data,previewId,index) {//同步上传回调
        imgName=data.response.name;
    });
};
/*
 * 发布商品（提交表单）
 */
$(document).ready(function(){
    initFileInput("uploadImage","uploadPic.action","removePic.action");
    // var date = new Date();
    // date.setTime(date.getTime()+1000*60*15-10*1000);
	// $.cookie('token',"token",{
	// 	expires:date,
	// 	path:'/'
	// });
});

function addMenu() {
    $.ajax({
        url: "addMenuList.action",
        type: "POST",
        contentType: "text/json,charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            "foodname": $("#goods_name").val(),
            "foodtype": $("#goods_type").val(),
            "foodstock": $("#goods_stock").val(),
            "foodprice": $("#goods_price").val(),
            "foodunit": $("#goods_unit").val(),
            "foodimg" : encodeURI(imgName),
        }),
        success: function (data) {
            if (data.ok == "true")
                alert("上传成功！");
            else
                alert("菜品重复！上传失败");
        },
        error: function (e) {
            alert(e.responseText);
        },
    })
}
