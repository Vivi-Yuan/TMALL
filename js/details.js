
$(function(){

//店铺头部小轮播---------------------------------------------

	var m = 0;//全局变量
	function autorun(){//封装函数 方便调用
		timer=setInterval(function(){
			m++;//下标自增
			if(m>1){m=0;}//判断下标
			$('#img li').eq(m).addClass('show').siblings('li').removeClass('show');//显示图片
		},2000)}
	autorun();//调用函数 轮播

//店铺头部小轮播END---------------------------------------------


//放大镜----------------------------------------------------

	//small中的鼠标移动事件
	$('#small').mousemove(function(e){
		//move big 显示
		$('#move,#big').show();

		//获取鼠标的坐标
		var x=e.pageX-$(this).offset().left;
		var y=e.pageY-$(this).offset().top;

		//鼠标要居中-宽高一半
		var x=x-$('#move').width()/2;
		var y=y-$('#move').height()/2;
		//判断x y 的边界
		if(x<=0){
			x=0
		}else if(x>=$('#small').width()-$('#move').width()){
			x=$('#small').width()-$('#move').width();
		}

		if(y<=0){
			y=0;
		}else if(y>=$('#small').height()-$('#move').height()){
			y=$('#small').height()-$('#move').height();
		}

		//绑定给move
		$('#move').css({left:x,top:y});

		//大图和小图 比例关系
		var scale= $('#big>img').width()/$('#small>img').width();
		// console.log(scale);
		//设置大图移动
		$('#big>img').css({left:-x*scale,top:-y*scale});
		//改变大图
		$('#big>img').attr('src',$('#small_pic').attr('src'));

		}).mouseout(function(){//鼠标移出small
			//move和big 隐藏
			$('#move,#big').hide();
		});

		//鼠标移入更换图片
		$('#pic_list>li>img').mouseover(function(){
			//设置small中img的src = 当前img的src
			$('#small>img').attr('src',$(this).attr('src'));
			//设置当前选中的小图片边框样式
			$(this).css('border','2px solid #000');
		}).mouseout(function(){//鼠标移出小图片
			//设置原来样式
			$(this).css('border','2px solid transparent');
		}).click(function(){
			$(this).css('border','2px solid #000');
		})

//放大镜END----------------------------------------------------

// 地址列表点击显示------------------------------------------
	$('.location').toggle(function(){
		$('.local-drop').show();
	},function(){
		$('.local-drop').hide();
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
		$('html').animate({scrollTop:0},1000);
	})

})