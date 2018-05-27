
var bd_nd_supervisor = false;
var bd_nd_issues_count = 0;
var bd_nd_untrusted = false;
var bd_nd_whitelist = false;
var bd_nd_statuses = new Array();
bd_nd_statuses["NetDefender.HTTP.Core"] = new Array();
bd_nd_statuses["NetDefender.HTTP.Core"]["NetDefender.Feature.HTTP.Core.Status"] = 1;
bd_nd_statuses["NetDefender.HTTP.Alert"] = new Array();
bd_nd_statuses["NetDefender.HTTP.AntiMalware"] = new Array();
bd_nd_statuses["NetDefender.HTTP.AntiMalware"]["NetDefender.Feature.HTTP.AntiMalware.ScanRequest"] = 1;
bd_nd_statuses["NetDefender.HTTP.AntiMalware"]["NetDefender.Feature.HTTP.AntiMalware.ScanResponse"] = 1;
bd_nd_statuses["NetDefender.HTTP.AntiMalware"]["NetDefender.Feature.HTTP.AntiMalware.ScanPOST"] = 1;
bd_nd_statuses["NetDefender.HTTP.AntiMalware"]["NetDefender.Feature.HTTP.AntiMalware.ScanIM"] = 1;
bd_nd_statuses["NetDefender.HTTP.AphParental"] = new Array();
bd_nd_statuses["NetDefender.HTTP.AphParental"]["NetDefender.Feature.HTTP.AphParental.Aph"] = 1;
bd_nd_statuses["NetDefender.HTTP.AphParental"]["NetDefender.Feature.HTTP.AphParental.Parental"] = 1;
bd_nd_statuses["NetDefender.HTTP.Chunked"] = new Array();
bd_nd_statuses["NetDefender.HTTP.Cloud"] = new Array();
bd_nd_statuses["NetDefender.HTTP.Cloud"]["NetDefender.Feature.HTTP.Cloud.Status"] = 1;
bd_nd_statuses["NetDefender.HTTP.Cloud"]["NetDefender.Feature.HTTP.Cloud.Default"] = 1;
bd_nd_statuses["NetDefender.HTTP.Cloud"]["NetDefender.Feature.HTTP.Cloud.Malware"] = 1;
bd_nd_statuses["NetDefender.HTTP.Cloud"]["NetDefender.Feature.HTTP.Cloud.Phishing"] = 1;
bd_nd_statuses["NetDefender.HTTP.Cloud"]["NetDefender.Feature.HTTP.Cloud.Fraud"] = 1;
bd_nd_statuses["NetDefender.HTTP.Cloud"]["NetDefender.Feature.HTTP.Cloud.Untrusted"] = 1;
bd_nd_statuses["NetDefender.HTTP.Cloud"]["NetDefender.Feature.HTTP.Cloud.Bank"] = 1;
bd_nd_statuses["NetDefender.HTTP.Deflate"] = new Array();
bd_nd_statuses["NetDefender.HTTP.GZip"] = new Array();
bd_nd_statuses["NetDefender.HTTP.HTMLExtractor"] = new Array();
bd_nd_statuses["NetDefender.HTTP.HTMLExtractor"]["NetDefender.Feature.HTTP.HTMLExtractor.HasRules"] = 0;
bd_nd_statuses["NetDefender.HTTP.HUI"] = new Array();
bd_nd_statuses["NetDefender.HTTP.HUI"]["NetDefender.Feature.HTTP.HUI.IsActive"] = 1;
bd_nd_statuses["NetDefender.HTTP.LinkScanner"] = new Array();
bd_nd_statuses["NetDefender.HTTP.LinkScanner"]["NetDefender.Feature.HTTP.LinkScanner.Status"] = 1;
bd_nd_statuses["NetDefender.HTTP.Privacy"] = new Array();
bd_nd_statuses["NetDefender.HTTP.Privacy"]["NetDefender.Feature.HTTP.Privacy.Status"] = 2;
bd_nd_statuses["NetDefender.HTTP.Resource"] = new Array();
bd_nd_statuses["NetDefender.HTTP.Settings"] = new Array();
bd_nd_statuses["NetDefender.HTTP.WBList"] = new Array();
bd_nd_statuses["NetDefender.HTTP.WBList"]["NetDefender.Feature.HTTP.WhitelistBlacklist.Status"] = 0;
bd_nd_statuses["NetDefender.HTTP.WordFiltering"] = new Array();
bd_nd_statuses["NetDefender.HTTP.WordFiltering"]["NetDefender.Feature.HTTP.WordFiltering.Status"] = 1;
bd_nd_statuses["NetDefender.HTTP.ZLib"] = new Array();
var bd_nd_E893A5F3FE87409FB167F51A030D021C_strings =
{
	settings_global_title : "",
	settings_global_desc : "Global",
	settings_adfilter_title : "Ad Filter",
	settings_adfilter_desc : "AdBlock",
	settings_aph_title : "Antiphishing Filter",
	settings_aph_desc : "AntiPhishing",
	settings_am_title : "Antimalware Filter",
	settings_am_desc : "AntiMalware",
	settings_ls_title : "Search Advisor",
	settings_ls_desc : "Linkscanner",

	toolbar_status_ok : "Esta página es segura",
	toolbar_status_nok : "Esta página no es segura",
	toolbar_status_err : "Se produjo un error",
	toolbar_status_disabled : "TrafficLight is disabled",
	toolbar_status_untrusted : "Se recomienda precaución",
	toolbar_title : "Bitdefender Endpoint Security Tools",

	tool_0_tooltip : "Tooltip 0",
	tool_1_tooltip : "Tooltip 1",
	tool_2_tooltip : "Tooltip 2",
	tool_3_tooltip : "Tooltip 3",
	tool_settings_text : "Settings",
	tool_settings_tooltip : "Settings"
};

var bd_nd_E893A5F3FE87409FB167F51A030D021C_body 			= document.getElementsByTagName("body");
var bd_nd_E893A5F3FE87409FB167F51A030D021C_isIE 			= (document.addEventListener) ? (-1 == navigator.appName.search(/Internet Explorer/i) ? false : true) : true;
var bd_nd_E893A5F3FE87409FB167F51A030D021C_fraud_link		= "http://trafficlight.bitdefender.com/info?url=" + escape("undefined" != typeof(window.location) ? window.location.href : document.location.href) + "&language=en_US";  ;

var bd_nd_E893A5F3FE87409FB167F51A030D021C_settings = new function(bd_nd_statuses)
{
	this.bd_nd_hui_features	=	[	{	status: 0,
										title: bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.settings_global_title,
										description: bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.settings_global_desc,
										user:"",
										plugins:[
												  {	name: "NetDefender.HTTP.Core",
													features: [	"NetDefender.Feature.HTTP.Core.Status"]
												  }
												]
									},
									{	status: 0,
										title: bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.settings_adfilter_title,
										description: bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.settings_adfilter_desc,
										user: "",
										plugins:[
												  {	name: "NetDefender.HTTP.AdBlock",
													features: [	"NetDefender.Feature.HTTP.AdBlock.Status"]
												  }
												]
									},
									{	status: 0,
										title: bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.settings_aph_title,
										description: bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.settings_aph_desc,
										user: "%USER%",
										plugins:[
												  {	name: "NetDefender.HTTP.AphParental",
													features: [	"NetDefender.Feature.HTTP.AphParental.Aph"]
												  }
												]
									},
									{	status: 0,
										title: bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.settings_am_title,
										description: bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.settings_am_desc,
										user: "",
										plugins:[
												  {	name: "NetDefender.HTTP.AntiMalware",
													features: [	"NetDefender.Feature.HTTP.AntiMalware.ScanRequest",
																"NetDefender.Feature.HTTP.AntiMalware.ScanResponse",
																"NetDefender.Feature.HTTP.AntiMalware.ScanPOST",
																"NetDefender.Feature.HTTP.AntiMalware.ScanIM"
															  ]
												  }
												]
									},
									{	status: 0,
										title: bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.settings_ls_title,
										description: bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.settings_ls_desc,
										user: "%USER%",
										plugins:[
												  {	name: "NetDefender.HTTP.LinkScanner",
													features: [	"NetDefender.Feature.HTTP.LinkScanner.Status"
															  ]
												  }
												]
									}
								];

	this.init = function(statuses)
	{
		var i;
		var cFeatures = bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.getFeaturesCount();
		var feature;
		for (i = 0; i < cFeatures; i++)
		{
			feature = bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.getFeature(i);
			feature.status = this.resolveStatus(statuses, feature);
		}
	}

	this.resolveStatus = function(statuses, feature)
	{
		var i, j;
		var k = false;
		for (i = 0; i < feature.plugins.length; i++)
		{
			for (j = 0; j < feature.plugins[i].features.length; j++)
			{
				if (undefined != statuses[feature.plugins[i].name] && undefined != statuses[feature.plugins[i].name][feature.plugins[i].features[j]])
				{
					k = true;
					if (1 == statuses[feature.plugins[i].name][feature.plugins[i].features[j]])
					{
						return 1;
					}
				}
			}
		}
		if (false == k)
		{
			return -1;
		}
		return 0;
	}

	this.getFeaturesCount = function()
	{
		return this.bd_nd_hui_features.length;
	}

	this.getFeature = function(index)
	{
		return this.bd_nd_hui_features[index];
	}

	this.settingsCallback = function(responseText, responseStatus, responseXML, self)
	{
		var status;
		var root;
		if (undefined != responseXML)
		{
			root = responseXML.documentElement;
		}
		if (200 == responseStatus && undefined != root && root.tagName == "module" && root.hasChildNodes())
		{
			status = 0;
			for (var i = 0; i < root.childNodes.length; i++)
			{
				if (1 == root.childNodes[i].getAttribute("status"))
				{
					status = 1;
					break;
				}
			}
			self.feature.status = status;
			self.callback(self.index, status);
		}
		else
		{
			self.callback(-1, 10001);
		}
	}

	this.changeStatusByIndex = function(index, callback)
	{
		var feature = this.getFeature(index);
		var xmlhttp = new bd_nd_E893A5F3FE87409FB167F51A030D021C_ajax(this.settingsCallback);
		if(!xmlhttp)
		{
			callback(-1, 10000);
			return;
		}
		xmlhttp.index = index;
		xmlhttp.feature = feature;
		xmlhttp.callback = callback;

		var params = "status=" + encodeURIComponent("<module uid=\"NetDefender.HTTP.Core\">");
		var i, j;
		var new_status = (1 == feature.status ? 0 : 1);
		for (i = 0; i < feature.plugins.length; i++)
		{
			for (j = 0; j < feature.plugins[i].features.length; j++)
			{
				params += encodeURIComponent("<plugin uid=\"" + feature.plugins[i].name + "\" feature=\"" + feature.plugins[i].features[j] + "\" user=\"" + feature.user + "\" pid=\"%PID%\" status=\"" + new_status + "\" />");
			}
		}
		params += encodeURIComponent("</module>");

		xmlhttp.sendRequest(params);
	}
}

function bd_nd_E893A5F3FE87409FB167F51A030D021C_ajax(callback)
{
	var that = this;
	this.bd_nd_E893A5F3FE87409FB167F51A030D021C_ajaxCallback = callback || function() { };
	(window.ActiveXObject) ? this.ajax = new ActiveXObject("Microsoft.XMLHTTP") : this.ajax = new XMLHttpRequest();

	this.sendRequest = function(params)
	{
		that.ajax.onreadystatechange = function()
		{
			if (that.ajax.readyState == 4)
			{
				that.bd_nd_E893A5F3FE87409FB167F51A030D021C_ajaxCallback(that.ajax.responseText, that.ajax.status, that.ajax.responseXML, that);
			}
		}
		this.ajax.open("POST", window.location + Math.random(), true);
		this.ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		this.ajax.setRequestHeader("BDNDSS_B67EA559F21B487F861FDA8A44F01C50", "10000000a4fa6d535b05a0dc5b0592aca4fa6d53cd809b3beecde86f6bda72accddfa543c6e927aa");
		this.ajax.send(params);
	}
}

function bd_nd_E893A5F3FE87409FB167F51A030D021C_webEvt()
{
	this.params = "";

	this.addEvent = function(action, value, source)
	{
		this.params = this.params + "<event><action><![" + "CDATA" + "[" + action + "]" + "]></action><source><![" + "CDATA" + "[" + source + "]" + "]></source><value><![" + "CDATA" + "[" + value + "]" + "]></value></event>";
	}

	this.getEventData = function()
	{
		this.params = "<module uid=\"NetDefender.HTTP.Core\">" + this.params + "</module>";
		this.params = "event=" + encodeURIComponent(this.params);

		return this.params;
	}

	this.sendEvents = function()
	{
		var ajax = new bd_nd_E893A5F3FE87409FB167F51A030D021C_ajax();
		ajax.sendRequest(this.getEventData());
	}
}

var bd_nd_E893A5F3FE87409FB167F51A030D021C_evt = new function()
{
    this.add = function(sEvent, fSubject, oElTarget)
	{
		oElTarget = oElTarget || window,
		sEvent = sEvent.toLowerCase();

		if(bd_nd_E893A5F3FE87409FB167F51A030D021C_isIE)
		{
			//IE specific exceptions:
			if(oElTarget == window && sEvent == 'onmousemove') oElTarget = document.getElementsByTagName('BODY')[0];
			if(oElTarget == document && sEvent == 'onmouseout'){ oElTarget = document.getElementsByTagName('HTML')[0]; sEvent = 'onmouseleave'; }

			oElTarget.attachEvent(sEvent, fSubject);
		}else
		{
			sEvent = sEvent.substr(2);
			oElTarget.addEventListener(sEvent, fSubject, false);
		}
    }

    this.del = function(sEvent, fSubject, oElTarget)
	{
		oElTarget = oElTarget || window;
		sEvent = sEvent.toLowerCase();

		if(bd_nd_E893A5F3FE87409FB167F51A030D021C_isIE)
		{
			//IE specific exceptions:
			if(oElTarget == window && sEvent == 'onmousemove') oElTarget = document.getElementsByTagName('BODY')[0];
			if(oElTarget == document && sEvent == 'onmouseout'){ oElTarget = document.getElementsByTagName('HTML')[0]; sEvent = 'onmouseleave'; }
			oElTarget.detachEvent(sEvent, fSubject);
		}else
		{
			sEvent = sEvent.substr(2);
			oElTarget.removeEventListener(sEvent, fSubject, false);
		}
    }
	this.getEventTarget = function(e)
	{
		if(!e)
			e = window.event;
		if(e.target)
			return e.target;
		return e.srcElement;
	}
}
var bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM = new function()
{
    //gElm is an object which has the structure {'name': nodeName, 'attributes' : [{'name': attrName, 'valule': 'attrValue'}, ...]}
    this.create = function(gElm)
	{
		var attrName = null;
		var     node = document.createElement(gElm.name);

		for(attrName in gElm.attributes)
		{
			if ('className' == attrName)
			{
				node.className = gElm.attributes[attrName];
			}
			else
			if ('innerHTML' == attrName)
			{
				node.innerHTML = gElm.attributes[attrName];
			}
			else
			{
				node.setAttribute(attrName, gElm.attributes[attrName]);
			}
		}
		return node;
    }

    //gElm is an DOM object referrence
    this.destroy = function(gElm)
	{
		return gElm.parentNode.removeChild(gElm);
    }
}

//hui object
var  	bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI = new function()
{
	var that			= this;
	var no_pos_fixed 	= false;
	var hui_container	= null;
	var PREFIX				= "nd_e506252a6b7649eb9640b54befbe7519";
	var STATUS_OK 			= 1;
	var STATUS_NOK 			= 2;
	var STATUS_ERR 			= 3;
	var STATUS_DISABLED 	= 4;
	var STATUS_UNTRUSTED	= 5;

	var STR_STATUS_OK			= bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.toolbar_status_ok;
	var STR_STATUS_NOK			= bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.toolbar_status_nok;
	var STR_STATUS_ERR			= bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.toolbar_status_err;
	var STR_STATUS_DISABLED		= bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.toolbar_status_disabled;
	var STR_TITLE				= bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.toolbar_title;
	var STR_STATUS_UNTRUSTED	= bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.toolbar_status_untrusted;

	var hui_visible;
	var	isUntrustedSite = false;
	var settings_visible;
	var isAlertPage = false;
	var isProductOn  = false;
	var status;
	var title;
	var onoff;
	var dragger;
	var settingsPage;
	var settingsPageContent;

	this.GetID = function(id)
	{
		return PREFIX + "_" + id;
	}
	this.StripID = function(id)
	{
		return id.substr(PREFIX.length + 1);
	}

	this.CreateStatus = function(state)
	{
		var status_style;
		var status_html;

		status = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'div',
			attributes  :
			{
				id  : this.GetID('status'),
				className : this.GetID('status')
			}});

		switch (state)
		{
			case STATUS_OK:
			{
				status.style.backgroundPosition="0px 0px";
			}break;
			case STATUS_NOK:
			{
				status.style.backgroundPosition="-60px 0px";
			}break;
			case STATUS_ERR:
			{
				status.style.backgroundPosition="-120px 0px";
			}break;
			case STATUS_UNTRUSTED:
			{
				status.style.backgroundPosition="-120px 0px";

			}break;
			case STATUS_DISABLED:
			{
				status.style.backgroundPosition="-180px 0px";
			}break;
			default:
			{
				status.style.backgroundPosition="-240px 0px";
			}break;
		}
		hui_container.appendChild(status);
	}




	this.CreateTitle = function(state)
	{
	    var st;
	   	switch (state)
		{
			case STATUS_OK:
			{
				st = "<label id='labelstatus' class='green'>"+STR_STATUS_OK+"</label>";
			}break;
			case STATUS_NOK:
			{
				st = "<label id='labelstatus' class='red'>"+STR_STATUS_NOK+"</label>";
			}break;
			case STATUS_ERR:
			{
				st =  "<label id='labelstatus' class='yellow'>"+STR_STATUS_ERR+"</label>";
			}break;
			case STATUS_UNTRUSTED:
			{
				st = "<label id='labelstatus' class='yellow'>"+STR_STATUS_UNTRUSTED+"</label>";
				// <a href='"+ bd_nd_E893A5F3FE87409FB167F51A030D021C_fraud_link +"' id='fraudlink' target='_blank'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>";
			}break;
			case STATUS_DISABLED:
			{
				st = "<label id='labelstatus'>"+STR_STATUS_DISABLED+"</label>";
			}break;
			default:
			{
				st = "<label id='labelstatus'>"+STR_STATUS_DISABLED+"</label>";
			}break;
		}


	   title = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'div',
			attributes  :
			{
				id  : this.GetID('title'),
				className : this.GetID('title'),
				// innerHTML : "<span class='notranslate' style='display:block;'><label id='labeltitle'>"+STR_TITLE+"</label></span>" + st
				innerHTML : "<span class='notranslate' style='display:block;'><label id='labeltitle'></label></span>" + st
			}});
		hui_container.appendChild(title);
	}




	this.CreateSeparator = function()
	{
		var separator;

	    separator = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'div',
			attributes  :
			{
				className : this.GetID('separator')
			}});
		hui_container.appendChild(separator);
	}

	this.CreateTool = function(id, html, tt, ev)
	{
		var tool;

	    tool = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'a',
			attributes  :
			{
				id  : this.GetID(id),
				className : this.GetID('tool'),
				innerHTML : html,
				title : tt,
				style : "width:auto"
			}});
		bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onmouseup", ev, tool);
		bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onmouseover", this.OnMouseOver, tool);
		bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onmouseout", this.OnMouseOut, tool);
		hui_container.appendChild(tool);

		return tool;
	}

	this.CreateOnOff = function(state, tt)
	{

	    onoff = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'a',
			attributes  :
			{
				id  : this.GetID('onoff'),
				className : this.GetID('onoff') + " " + (state ? this.GetID('onoff_on') : this.GetID('onoff_off')) + (bd_nd_supervisor ? "" : "_unavailable"),
				title : tt
			}});
		bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onmouseup", this.OnOnOffClick, onoff);
		bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onmouseover",this.OnMouseOver ,onoff);
		bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onmouseout",this.OnMouseOut ,onoff);
		hui_container.appendChild(onoff);
	}

	this.CreateDragger = function(tt)
	{
	   dragger = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'a',
			attributes  :
			{
				id  : this.GetID('dragger'),
				className : this.GetID('dragger'),
				title : tt
			}});
		bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onmouseup", this.OnDraggerClick, dragger);
		bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onmouseover",this.OnMouseOver ,dragger);
		bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onmouseout",this.OnMouseOut ,dragger);
		hui_container.appendChild(dragger);
	}

	this.OnMouseOut= function(e)
	{
		sender = bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.getEventTarget(e);
		sender = bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.getEventTarget(e);
		if (sender.className == '' || sender.nodeName.toLowerCase() == 'label')
		{
			sender = sender.parentNode;
		}
		classes = sender.className.split(' ');

		if (classes.length)
		{
			var lastClassName = classes.pop();
			var newClassName = '';
			if (classes.length)
			{
				newClassName = classes.join(' ');
			}
			newClassName += ' ';

			var pos = lastClassName.lastIndexOf('_hover');
			if (-1 != pos)
			{
				newClassName += lastClassName.substr(0,pos);
				sender.className = newClassName;
				return false;
			}
		}
	}
	this.OnMouseOver= function(e)
	{
		sender = bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.getEventTarget(e);
		if (sender.className == '' || sender.nodeName.toLowerCase() == 'label')
		{
			sender = sender.parentNode;
		}
		classes = sender.className.split(' ');

		if (classes.length)
		{
			var lastClassName = classes.pop();
			var newClassName = '';
			if (classes.length)
			{
				newClassName = classes.join(' ');
			}
			newClassName += ' ';

			var pos = lastClassName.lastIndexOf('_hover');
			if (-1 == pos)
			{
				//we have hover strip it down
				newClassName += lastClassName;
				newClassName += '_hover';
				sender.className = newClassName;
				return false;
			}
		}
	}
	this.OnDraggerClick = function(e)
	{
		if (false == isAlertPage)//colapse hui only if this not an alert page
		{
			if (hui_visible)
			{
				hui_visible = false;
				hui_container.style.top = '-63px';
				//dragger.style.top = '0px';
				dragger.style.backgroundPosition="0px 0px";
				if (settings_visible)
				{
					settingsPage.style.display = "none";
					settings_visible = false;
				}
			}
			else
			{
				hui_visible = true;
				hui_container.style.top = '0px';
				dragger.style.backgroundPosition="-40px 0px";
				//dragger.style.top = '47px';
			}
			e.cancelBubble = true;
		}
	}

	this.CreateSettingsPage = function()
	{
	   settingsPage = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'div',
			attributes  :
			{
				className : this.GetID('settings_page')
			}});
		var settingsPageTop = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'div',
			attributes  :
			{
				className : this.GetID('settings_page_top')
			}});
		var settingsPageBottom = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'div',
			attributes  :
			{
				className : this.GetID('settings_page_bottom')
			}});
		var settingsPageUpBtn = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'a',
			attributes  :
			{
				className : this.GetID('settings_page_upbtn')
			}});

		settingsPageContent = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'div',
			attributes  :
			{
				className : this.GetID('settings_page_content')
			}});

		this.PopulateSettings(settingsPageContent);

		settingsPage.appendChild(settingsPageTop);
		settingsPage.appendChild(settingsPageContent);
		settingsPageBottom.appendChild(settingsPageUpBtn);
		settingsPage.appendChild(settingsPageBottom);
		hui_container.appendChild(settingsPage);
		if (bd_nd_supervisor)
		{
			this.updateStatuses(bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.getFeature(0).status);
		}
	}

	this.PopulateSettings = function(settingsPage)
	{
		var paragraph = null;
		var btnStatus = null;
		var featureSpacer = null;
		var count = bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.getFeaturesCount();
		var feature = null;

		for (var i = 1; i < count; i++)
		{
			feature = bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.getFeature(i);
			paragraph = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'p',
			attributes  :
			{
				className : this.GetID('settings_feature')
			}});

			btnStatus = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
			name        : 'a',
			attributes  :
			{
				id : this.GetID(i)
			}});
			if (1 == feature.status)
			{
				btnStatus.className = this.GetID('settings_btn_status') + " " + (bd_nd_supervisor ? this.GetID('settings_btn_status_on') : this.GetID('settings_btn_status_on_unavailable'));
			}
			else
			{
				btnStatus.className = this.GetID('settings_btn_status') + " " + (bd_nd_supervisor ? this.GetID('settings_btn_status_off') : this.GetID('settings_btn_status_off_unavailable'));
			}

			bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onclick", this.btnStatusClick, btnStatus);
			bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onmouseover",this.OnMouseOver ,btnStatus);
			bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onmouseout",this.OnMouseOut ,btnStatus);

			paragraph.innerHTML = "<label class='labelstatustxt' ><strong>"+feature.title+"</strong><br/>"+feature.description+'</label>';
			paragraph.appendChild(btnStatus);

			if (i < count - 1)
			{
				featureSpacer = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
				name        : 'div',
				attributes  :
				{
					className : this.GetID('settings_feature_spacer')
				}});
				paragraph.appendChild(featureSpacer);
			}
			settingsPage.appendChild(paragraph);
		}
	}

	this.updateStatuses = function(status)
	{
		var count = bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.getFeaturesCount();
		for (var i = 1; i < count; i++)
		{
			var feature = bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.getFeature(i);
			var buton = document.getElementById(this.GetID(i));
			buton.className = this.GetID('settings_btn_status') + " " + this.GetID('settings_btn_status') + (feature.status == -1 ? '_off_unavailable' : (feature.status == 1 ? '_on' : '_off') + (status == 1 ? '' : '_unavailable'));
		}
	}

	this.btnStatusClick = function(e)
	{
		//check if the product is off
		if (bd_nd_supervisor && bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.getFeature(0).status)
		{
			var sender = bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.getEventTarget(e);
			var feature = null;
			if ('' == sender.id )
			{
				feature = bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.StripID(sender.parentNode.id);
			}else
			{
				feature = bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.StripID(sender.id);
			}
			if (null != feature && -1 != bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.getFeature(feature).status)
			{
				bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.changeStatusByIndex(feature, bd_nd_E893A5F3FE87409FB167F51A030D021C_statusChanged);
			}
		}
		e.cancelBubble = true;
		return false;
	}

	this.OnOnOffClick = function(e)
	{
		if (bd_nd_supervisor)
		{
			bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.changeStatusByIndex(0, bd_nd_E893A5F3FE87409FB167F51A030D021C_onOffChanged);
			e.cancelBubble = true;
		}
	}

	/*
	this.OnTool0Click = function(e)
	{
		alert("TOOL0");
		e.cancelBubble = true;
	}

	this.OnTool1Click = function(e)
	{
		alert("TOOL1");
		e.cancelBubble = true;
	}

	this.OnTool2Click = function(e)
	{
		var webEvt = new bd_nd_E893A5F3FE87409FB167F51A030D021C_webEvt();
		var obj = bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.getEventTarget(e);
		if (obj.nodeName.toLowerCase() == "img")
		{
			obj = obj.parentNode;
		}
		webEvt.addEvent("click", "", obj.id);
		webEvt.sendEvents();
		e.cancelBubble = true;
	}

	this.OnTool3Click = function(e)
	{
		var webEvt = new bd_nd_E893A5F3FE87409FB167F51A030D021C_webEvt();
		webEvt.addEvent("click", window.location, "reportasphishing");
		webEvt.sendEvents();
		e.cancelBubble = true;
	}

	this.OnTool4Click = function(e)
	{
		if (settings_visible)
		{
			settingsPage.style.display = "none";
			settings_visible = false;
		}else
		{
			settingsPage.style.display = "block";
			settings_visible = true;
		}
		e.cancelBubble = true;
	}
	*/

	/*
	this.OnWhitelistClick = function(e)
	{
		var webEvt = new bd_nd_E893A5F3FE87409FB167F51A030D021C_webEvt();
		webEvt.addEvent("click", window.location, "whitelist");
		webEvt.sendEvents();
		e.cancelBubble = true;
	}

	this.OnReportAsPhishingClick = function(e)
	{
		var webEvt = new bd_nd_E893A5F3FE87409FB167F51A030D021C_webEvt();
		webEvt.addEvent("click", window.location, "reportasphishing");
		webEvt.sendEvents();
		e.cancelBubble = true;
	}

	this.OnSandBoxClick = function(e)
	{
		var webEvt = new bd_nd_E893A5F3FE87409FB167F51A030D021C_webEvt();
		var obj = bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.getEventTarget(e);
		if (obj.nodeName.toLowerCase() == "img")
		{
			obj = obj.parentNode;
		}
		webEvt.addEvent("click", "", obj.id);
		webEvt.sendEvents();
		e.cancelBubble = true;
	}
	*/

	this.getIEVersion = function()
	{
		var rv = -1;
		var ua = navigator.userAgent;
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		{
			rv = parseFloat(RegExp.$1);
		}
		return rv;
	}

	this.canEmbed = function()
	{
		var rv = -1;

		if (navigator.appName != 'Microsoft Internet Explorer')
		{
			return true;
		}
		if (that.getIEVersion() >= 8.0)
		{
			return true;
		}
		if (typeof(document.documentMode) != "undefined")
		{
			return true;
		}

		return false;
	}

	this.IsHuiVisible = function()
	{
		if (isAlertPage)
		{
			return true;
		}
		return hui_visible;
	}

	this.GetDocHeight =  function()
	{
		var D = document;
		var max;
		max = (D.body.scrollHeight < D.documentElement.scrollHeight ? D.documentElement.scrollHeigh : D.body.scrollHeight);
		max = (max < D.body.offsetHeight ? D.body.offsetHeight : max);
		max = (max < D.documentElement.offsetHeight ? D.documentElement.offsetHeight : max);
		max = (max < D.body.clientHeight ? D.body.clientHeight : max);
		max = (max < D.documentElement.clientHeight ? D.documentElement.clientHeight : max);
		return max;
	}

	this.Init = function()
	{
		// document (not window) height must be at least hui height and window must have history (toolbars history len is always 0)
		if (that.GetDocHeight() < 82 && window.history.length == 0)
		{
			return 2;
		}
		//create statuses init
		if (typeof(bd_nd_E893A5F3FE87409FB167F51A030D021C_settings) == "undefined")
		{
			return 2;
		}
		bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.init(bd_nd_statuses);
		//check if I am in a frame
		if (typeof(window.top) != 'object')
		{
			if (window.parent != window)
			{
				//we are in a frame
				return 1;
			}
		}
		else
		if (window.top != window)
		{
			return 1;
		}

		//if another load still slips by, this ensures out toolbar is unique
		if(null != document.getElementById('tf_hui_container'))
		{
			return;
		}
		//check if this is IE8 or above. IF IE 7 than position fixed is not useful
		if (navigator.appName == "Microsoft Internet Explorer")
		{
			if (typeof(document.documentMode)=='undefined' || document.documentMode<8)
			{
				no_pos_fixed = true;
			}
		}
		//create hui container div
		if (no_pos_fixed == false)
		{
		   hui_container = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
				name        : 'div',
				attributes  :
				{
					id  : 'tf_hui_container',
					dir: 'ltr',
					onselectstart :'return false;',
                    className : 'no-print'
				}});
				hui_container.style.position = "fixed";
		}else
		{
			hui_container = bd_nd_E893A5F3FE87409FB167F51A030D021C_DOM.create({
				name        : 'div',
				attributes  :
				{
					id  : 'tf_hui_container',
					dir: 'ltr',
					onselectstart :'return false;',
                    className : 'no-print'
				}});
		}
		hui_visible = false;
		isUntrustedSite = false;
		settings_visible = false;
		//check if this is an alert page
		if (typeof(bd_nd_issues_count) != "undefined")
		{
			isAlertPage = bd_nd_issues_count > 0 ? true : false;
		}
		isProductOn = (1 == bd_nd_E893A5F3FE87409FB167F51A030D021C_settings.getFeature(0).status ? true : false);

		if (typeof(bd_nd_untrusted) != "undefined" && bd_nd_untrusted)
		{
			isUntrustedSite = true;
		}
		if (isAlertPage || isUntrustedSite || bd_nd_whitelist)
		{
			hui_container.style.top = '0px';
			hui_visible = true;
		}

		document.body.appendChild(hui_container);
		if (isProductOn)
		{
			that.CreateStatus(isAlertPage ? STATUS_NOK : (isUntrustedSite ? STATUS_UNTRUSTED : (bd_nd_whitelist ? STATUS_NOK : STATUS_OK)));
		}else
		{
            hui_container.style.display = 'none';
			//that.CreateStatus(STATUS_DISABLED);
		}

		that.CreateTitle(isAlertPage ? STATUS_NOK : (isUntrustedSite ? STATUS_UNTRUSTED : (bd_nd_whitelist ? STATUS_NOK : STATUS_OK)));
		//that.CreateSeparator();
		if (that.canEmbed())
		{
			// am comentat codul care creeaza butoanele - ptr releasul din toamna 2011 nu le vom afisa
			/*
			that.CreateTool("tooltip_0", "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAABJUlEQVRIS+2VQY5EQBSG+0jS4kS4h44jWFtML9xAIk3ECVj0BgnCQqItCBGLGfnHM5NJ93QvSid2KvnjkXqfV7z663DYanAcd5n19avV8UNdM+TjeDxC13UYhgFBEHA+n5ljnudBjD/ofDNomgbXdRGGIa7XK4IgQBRFTLFlWQQc7oEwTXMBDMOAcRzRdd1yZYkpZwbiAWjbNuI4Rl3Xq9Q0DaZpegY6jgNFUSDLMiRJgiiKTFJVdVnNU4UELIoCVVUhyzIkScIkmks5L4H0DQmapikTjF6a5zn6vt+XPPfQ/peZmpqaf2/sH8OhfbjJXi7LcvHDtm1BtsQimvvSD6lCco13x3+3udER4Pv+4jZr5Xkeuc3t3rFP9GDW55ui3NMmJ/I3nVG9tylBqYkAAAAASUVORK5CYII=' border='0' style='margin:9px 6px 0 6px;float:left;display:block;'/>", bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_0_tooltip, that.OnTool0Click);
			that.CreateSeparator();
			that.CreateTool("tooltip_1", "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAZCAYAAAAmNZ4aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAC/UlEQVRIS92VS0gbURSG3bSlmy5KoY91u9dA2tJ3ShdJiQGRKJqFYn1hUASLmkgasEJd1dLQunBTSJrUhOBbKxYMLgwoIT5Q3KqYhWhIREVD9O85FyNTK3YmjV104GNm4Jz7zTn3MVlZ//uVnZ39mQDfM14rDaomXhPvCDvxinhJvM3Ly0NPTw+LoVhMSdcIG/FJQgc9GwirTqdDdXU1GhoaUF9fj7KyMhiNRpSUlMDr9aKzs5PFfkViSrjObTKbzbBarbDZbAKLxYLCwkJUVlbC7XbD6XTC7/fD5/PB4/GI597eXjgcDmg0Gha/kC2m4Fssra2txcjICKanp7GwsIDFxUXBxMQEhoeH0djYiNzcXGi1WgG3t7S0FMXFxVCr1Sy9q0R6kxI+1tXVCen8/Dw2Njaws7ODcDgsKopGo1heXobBYODBTcRt4g6hInTEM+KSEukNSvjA0qGhISFlSTKZFPLW1lZMTU2JDwgGgwgEAql23pMtORl4tJDec3sHBwcxNzd3LAVd3Oq2tjasrq6Kql0uF9bX19HV1cVVf0lLTIlXiQ5eSP39/b9JWby9vQ273Y6qqio0NTVhaWlJiMfGxlj8Q7GYkq5we2tqao6lm5ubor3S6/DwEJFIBDMzM4KVlRXEYjGMj4+z+LsiMSVcJhy8FwcGBjA7O4vTpKkPSCQS2NraEjHxeBz8zvOsSEzBF3NycsR+5Dn9kzQl58oPDg7Ad4anhsZyy6qYAi+oVCpUVFSI/ShXKm09y0dHR1nqIx7LFbeXl5enLeVKJdLnsqQcRF8Y7+7uRigUOnNOf1ldkpe0pEfidr1ej8nJSezu7oq5knulLU21hapuyc/PF1tjb29PlpyPUMrzEhrZ7T0tkAZoLigokCXnRUjx34infyWVVN5cVFR0ppy3Gwk9xJOMSCVyC//K+Hw+2XY+WEjoIh5mVCqRW00mk/gZ7O/viznv6+tjqZN4cC5SifwNy9fW1oSUDxmS3j9XqUTuIFmS+Eo8+ifS85T8BMXGs9yPCfnRAAAAAElFTkSuQmCC' border='0' style='margin:9px 1px 0 1px;float:left;display:block;'/>", bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_1_tooltip, that.OnTool1Click);
			that.CreateSeparator();
			that.CreateTool("tooltip_2", "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAACMElEQVRIS82Vu4rCQBSG7bbdbl/DTnyRfQO3s9OtbUylnaSwslWsvOAFL/gEwUpFMaKI2nhDxBuenX+YSNQkE9wtduCQTDJzvpx//pl4PP+9eb3eNxbfLHQWZAr0Iyw+/qwGluyLhRYIBCiVSlG5XKZarcYjk8lQKBTCB2gY9xKUTXxHYDKS+Hw+SiQSVK1WSdM0Go1GNJvNaLFY8Cv6uVyO/H4/wO6hbPAniyYACNzjywFrNpvU7/dpvV7T6XSi6/VKaLiez2fabDa8YlGpXF7AAInFYlQsFqler1MymeRyATYYDGi/399AnGZqAOO9oiiARqTSohrAGo0GdbtdLhViOBySruu03W5tYQYX0F6vB6DuCITD4LpCoUCdTod2ux1Pjjgej3Q4HOhyuTwWZdmHvMLB1rIaDgwGg9RqtbgRjPVxRbCQNh6PW7tWVMZNAQca1b0CMs+BQtg6TwZiDxRUBhi0xzrJpINcSAip7RpyIFc0GgVUua0n66zS6TS1221ua5mUYm1UXCeTiSMUuabTKYArM5AqlQqNx2NXlbHJqjgMXEFRKT7uDojNOp/PHZdNVIbJd0A3lT4CV/l8XgrEmmFvGpNxzWaz/GTBc7y3aljHR0mVcDgslRQGWS6Xd8BSqcRheG5nIFVVn0yDDa+hSremEWvIq8OetWvYYpbnqrHxYWG4ymlbmCW1A0JGUZn970ocAAr0NhnE/JM17p9MYzEeOZBL/seQnvC/GPADgh6kSPQtOQcAAAAASUVORK5CYII=' border='0' style='margin:13px 2px 0 2px;float:left;display:block;'/>", bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_2_tooltip, that.OnTool2Click);
			that.CreateSeparator();
			that.CreateTool("tooltip_3", "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuODc7gF0AAAE8SURBVEhLY2CgFTAwMNgFxH+gmGQ2iruAhiw0MjL6//XrVzA2NTUliW1sbPwfZAbcUCAHaA7EMHIxyAxkA8k2COYAoIH/B8bAbzev/f+xdwcYfz99HKdPCLrwx7YN//+6mf3/L8qAgv8Zyv//sXwBhsF4Dfy5cCaGQegG/y5IQTEUp4Egl6FrxsX/OWsi3FCcBv611yPawH9a4v+/vnsLNhSrgaBAJ9Z1MHU/1q/AbSAxYYdu4a/WKjwGAsOEVBfiNZCUCIFZ/HNSJ24XggIYFNCkuBKU8HFGCkgCZCOxBv6J9iWcbECG/glxJWgoKHl9e/6MOANBXv9dkYPTUJDLkA3D62Xk8hAUPqDcAIpJMO5p+v/90nmsBQTBwoHUgpbmBr4i1UXo6oEufIVcYjeCBID4N5kYpLeRJjUyAPadjCGJYHyEAAAAAElFTkSuQmCC' border='0' style='margin:9px 6px 0 6px;float:left;display:block;'/>", bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_3_tooltip, that.OnTool3Click);
			that.CreateSeparator();
			that.CreateTool("tooltip_4", "<span style='color:#FFFFFF; text-decoration:none;cursor: pointer;line-height: 47px;font-weight: bold;font-size: 15px;'>" + bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_settings_text + "</span>", bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_settings_tooltip, that.OnTool4Click);
			*/
			that.CreateSeparator();
		}
		else
		{
			// am comentat codul care creeaza butoanele - ptr releasul din toamna 2011 nu le vom afisa
			/*
			that.CreateTool("tooltip_0", "<img src='/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/hui/images/icon0.png' border='0' style='margin:9px 6px 0 6px;float:left;display:block;'/>", bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_0_tooltip, that.OnTool0Click);
			that.CreateSeparator();
			that.CreateTool("tooltip_1", "<img src='/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/hui/images/icon1.png' border='0' style='margin:9px 1px 0 1px;float:left;display:block;'/>", bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_1_tooltip, that.OnTool1Click);
			that.CreateSeparator();
			that.CreateTool("tooltip_2", "<img src='/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/hui/images/icon2.png' border='0' style='margin:13px 2px 0 2px;float:left;display:block;'/>", bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_2_tooltip, that.OnTool2Click);
			that.CreateSeparator();
			that.CreateTool("tooltip_3", "<img src='/F9CD80F3-B79B-49AB-AD16-6F61BFFFC81B/netdefender/hui/images/icon3.png' border='0' style='margin:9px 6px 0 6px;float:left;display:block;'/>", bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_3_tooltip, that.OnTool3Click);
			that.CreateSeparator();
			that.CreateTool("tooltip_4", "<span style='color:#FFFFFF; text-decoration:none;cursor: pointer;line-height: 47px;font-weight: bold;font-size: 15px;'>" + bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_settings_text + "</span>", bd_nd_E893A5F3FE87409FB167F51A030D021C_strings.tool_settings_tooltip, that.OnTool4Click);
			*/
			that.CreateSeparator();
		}
		// that.CreateOnOff(isProductOn , "");
		that.CreateDragger("Dragger");
		// that.CreateSettingsPage();
		//add click event for document to close hui on outside click
		bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onclick",bd_nd_E893A5F3FE87409FB167F51A030D021C_click_outside,document);
	}//end init
}

function bd_nd_E893A5F3FE87409FB167F51A030D021C_onOffChanged(index, status)
{
	var currentFeature = document.getElementById(bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.GetID('onoff'));
	if (null != currentFeature)
	{
		//update sender according to the new status
		if (1 == status)
		{
			currentFeature.className = bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.GetID('onoff') + " " + bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.GetID('onoff_on') + (bd_nd_supervisor ? "" : "_unavailable") + "_hover";
			bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.updateStatuses(status);
		}
		else
		if (0 == status)
		{
			currentFeature.className = bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.GetID('onoff') + " " + bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.GetID('onoff_off') + (bd_nd_supervisor ? "" : "_unavailable") + "_hover";
			bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.updateStatuses(status);
		}
	}
}

function bd_nd_E893A5F3FE87409FB167F51A030D021C_statusChanged(index, status)
{
	currentFeature = document.getElementById(bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.GetID(index));
	if (null != currentFeature)
	{
		//update sender according to the new status
		if (1 == status)
		{
			currentFeature.className = bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.GetID('settings_btn_status') + " " + bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.GetID('settings_btn_status_on_hover');
		}else
		if (0 == status)
		{
			currentFeature.className = bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.GetID('settings_btn_status') + " " + bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.GetID('settings_btn_status_off_hover');
		}else
		{
			//error shit happend
		}
	}
}
function bd_nd_E893A5F3FE87409FB167F51A030D021C_click_outside(e)
{
	if (false == bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.IsHuiVisible())
	{
		//hui is not visible
		return;
	}
	var bd_nd_E893A5F3FE87409FB167F51A030D021C_target = bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.getEventTarget(e);
	var bd_nd_E893A5F3FE87409FB167F51A030D021C_id = bd_nd_E893A5F3FE87409FB167F51A030D021C_target.id;

    if(bd_nd_E893A5F3FE87409FB167F51A030D021C_id.indexOf('tf_hui_container') != -1)
    {
		//the user clicked on HUI
		return;
    }

	while(typeof(bd_nd_E893A5F3FE87409FB167F51A030D021C_target.parentNode) != 'undefined' && bd_nd_E893A5F3FE87409FB167F51A030D021C_target.parentNode != null)
	{
		bd_nd_E893A5F3FE87409FB167F51A030D021C_target = bd_nd_E893A5F3FE87409FB167F51A030D021C_target.parentNode;
		bd_nd_E893A5F3FE87409FB167F51A030D021C_id = bd_nd_E893A5F3FE87409FB167F51A030D021C_target.id;

		if (bd_nd_E893A5F3FE87409FB167F51A030D021C_id != 'undefined' && bd_nd_E893A5F3FE87409FB167F51A030D021C_id != null)
		{
			if(typeof(bd_nd_E893A5F3FE87409FB167F51A030D021C_id) == 'string' && bd_nd_E893A5F3FE87409FB167F51A030D021C_id.indexOf('tf_hui_container') != -1)
			{
				//the user clicked on a HUI child
				return;
			}
		}
	}//end while
	//call on dragger click to close hui
	bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.OnDraggerClick(e);
}

if (!window.rwctrd)
{
	/*if (bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.getIEVersion() == -1)
	{
		bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.Init();
	}
	else
	{
		window.attachEvent("onload", bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.Init);
	}*/
	if (typeof(bd_nd_issues_count) != "undefined")
	{
		if (bd_nd_issues_count)
		{
			//this is an alert page
			bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onload", bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.Init, window);
		}
		else
		{
			if (bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.canEmbed())//do not try to show hui in IE7
			{
				bd_nd_E893A5F3FE87409FB167F51A030D021C_evt.add("onload", bd_nd_E893A5F3FE87409FB167F51A030D021C_tfHUI.Init, window);
			}
		}
	}
}
