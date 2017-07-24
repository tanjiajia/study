/**************************************************************
 @Name : 表单校验
 @author: Jack
 @date: 2015-6-2
 @usefor: 表单

 *************************************************************/  
;(function($){

var Class = function(settings,elem){
    this.elem = elem;
    var dataType = $.extend({},this.config.dataType,settings.dataType);
    this.config = $.extend({},this.config,settings);
    this.config.dataType = dataType;
    this.init();
};
//默认配置
Class.prototype.config = {
    dataType : {
        //不能小于当日
        "M_today" : function(ipt){
        	
        }
    },
    wrong : function(ipt,message){
        $.box.msg(message);
    },
    success : function(){
        $.box.msg("pass");
    }
};
//数据类型
Class.prototype.dataType = {
    "match" : [/^（。+?）（\d+）-（\d+）$/,""],
    "*" : [/[\w\W]+/,"不能为空"],
    "*6-16" : [/^[\w\W]{6,16}$/,"长度为6-16位字符"],
    "n" : [/^\d+$/,"必须为正整数"],
    "n3" : [/^\d{3}$/,"必须为3位数字"],
    "n4" : [/^\d{4}$/,"必须为4位数字"],
    "n6" : [/^\d{6}$/,"必须为6位数字"],
    "n6-16" : [/^\d{6,16}$/,"必须为6-16位数字"],
    "s" : [/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,"必须为字符串"],
    "s6-18" : [/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,""],
    "p" : [/^[0-9]{6}$/,"为正确的密码格式"],//密码
    "m" : [/1[0-9]{10}/,"必须为11位数字且为正确的格式"],
    "e" : [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})?$/,"必须为正确的邮箱格式"],
    "url" : [/^（\w+:\/\/）？\w+（\.\w+）+.*$/,""],
    "0-100" : [/^(\d{1,2}(\.\d{1,2})?|100|100.0|100.00)$/,"必须为0-100数字且最多包含两位小数"],
    "1-100" : [/^\d{1,2}(\.\d{1,2})?$/,"必须为大于0小于100的数字且最多包含两位小数"],
    "f1" : [/^\d+(\.\d{1})?$/,"必须为数字且最多包含一位小数"],
    "f2" : [/^([1-9]\d*|0{1})(\.\d{1,2})?$/,"必须为数字且最多包含两位小数"],
    "q2" :[/^((([1-9]\d*|0{1})(\.\d{1,2})?)|((([1-9]{1}\d{0,2}(\,\d{3})*)|(0{1}))(\.\d{1,2})))$/,"必须为数字且最多包含两位小数"], //可以是千分位，也可以是数字  ([1-9]+|0{1})    (\d{3})+      
    "qq" : [/^\d{5,10}$/,"为五到十位的数字"],
    "id":[/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,"必须为正确的格式"] 
};                                     
//初始化
Class.prototype.init = function(){
    var that = this, conf = this.config;
    that.formValid()
};
//遍历
Class.prototype.formValid = function(){
    var that = this, conf = this.config;
    this.input = this.elem;
    this.input.each(function(){ 
        var isPass = that.typeValid($(this));
        return isPass;
    })
    if(this.input.parent(".input_wrong").length==0) conf.success();
};
//校验
Class.prototype.typeValid = function(ipt){
    var that = this, conf = this.config;
    var dataType = ipt.attr("dataType"); 
    var val = $.trim(ipt.val());
    //选填
    var option = ipt.attr("optional");
    if(option != undefined && val == ""){
        that.formRight(ipt);
        return true;
    }
    //类型
    var dataType = ipt.attr("dataType");
    var dataArr = dataType.split(",");
    var typeCheck = function(type){
        var isPass;
        if(type.indexOf("M_") != -1){
            isPass = conf.dataType[type](ipt,conf.dataType);
            isPass ? that.formRight(ipt) : that.formWrong(ipt,type);
        }else{
            var repeat = ipt.attr("repeat");
            var repeatVal = $("[name="+ repeat +"]").val()
            if(repeat!=undefined){
                isPass = (val==$.trim(repeatVal));
            }else{
                isPass = that.dataType[type][0].test(val);
            }
            isPass ? that.formRight(ipt) : that.formWrong(ipt,type);
        } 
        return isPass;
    }
    for(var i in dataArr){
        var isPass = typeCheck(dataArr[i]);
        if(isPass){
            continue;
        }else{
            return false;
        }
    }
};
//通过
Class.prototype.formRight = function(ipt){
    ipt.parent().removeClass("input_tip input_wrong");
};
//出错
Class.prototype.formWrong = function(ipt,type){
    var that = this, conf = this.config;
    this.input.parent().removeClass("input_tip")
    if(!(ipt[0].tagName == "INPUT" || ipt[0].tagName =="TEXTAREA")){
        ipt.parent().addClass("input_wrong")
        return;
    }
    ipt.parent().addClass("input_tip input_wrong");
    if(type.indexOf("M_") != -1)return;
    var dataType = type;
    var label = ipt.attr("label");
    var checkTip = ipt.attr("checkTip");
    var message = label + that.dataType[dataType][1];
    if(checkTip != undefined){
        message = checkTip;
    }
    conf.wrong(ipt,message);
}
$.fn.form = function(settings){
    return new Class(settings,$(this));
}

})($)
