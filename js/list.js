
$(function(){

	//侧边栏菜单-------------------------------------------
	$('.main-ul-li').mouseover(function(){
		i=$(this).index();
		$('.main-drop-ul').eq(i).show();
		// console.log(i);
	}).mouseout(function(){
		$('.main-drop-ul').hide();
	})
///////////////////////布局出错，修改太大动静，放弃///////////////////////////////////

	//轮播图-----------------------------------------------
		var m=0;//全局变量，图片(数字)下标
		function autorun(){//封装函数 方便调用
			timer=setInterval(function(){
				m++;//下标自增
				if(m>2){m=0;}//判断下标
				$('#img li').eq(m).addClass('show').siblings('li').removeClass('show');//显示图片
				$('#num li').eq(m).addClass('show').siblings('li').removeClass('show');//显示数字
			},2000)}
		autorun();//首次调用函数 轮播

		//设置数字显示对应的图片
		$('.window').mouseenter(function(){//容器鼠标移入移出
			clearInterval(timer);//清除定时器
			$('#num li').mouseenter(function(){//鼠标移入数字 显示对应的图片
				m=$(this).index();//获取当前li的下标
				$('#img li').eq(m).addClass('show').siblings('li').removeClass('show');//显示图片
				$('#num li').eq(m).addClass('show').siblings('li').removeClass('show');//显示数字
			})
		}).mouseleave(function(){
			//继续轮播
			autorun();
		})
	//工具条toolbar-------------------------------------------

	$(window).scroll(function(){//滚动条事件
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于当前可视区距离你，就显示固定导航栏，反之就不显示
        if(scroH>document.documentElement.clientHeight){
            $("#nav_fixed").slideDown('fast');
            $('#toTop').css('opacity','1');
        }else{
            $("#nav_fixed").slideUp('fast');
            $('#toTop').css('opacity','0');
        }
    })

	$('#toTop').click(function(){
		$('html').animate({scrollTop:0},1500);
	})



})

