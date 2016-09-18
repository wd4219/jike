'use strict'

window.onload = function(){
	search_box_animate()
	
	//slider动画实现
	var slider = document.getElementsByClassName("slider")[0];
	var img_box = document.getElementsByClassName("img")[0];
	var prev = document.getElementsByClassName("prev")[0];
	var next = document.getElementsByClassName("next")[0];
	var num_img = img_box.getElementsByTagName("li").length;
	var num_icon = document.getElementsByClassName("num")[0];
	var index = 0;
	var timer;
	next.onclick = next_img;
	function next_img(){
		if(index == num_img - 1){
			index = 0;
		}
		else{	
			index++;
		}
		fade(index);
		showbuttons();
		
	}
	prev.onclick = function(){
		if(index == 0){
			index = num_img-1;
		}
		else{
			index--;
		}
		fade(index);
		showbuttons();
	}
	
	for(var i = 0;i < num_img;i++)
	{
		num_icon.innerHTML += "<li data-index=" + i +"></li>";
		num_icon.getElementsByTagName("li")[0].className = "active";
		
	}
	for(var i = 0;i < num_img;i++)
	{
		num_icon.getElementsByTagName("li")[i].setAttribute("data-index",i);
		num_icon.getElementsByTagName("li")[i].onclick = function(){
			fade(this.getAttribute("data-index"));
			index = this.getAttribute("data-index");
			showbuttons();
		}
	}
	function fade(index){
		for(var i = 0;i< num_img;i++)
		{
			if(i == index){
				img_box.getElementsByTagName("li")[i].className = "fadein";
			}
			else{
				img_box.getElementsByTagName("li")[i].className = "fadeout"
			}
		}
	}
	function autoplay(){
		timer = setTimeout(function(){
			autoplay();
			next_img();
		},3000);
	}
	function stopautoplay()
	{
		clearTimeout(timer);
	}
	slider.onmouseover  = stopautoplay;
	slider.onmouseout = function(){
		autoplay();
	}	
	function showbuttons(){
		for( var i = 0;i < num_img;i++)
		{
			if(i == index)
			{
				num_icon.getElementsByTagName("li")[i].className = "active";
			}
			else
			{
				num_icon.getElementsByTagName("li")[i].className = "";
			}
		}
	}
	//点击小按钮切换
	
	autoplay();
	
	
	//实现学生故事滚动特效
//	var first_banner = document.getElementById("one_banner");
//	var second_

	//实现返回顶部
//	var backtop = document.getElementById("backtop");
//	window.onscroll = function(){
//		if(document.body.scrollTop > 200){
//			backtop.className += " show";
//		}
//		else{
//			backtop.className = "icon-fanhuidingbu";
//		}
//	}
//	backtop.onclick = function(){
//		document.body.scrollTop = 0;
//	}
	//登录弹出框代码
	pop_box("login","close_pop","pop_login",false,"mark");
	
}