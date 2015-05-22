// JavaScript Document

	var bn=$(".bannerSlide");
	var bn_pic=$(".slide li",bn);
	var len = bn_pic.length;
	var bn_tab=$(".slideLi a",bn);
	var prev = $(".pre",bn);
	var next = $(".next",bn);
	function tab(i,j){
		bn_pic.eq(j).fadeOut(1000);
		bn_tab.eq(j).attr("class","");
		bn_pic.eq(i).fadeIn(1000);
		bn_tab.eq(i).attr("class","current");
	}
	bn_tab.click(function(){
		var i=bn_tab.index(this);
		var j=bn_tab.index($('.bannerSlide .current:eq(0)'));
		if(i!=j){
			tab(i,j);
		}
	});
	function auto(){
		var j=bn_tab.index($('.bannerSlide .current:eq(0)'));
		var i=(j+1)%len;
		tab(i,j);
	}
	prev.click(function(){
		var j=bn_tab.index($('bannerSlide .current:eq(0)'));
		var i=(j-1)%len;
		tab(i,j);
	});
	next.click(function(){
		var j=bn_tab.index($('.bannerSlide .current:eq(0)'));
		var i=(j+1)%len;
		tab(i,j);
	});
	//定时切换
	var settime=window.setInterval(auto,3000);
	bn_pic.mouseover(function(){
		window.clearInterval(settime);
	});
	bn_pic.mouseout(function(){
		settime=window.setInterval(auto,3000);
	});