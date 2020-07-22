$(document).ready(function(){
    $.ajax({
        url:"getPersonInfo.action",
        type:"POST",
        contentType:"json",
        xhrFields: { withCredentials: true },
        dataType:"json",
        data:"",
        success:function(result){
			console.log(result.ok);
            if(result.ok!=null&&result.ok=="false"){
                location.href="index.html";
                return;
            }
            else if(result.ok!=null&&result.ok=="true")
			{
				$("#username").val(result.username);
				$("#email").val(result.email);
				$("#tel").val(result.phone);
				$("#birthday").val(result.birthday);
				$("#gender").val(result.gender);
			}
			
            
        },
        fail:function(){
            location.href="index.html";
        }
    })
});

function save(username)
{
	if(username==""){
		alert("用户名不能为空")；
	}
	let obj = {
		"username" : username,// 这里面定义的变量名要跟数据库里面的字段相同
	}

	$.ajax({
		url : "checkUserName.action",// 这里是你接口的路径，记住http://不要忘记,localhost是你本地的地址，如果要请求别人的请将别人的ip地址替换，后面的addInfoPerson是接口名字。
		type : "POST",// 请求方式是get还是post,我这里用的是post
		async : false,
		contentType : "json",
		data : JSON.stringify(obj),// 传递的参数
		dataType : "json",
		success : function(result) { // 成功返回的回调函数
			if(result.ok=="true"){
				
				check_username=true;
				let username = $("#username").val();
				let phone = $("#tel").val();
				let gender = $("input[name='gender']:checked").val();
	            let birthday = $("#birthday").val();
	            let email = $("#email").val();
				var obj = {
		                    "username" : username,// 这里面定义的变量名要跟数据库里面的字段相同
					        "email" : email,
		                    "phone" : phone,
					        "gender" :gender，
		                    "birthday" : birthday
		                  }
	                          $.ajax({
		                               url : "save.action",// 这里是你接口的路径，记住http://不要忘记,localhost是你本地的地址，如果要请求别人的请将别人的ip地址替换，后面的addInfoPerson是接口名字。
		                               type : "POST",// 请求方式是get还是post,我这里用的是post
		                               contentType : "json",
		                               data : JSON.stringify(obj),// 传递的参数
		                               dataType : "json",
		                               success : function(results)
								  { // 成功返回的回调函数
			                           if(results.ok=="true"){
				                                          alert("保存成功！");
				
			                          }
			                            else{
				                                         alert("保存失败，请重试！");
				                                         location.reload();
			                                }
		                            }
	                                 });

			                }
			else{
				alert("用户名重复，换一个~")；
			}
		}
	});
}