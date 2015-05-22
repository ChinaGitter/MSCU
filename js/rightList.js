// JavaScript Document

var rightListNav=$(".listNav li:not('.listNavTitle')");
var backList=$(".listTabH span");

rightListNav.click(function(){
	$(".listNav").hide();
	$(".listTab").hide();
	$(".listTab").eq($(this).index()-1).show();
});

backList.click(function(){
	$(".listTab").hide();$(".listNav").show();
});

$(".listNav li:even").css("background","#f1f7ce");
$(".listTab li:even").css("background","#f1f7ce")