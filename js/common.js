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
		clear_text(pop_layer);
	}

	function clear_text(pop_layer) {
		var input = pop_layer.getElementsByTagName("input");
		var textarea = pop_layer.getElementsByTagName("textarea");
		for(var i = 0, len = input.length; i < len; i++) {
			if(input[i].getAttribute("type") == "text" || input[i].getAttribute("type") == "password") {
				input[i].value = "";
			}
		}
		for(var j = 0, len = textarea.length; j < len; j++) {
			textarea[j].value = "";
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
}

//标签切换实现
function tab(btns, btns_box) {
	var btns = btns || "tab_btns";
	var tab_btns = document.getElementById(btns).getElementsByTagName("li");
	var tab_contents = document.getElementById("tab_contents").getElementsByTagName("li");
	if(btns_box) {
		var other_btns = document.getElementById(btns_box).getElementsByTagName("li");
	}
	for(var i = 0, len = tab_btns.length; i < len; i++) {
		tab_btns[i].onclick = function() {
			tab_contents[parseInt(this.getAttribute("data-index"))].style.display = "block";
			this.className = "active";
			tab_change(parseInt(this.getAttribute("data-index")));
			if(btns_box) {
				other_btns[parseInt(this.getAttribute("data-index"))].className = "active";
			}
		};
	}

	function tab_change(index) {
		for(var i = 0, len = tab_btns.length; i < len; i++) {
			if(i != index) {
				tab_btns[i].className = "";
				tab_contents[i].style.display = "none";
				if(btns_box) {
					other_btns[i].className = "";
				}
			}
		}
	}

}

function myvalidation(form_id) {
	$("#" + form_id).validate({
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 6,
				maxlength: 32
			},
			phone_number: {
				required: true
			},
			identifying_code: {
				required: true
			},
			dynamic_code: {
				required: true
			}
		},
		messages: {
			username: {
				required: "请输入用户名",
				minlength: "用户名不能少2个字符"
			},
			password: {
				required: "密码不能为空",
				minlength: "密码长度不能少于6个字符",
				maxlength: "密码长度不能超过32个字符"
			},
			phone_number: {
				required: "请输入手机号"
			},
			identifying_code: {
				required: "请输入验证码"
			},
			dynamic_code: {
				required: "请输入动态码"
			}
		}
	});
}

//轮播图函数
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
				if(left > 0) {
					list.style.left = parseInt("-" + img_width) * len + "px";
				}
				if(left < (parseInt("-" + img_width) * len)) {
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

	container.onmouseover = stop;
	container.onmouseout = play;
	play();
}