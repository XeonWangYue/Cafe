function logout(){
	if($.removeCookie('token',{ path: '/'})){
		$.removeCookie('userType',{ path: '/'});
		location.reload();
	}
}

function logoutAndJump(){
	if($.removeCookie('token',{ path: '/'})){
		$.removeCookie('userType',{ path: '/'});
		location.href="index.html";
	}
}