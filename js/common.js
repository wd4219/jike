$(window).scroll(function() {
	if($(window).scrollTop() > 200) {
		$("#backtop").addClass("show");
	} else {
		$("#backtop").removeClass("show");
	}
});
$("#backtop").click(function() {
	$("body,html").stop().animate({
		scrollTop: 0
	});
});

//显示弹出层
function pop_box(show_btn_id, close_btn_id, pop_layer_id, is_hidden_show_btn, mark_id) {
	var show_btn = document.getElementById(show_btn_id);
	var pop_layer = document.getElementById(pop_layer_id);
	var mark = document.getElementById(mark_id);
	var close_btn = document.getElementById(close_btn_id);
	show_btn.onclick = function() {
		if(mark) {
			mark.style.display = "block";
			pop_layer.style.display = "block";
		} else {
			pop_layer.style.display = "block";
		}
		if(is_hidden_show_btn) {
			show_btn.style.display = "none";
		}
	}
	close_btn.onclick = function() {
		if(mark) {
			mark.style.display = "none";
			pop_layer.style.display = "none";
		} else {
			pop_layer.style.display = "none";
		}
		if(is_hidden_show_btn) {
			show_btn.style.display = "block";
		}
	}
}

//导航条搜索按钮动画实现
function search_box_animate() {
	var search_icon = document.getElementsByClassName("search")[0];
	var search_box = document.getElementById("search_box");
	var search_close = document.getElementsByClassName("close")[0];
	search_icon.onclick = function() {
		search_box.className += " showanimate";
	}
	search_close.onclick = function() {
		search_box.className = "search_box";
	}
};


//标签切换实现
function tab(){
	var tab_btns = document.getElementById("tab_btns").getElementsByTagName("li");
	var tab_contents = document.getElementById("tab_contents").getElementsByTagName("li");
	var index = 0;
	for(var i = 0,len = tab_btns.length;i<len;i++)
	{
		tab_btns[i].onclick = function(){
			tab_contents[parseInt(this.getAttribute("data-index"))].style.display = "block";
			this.className = "active";
			tab_change(parseInt(this.getAttribute("data-index")));
		};
	}
	function tab_change(index){
		for(var i = 0,len =tab_btns.length;i< len;i++){
			if(i != index)
			{
				tab_btns[i].className = "";
				tab_contents[i].style.display = "none";
			}
		}
	}
	
}
