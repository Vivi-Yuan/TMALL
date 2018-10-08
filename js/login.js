
$(function(){
  	//登录方式切换
		$('.page1 .login-switch').live("click",function(){
			$('.page2').css('display','block');
			});
			$(".page2 .login-PC").click(function(){
				$('.page2').css('display','none');
			});

		//点击重置账号
		$('#reset').click(function(){
			$(this).hide();
			$('.login-text').val('');
			$('.login-text').keyup(function(){
				if($('.login-text').val()){
					$('#reset').show();
				}
			})
		})

		//ajax验证输入用户名以及密码是否正确
		var submit = document.getElementById("submit");
		submit.onclick=function fnLogin(){
		var oUname = document.getElementById("uname");
		var oUpass = document.getElementById("upass");
		var oError = document.getElementById("error");
		var isNotError = true;
		if(oUname.value.length > 20 || oUname.value.length < 6){
			oError.style.display = 'block';
			oError.innerHTML = "用户名长度必须在6~20位之间";
			isNotError = false;
			return;

		}else if(oUname.value.charCodeAt(0) >= 48 && oUname.value.charCodeAt(0) <= 57){
			oError.style.display = 'block';
			oError.innerHTML = "用户名开头不能为数字";
			isNotError = false;
			return;
		}else{
			for(var i=0; i<oUname.value.length; i++){
				if((oUname.value.charCodeAt(i) > 122 || oUname.value.charCodeAt(i) < 97) && (oUname.value.charCodeAt(i) > 57 || oUname.value.charCodeAt(i) < 48)){
					oError.style.display = 'block';
					oError.innerHTML = "用户名只能包含小写字母和数字";
					isNotError = false;
					return;
				}
			}
		}
		if(oUpass.value.length > 20 || oUpass.value.length < 6){
			oError.style.display = 'block';
			oError.innerHTML = "密码长度必须在6~20位之间";
			isNotError = false;
			return;
		}
		oError.style.display = 'block';
		oError.innerHTML = "登录成功";
	}
})
