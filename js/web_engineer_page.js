window.onload = function(){
	search_box_animate()
	//弹出留言层
	pop_box("show_btn","close_btn","pop_layer",true);
	show_more_problem();
	left_nav();
	function show_more_problem(){
		var showbtn = document.getElementById("more_btn");
		var problem_content = document.getElementById("problem_content");
		showbtn.onclick = function(){
			this.style.display = "none";
			problem_content.style.height = "auto";
		}
	}
	function left_nav(){
		var  nav = document.getElementById("left_nav");
		window.onscroll = function(){
			if(document.body.scrollTop > 60)
			{
				nav.style.position = "fixed";
				nav.style.top = "40px";
			}
			else{
				nav.style.position = "absolute";
				nav.style.top = "100px";
			}
		}
	}
}
