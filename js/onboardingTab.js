// JavaScript Document

var tabtab=$(".onboardingTab .block");
tabtab.click(function(){
	$(".articleContent4").hide();
	$(".articleContent4").eq($(this).index()+1).show();
});

var subTabtab=$(".salesNav li");
subTabtab.click(function(){
	$(".glossary").show();
	$(".salesList").hide();
	subTabtab.children("a").attr("class"," ");
	$(".salesList").eq($(this).index()+1).show();
	$(this).children("a").attr("class","cur");
});
var glossary=$(".glossary");
glossary.click(function(){
	$(".glossary").hide();
	$(".salesList").hide();
	$(".salesNav a").attr("class"," ");
	$(".salesList").eq(0).show();
});
var subTabtabTr=$(".salesNavTr");
subTabtabTr.click(function(){
	$(".glossary").show();
	$(".salesList").hide();
	subTabtab.children("a").attr("class"," ");
	$(".salesList").eq($(this).index()).show();
	subTabtab.eq($(this).index()-1).children("a").attr("class","cur");
});