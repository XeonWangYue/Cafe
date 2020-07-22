// JavaScript Document

$(document).ready(function checkToken(){
	let token = $.cookie("token");
	if(token!=null){
		document.getElementById("btnSignin").hidden=true;
		document.getElementById("btnSignup").hidden=true;
		document.getElementById("btnInfo").hidden=false;
		document.getElementById("btnSignout").hidden=false;
	}
	else{
		document.getElementById("btnSignin").hidden=false;
		document.getElementById("btnSignup").hidden=false;
		document.getElementById("btnInfo").hidden=true;
		document.getElementById("btnSignout").hidden=true;
	}
});

