window.onload = function() {
	search_box_animate();
	//修改用户名
	(function() {
		var show_btn = document.getElementById("edit_username");
		var show_box = document.getElementById("show_box");
		var hidden_box = document.getElementById("hidden_box");

		show_btn.onclick = function() {
			show_box.style.display = "none";
			hidden_box.style.display = "block";
		}
		var btns = hidden_box.getElementsByClassName("btn");
		btns[0].onclick = function() {

			var username = document.getElementById("username").value;
			if(username == "") {
				return;
			} else {
				show_box.style.display = "block";
				show_btn.style.display = "none";
				hidden_box.style.display = "none";
				show_box.getElementsByTagName("span")[0].innerHTML = username;
				document.getElementById("username").value = "";
			}
		}
		btns[1].onclick = function() {
			show_box.style.display = "block";
			hidden_box.style.display = "none";
		}
	})();

	//修改域名
	(function() {
		var showbtn = document.getElementById("set_domain");
		var domain_area = document.getElementById("domain_url_area");
		var domain_input_box = document.getElementById("domain_input_box");

		showbtn.onclick = function() {
			domain_input_box.style.display = "block";
			showbtn.style.display = "none";
		}
		var btns = domain_input_box.getElementsByClassName("btn");
		btns[0].onclick = function() {

			var username = document.getElementById("domain_url").value;
			if(username == "") {
				return;
			} else {
				domain_area.style.display = "block";
				domain_input_box.style.display = "none";
				domain_area.innerHTML += "/" + username;
				domain_area.value = "";
			}
		}
		btns[1].onclick = function() {
			showbtn.style.display = "block";
			domain_input_box.style.display = "none";
		}
	})();
	
	
	//城市选择
	new PCAS("province","city")//通过ID省市二级联动，无默认值，无文字提示信息
	
	
	
	//表单验证
	
}