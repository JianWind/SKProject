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
	var username = $(".uname").val();
	var 
	
	
	})
}