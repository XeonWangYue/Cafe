// JavaScript Document

$(document).ready(function(){
	let token = $.cookie("token");
	let userType = $.cookie("userType");
	if(userType!=null&&userType=="user"){
		document.getElementById("btnInfo").hidden=false;
		document.getElementById("btnUpload").hidden=true;
		document.getElementById("btnFoodManag").hidden=true;
		document.getElementById("btnUserManag").hidden=true;
		document.getElementById("btnShopCart").hidden=false;
	}
	if(userType!=null&&userType=="admin"){
		document.getElementById("btnInfo").hidden=true;
		document.getElementById("btnUpload").hidden=false;
		document.getElementById("btnFoodManag").hidden=false;
		document.getElementById("btnUserManag").hidden=false;
		document.getElementById("btnShopCart").hidden=true;
	}
	if(token!=null){
		console.log("signin");
		document.getElementById("btnSignin").hidden=true;
		document.getElementById("btnSignup").hidden=true;
		document.getElementById("btnSignout").hidden=false;
	}
	else{
		console.log("signout");
		document.getElementById("btnSignin").hidden=false;
		document.getElementById("btnSignup").hidden=false;
		document.getElementById("btnSignout").hidden=true;
	}


});

