window.onload = function(){
	search_box_animate()
	//弹出留言层
	pop_box("show_btn","close_btn","pop_layer",true);
	show_top_var();
	double_tab();
	function double_tab(){
		tab("tab_btns","top_tab_btns");
		tab("top_tab_btns","tab_btns");
	}
	function show_top_var(){
		var top_nav = document.getElementById("top_bar");
		var tab_btns = document.getElementById("tab_btns");
		var top_tab_btns = document.getElementById("top_tab_btns");
		window.onscroll = function(){
			if(document.body.scrollTop >370)
			{
				top_nav.style.display = "block";
			}
			else{
				top_nav.style.display = "none";
			}
		}
	}
}
$(function(){
	$(".down_arrow").click(function(){
		$(this).toggleClass("active");
		$(this).parent().siblings(".book").slideToggle();
	});
})
