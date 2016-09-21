function slider_banner(interval, img_width, container, banner_list, buttons, prev, next) {
	var container = document.getElementById(container);
	var list = document.getElementById(banner_list);
	var showButton = function(){};
	if(prev && next) {
		var prev = document.getElementById(prev);
		var next = document.getElementById(next);
		next.onclick = next_click;

		prev.onclick = function() {
			if(animated) {
				return;
			}
			if(index == 1) {
				index = len;
			} else {
				index -= 1;
			}
			animate(img_width);
			showButton();
		}
	}
	if(buttons) {
		var buttons = document.getElementById(buttons).getElementsByTagName("a");

		function isshowButton() {
			for(var i = 0; i < buttons.length; i++) {
				if(buttons[i].className == "active") {
					buttons[i].className = "";
					break;
				}
			}
			buttons[index - 1].className = "active";
		}
		for(var i = 0; i < buttons.length; i++) {
			buttons[i].onclick = function() {
				if(animated) {
					return;
				}
				if(this.className == "active") {
					return;
				}
				var myIndex = parseInt(this.getAttribute("data-index"));
				console.log(myIndex);
				var offset = parseInt("-" + img_width) * (myIndex - index);
				animate(offset);
				index = myIndex;

				showButton();
			}
		}
		var showButton = isshowButton;
	}
	var index = 1;
	var len = list.children.length - 2;
	var animated = false;
	var timer;

	function next_click() {
		if(animated) {
			return;
		}
		if(index == len) {
			index = 1;
		} else {
			index += 1;
		}
		animate(parseInt("-" + img_width));
		showButton();
	}

	function animate(offset) {
		if(offset == 0) {
			return;
		}
		animated = true;
		var time = 600;
		var inteval = 30;
		var speed = offset / (time / inteval);

		var left = parseInt(list.style.left) + offset;

		var go = function() {
			if((speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
				list.style.left = parseInt(list.style.left) + speed + "px";
				setTimeout(go, inteval);
			} else {
				list.style.left = left + "px";
				if(left >-254) {
					list.style.left = parseInt("-" + img_width) * (len-2) + "px";
				}
				if(left < (parseInt("-" + img_width) * (len-2))) {
					list.style.left = parseInt("-" + img_width) + "px";
				}
				animated = false;
			}
		}
		go();
	}

	function play() {
		timer = setTimeout(function() {
			next_click();
			play();
		}, interval);
	}

	function stop() {
		clearTimeout(timer);
	}
}
window.onload = function(){
	search_box_animate()
	//弹出留言层
	pop_box("show_btn","close_btn","pop_layer",true);
	show_more_problem();
	left_nav();
	slider_banner(1000, 254, "container", "list", null,"prev","next");
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
