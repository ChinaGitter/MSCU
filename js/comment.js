// JavaScript Document


var comment=$(".textTip");
comment.click(function(){
	$(".textTip").hide();
	$("textarea.textTip").show();
	$(".textComment input").show();
});
var textArea=$("textarea.textTip");
var btn=$(".textComment input");
btn.click(function(){
	if($("textarea.textTip").val()==""){
		$(".errTip").show();
	}
});