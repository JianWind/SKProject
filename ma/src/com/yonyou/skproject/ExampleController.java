package com.yonyou.skproject;

import java.util.Map;

import org.json.JSONObject;

import com.yonyou.uap.um.context.util.UmContextUtil;
import com.yonyou.uap.um.gateway.service.GatewayServiceFactory;
import com.yonyou.uap.um.gateway.service.IGatewayService;
import com.yonyou.uap.ump.log.UmpLogger;

public class ExampleController {

	public String testHttp(String args) throws Exception{
		System.err.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
	    JSONObject json = new JSONObject(args);
	    Map<String, String> map = UmContextUtil.transJsonToMap(json);
	    String appid = map.get("appid");
	    IGatewayService service = GatewayServiceFactory.findGatewayService(appid, "ncLoginService", map);
	    return (String)service.doService();
	}
	
	
}