// JavaScript Document
var playImg=$(".video img");
playImg.click(function(){
	$(this).hide();
});
var play=$(".play");
play.click(function(){
	playImg.hide();
});