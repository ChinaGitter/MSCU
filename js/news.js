// JavaScript Document
var mainContent=$(".mainContent")
var newsMore=$(".newsItem .more");
newsMore.click(function(e){
		e = e || window.event;
		var a=$(this).html()
		if(a=="More"||a=="更多"){
			if(mainContent.hasClass("en")){
			$(this).parent().parent(".newsItem").children(".newsInfo").hide();
			$(this).parent().parent(".newsItem").children("p.pubDate").hide();
			$(this).parent().parent(".newsItem").children(".newsAll").show();
			$(this).attr("title","Close");
			$(this).html("Close");
			e.preventDefault(); 
		}
		if(mainContent.hasClass("zh")){
			$(this).parent().parent(".newsItem").children(".newsInfo").hide();
			$(this).parent().parent(".newsItem").children("p.pubDate").hide();
			$(this).parent().parent(".newsItem").children(".newsAll").show();
			$(this).attr("title","关闭");
			$(this).html("关闭");
			e.preventDefault(); 
		}
		}
		if(a=="Close"||a=="关闭"){
			if(mainContent.hasClass("en")){
			$(this).parent().parent(".newsItem").children(".newsAll").hide();
			$(this).parent().parent(".newsItem").children("p.pubDate").show();
			$(this).parent().parent(".newsItem").children(".newsInfo").show();
			$(this).attr("title","More");
			$(this).html("More");
			e.preventDefault(); 
		}
		if(mainContent.hasClass("zh")){
			$(this).parent().parent(".newsItem").children(".newsAll").hide();
			$(this).parent().parent(".newsItem").children("p.pubDate").show();
			$(this).parent().parent(".newsItem").children(".newsInfo").show();
			$(this).attr("title","更多");
			$(this).html("更多");
			e.preventDefault(); 
		}
		}

});

/*var newsType=["general","north","south","east","west"];
var typeA=$(".newsNav ul li a.more2");
var newsList=$(".newsItem")
typeA.click(function(){
	$(".newsItem").hide();
	var curType=newsType[typeA.index($(this))];
	for(var i=0;i<newsList.length;i++){
		if(newsList.eq(i).hasClass(curType)==true){
			newsList.eq(i).show();
		}
	}
});*/