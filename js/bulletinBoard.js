// JavaScript Document
var mainContent=$(".mainContent")
var newsMore=$(".acdemyInfo .more");
newsMore.click(function(){
		var a=$(this).html()
		if(a=="More"||a=="更多"){
			if(mainContent.hasClass("en")){
			$(this).parent().parent(".acdemyInfo").children(".infoText").hide();
			$(this).parent().parent(".acdemyInfo").children(".textAll").show();
			$(this).attr("title","Close");
			$(this).html("Close");
			event.preventDefault(); 
		}
		if(mainContent.hasClass("zh")){
			$(this).parent().parent(".acdemyInfo").children(".infoText").hide();
			$(this).parent().parent(".acdemyInfo").children(".textAll").show();
			$(this).attr("title","关闭");
			$(this).html("关闭");
			event.preventDefault(); 
		}
		}
		if(a=="Close"||a=="关闭"){
			if(mainContent.hasClass("en")){
			$(this).parent().parent(".acdemyInfo").children(".textAll").hide();
			$(this).parent().parent(".acdemyInfo").children(".infoText").show();
			$(this).attr("title","More");
			$(this).html("More");
			event.preventDefault(); 
		}
		if(mainContent.hasClass("zh")){
			$(this).parent().parent(".acdemyInfo").children(".textAll").hide();
			$(this).parent().parent(".acdemyInfo").children(".infoText").show();
			$(this).attr("title","更多");
			$(this).html("更多");
			event.preventDefault(); 
		}
		}

});