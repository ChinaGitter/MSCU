// JavaScript Document

// JavaScript Document
var nextBtn=$(".classTypeNext");
var preBtn=$(".classTypePre");
nextBtn.click(function(){
	var currentType=$(".listNav:visible");
	var currentTitle=currentType.attr("name");
	var nextTitle=currentType.next(".listNav").attr("name");
	if(nextTitle==null||nextTitle=="undefined"){
		$(".classTypeH").html(currentTitle);
	}else{
		currentType.hide();
		currentType.next(".listNav").show();
		currentType.next(".listNav").children().children("li:odd").css("background","#f1f7ce");
		$(".classTypeH").html(nextTitle);
	}
});
preBtn.click(function(){
	var currentType=$(".listNav:visible");
	var currentTitle=currentType.attr("name");
	var preTitle=currentType.prev(".listNav").attr("name");
	if(preTitle==null||preTitle=="undefined"){
		$(".classTypeH").html(currentTitle);
	}else{
		currentType.hide();
		currentType.prev(".listNav").show();
		currentType.prev(".listNav").children().children("li:odd").css("background","#f1f7ce");
		$(".classTypeH").html(preTitle);
	}
});
var init=$(".listNav:visible").children().children("li:odd").css("background","#f1f7ce")