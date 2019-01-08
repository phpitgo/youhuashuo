layui.define(['jquery', 'layer'], function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
	var $ = layui.jquery
	,layer = layui.layer;
	$.ajaxSetup({error:function(XMLHttpRequest, textStatus, errorThrown) {
        	if(XMLHttpRequest.status == 401){
        		layer.msg(XMLHttpRequest.responseJSON.message)
        	}
    	},
	});
	exports('authorization', null); 
});