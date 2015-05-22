// JavaScript Document
var nextBtn=$(".classTypeUp");
var preBtn=$(".classTypeDown");
nextBtn.click(function(){
	var currentType=$(".listsUl:visible");
	var currentTitle=currentType.attr("title");
	var nextTitle=currentType.next("ul.listsUl").attr("title");
	if(nextTitle==null||nextTitle=="undefined"){
		$(".nextClass").html("&nbsp;");
		$(".preClass").html(currentType.prev("ul.listsUl").attr("title"));
		$(".classTitle span").html(currentTitle);
	}else{
		var nextNextTitle=currentType.next("ul.listsUl").next("ul.listsUl").attr("title");
		if(nextNextTitle==null||nextNextTitle=="undifined") nextNextTitle="&nbsp;";
		currentType.hide();
		currentType.next("ul.listsUl").show();
		currentType.next("ul.listsUl").children("li:odd").css("background","#f1f7ce");
		$(".nextClass").html(nextNextTitle);
		$(".preClass").html(currentTitle);
		$(".classTitle span").html(nextTitle);
	}
});
preBtn.click(function(){
	var currentType=$(".listsUl:visible");
	var currentTitle=currentType.attr("title");
	var preTitle=currentType.prev("ul.listsUl").attr("title");
	if(preTitle==null||preTitle=="undefined"){
		$(".preClass").html("&nbsp;");
		$(".nextClass").html(currentType.next("ul.listsUl").attr("titile"));
		$(".classTitle span").html(currentTitle);
	}else{
		var prePreTitle=currentType.prev("ul.listsUl").prev("ul.listsUl").attr("title");
		if(prePreTitle==null||prePreTitle=="undifined") prePreTitle="&nbsp;";
		currentType.hide();
		currentType.prev("ul.listsUl").show();
		currentType.prev("ul.listsUl").children("li:odd").css("background","#f1f7ce");
		$(".preClass").html(prePreTitle);
		$(".nextClass").html(currentTitle);
		$(".classTitle span").html(preTitle);
	}
});
var init=$(".listsUl:visible").children("li:odd").css("background","#f1f7ce")