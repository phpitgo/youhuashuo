layui.define(['jquery'], function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
	var $ = layui.jquery;
	$.ajaxSetup({error:function(XMLHttpRequest, textStatus, errorThrown) {
        	console.log(XMLHttpRequest.status);
        	console.log(XMLHttpRequest.readyState);
        	console.log(textStatus);
    	},
	});
	exports('authorization', null); 
});