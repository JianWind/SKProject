//DOM加载完之后首先加载的方法
summerready = function(){
	$(".um-input-clear.ti-close").click(function() {
	    $(this).prev("input").val("");
	})
	$(".um-input-clear.ti-eye").click(function() {
	   var $pre_input=$(this).prev("input");
	    ('password'==$pre_input.attr('type'))?$pre_input.attr('type','text'):$pre_input.attr('type','password');
	    $(this).toggleClass('eye');  		    
	})
	$(".um-btn").click(function(){
	var username = $("#uname").val();
	var password = $("#pword").val();
	if( username == "" || undefined){
			summer.toast({
                 "msg" : "用户名不能为空!" 
            });
			return;
		}
	if( password == "" || undefined){
			summer.toast({
                 "msg" : "密码不能为空!" 
            });
			return;
		}
		
		summer.writeConfig({
            "host" : "10.176.120.161",//MA主机地址 
            "port" : "8088" //MA主机端口
        });
		
		summer.callService("UMService.login", {
			"appid" : "SKProject001",
			"callback" : "loginCallBack()",
			"error" : "loginErrCallBack()",
			"actionid" : "loginNC",
			"isDataCollect" : "true",
			"method" : "UMService.login",
			"type" : "nc",
			"user" : username,
			"pass" : password,
			"contextmapping" : "none",
			"funcode" : "summerDemo"  // 在NC端创建一个功能节点,具体查看官方文档ma登录NC 
		}, false);
	
	})
}

function loginCallBack(args){
	alert("登录成功: "+JSON.stringify(args));
	summer.openWin({
        "id" : "index",
        "url" : "html/index.html",
        "pageParam" : {
            "count" : 1,
            "uName": $("#uname").val()
        }
    });
	
}

function loginErrCallBack(args){
	alert("登录失败: "+JSON.stringify(args));
}

