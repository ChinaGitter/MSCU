// JavaScript Document

	var b=$(".topSlide");
	var b_pic=$(".topSlideUl li",b);
	var le = b_pic.length;
	var b_tab=$(".topSlideLi a",b);
	var pre = $(".preT",b);
	var nex = $(".nextT",b);
	function ta(i,j){
		b_pic.eq(j).fadeOut(1000);
		b_tab.eq(j).attr("class","");
		b_pic.eq(i).fadeIn(1000);
		b_tab.eq(i).attr("class","current");
	}
	b_tab.click(function(){
		var i=b_tab.index(this);
		var j=b_tab.index($('.topSlide .current:eq(0)'));
		if(i!=j){
			ta(i,j);
		}
	});
	function aut(){
		var j=b_tab.index($('.topSlide .current:eq(0)'));
		var i=(j+1)%le;
		ta(i,j);
	}
	pre.click(function(){
		var j=b_tab.index($('topSlide .current:eq(0)'));
		var i=(j-1)%le;
		ta(i,j);
	});
	nex.click(function(){
		var j=b_tab.index($('.topSlide .current:eq(0)'));
		var i=(j+1)%le;
		ta(i,j);
	});
	//定时切换
	var settime=window.setInterval(aut,3000);
	b_pic.mouseover(function(){
		window.clearInterval(settime);
	});
	b_pic.mouseout(function(){
		settime=window.setInterval(aut,3000);
	});