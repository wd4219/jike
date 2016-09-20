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
	function clear_text(pop_layer){
		var input = pop_layer.getElementsByTagName("input");
		var textarea = pop_layer.getElementsByTagName("textarea");
		for(var i = 0,len = input.length;i < len;i++)
		{
			if(input[i].getAttribute("type") == "text" || input[i].getAttribute("type") == "password")
			{
				input[i].value = "";
			}
		}
		for(var j = 0,len = textarea.length;j<len;j++)
		{
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
function tab(btns,btns_box){
	var btns = btns || "tab_btns";
	var tab_btns = document.getElementById(btns).getElementsByTagName("li");
	var tab_contents = document.getElementById("tab_contents").getElementsByTagName("li");
	if(btns_box){
		var other_btns = document.getElementById(btns_box).getElementsByTagName("li");
	}
	for(var i = 0,len = tab_btns.length;i<len;i++)
	{
		tab_btns[i].onclick = function(){
			tab_contents[parseInt(this.getAttribute("data-index"))].style.display = "block";
			this.className = "active";
			tab_change(parseInt(this.getAttribute("data-index")));
			if(btns_box){
				other_btns[parseInt(this.getAttribute("data-index"))].className = "active";
			}
		};
	}
	function tab_change(index){
		for(var i = 0,len =tab_btns.length;i< len;i++){
			if(i != index)
			{
				tab_btns[i].className = "";
				tab_contents[i].style.display = "none";
				if(btns_box){
					other_btns[i].className = "";
				}
			}
		}
	}
	
}
//function tab(btns_box){
//	var tab_btns = document.getElementById("tab_btns").getElementsByTagName("li");
//	var tab_contents = document.getElementById("tab_contents").getElementsByTagName("li");
//	if(btns_box){
//		var btns = document.getElementById(btns_box).getElementsByTagName("li");
//	}
//	
//	for(var i = 0,len = tab_btns.length;i<len;i++)
//	{
//		tab_btns[i].onclick = function(){
//			tab_contents[parseInt(this.getAttribute("data-index"))].style.display = "block";
//			this.className = "active";
//			tab_change(parseInt(this.getAttribute("data-index")));
//			if(btns){
//				btns[parseInt(this.getAttribute("data-index"))].className = "active";
//			}
//		};
//	}
//	function tab_change(index){
//		for(var i = 0,len =tab_btns.length;i< len;i++){
//			if(i != index)
//			{
//				tab_btns[i].className = "";
//				tab_contents[i].style.display = "none";
//				if(btns){
//					btns[i].className = "";
//				}
//			}
//		}
//	}
//	
//}
function myvalidation(form_id){
	$("#"+form_id).validate({
        rules: {
            username:{
                required: true,
                minlength: 2
            },
            password:{
                required: true,
                minlength: 6,
                maxlength: 32
            },
            phone_number:{
            	required:true
            },
            identifying_code:{
            	required:true
            },
            dynamic_code:{
            	required:true
            }
        },
        messages:{
            username:{
                required: "请输入用户名",
                minlength:"用户名不能少2个字符"
            },
            password:{
                required: "密码不能为空",
                minlength: "密码长度不能少于6个字符",
                maxlength: "密码长度不能超过32个字符"
            },
            phone_number:{
            	required:"请输入手机号"
            },
            identifying_code:{
            	required:"请输入验证码"
            },
            dynamic_code:{
            	required:"请输入动态码"
            }
        }
    });
}
