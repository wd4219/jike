'use strict'

window.onload = function(){
	//导航条搜索按钮动画实现
	var search_icon = document.getElementsByClassName("search")[0];
	var search_box = document.getElementById("search_box");
	var search_close = document.getElementsByClassName("close")[0];
	search_icon.onclick = function(){
		search_box.className += " showanimate";
	}
	search_close.onclick = function(){
		search_box.className = "search_box";
	}
	
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
	$(window).scroll(function(){
		if($(window).scrollTop() > 200)
		{
			$("#backtop").addClass("show");
		}
		else{
			$("#backtop").removeClass("show");
		}
	});
	$("#backtop").click(function(){
		$("body,html").stop().animate({scrollTop:0});
	});
	
	
	//显示弹出层
	var login = document.getElementById("login");
	var pop_login = document.getElementById("pop_login");
	var mark = document.getElementById("mark");
	var close_pop_login = document.getElementById("close_pop");
	login.onclick = function(){
		mark.style.display = "block";
		pop_login.style.display = "block";
	}
	close_pop_login.onclick = function(){
		pop_login.style.display = "none";
		mark.style.display = "none";
	}
}