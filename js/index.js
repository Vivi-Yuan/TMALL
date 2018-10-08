$(function(){

    //------------------------------固定导航栏---------------------------

    $(window).scroll(function(){//滚动条事件
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于当前可视区距离你，就显示固定导航栏，反之就不显示
        if(scroH>document.documentElement.clientHeight){
            $("#nav_fixed").slideDown('fast');
            $('#toTop').css('opacity','1');//工具条回到顶部显示
        }else{
            $("#nav_fixed").slideUp('fast');
            $('#toTop').css('opacity','0');//工具条回到顶部隐藏
        }
    })


	//----------------------------侧边栏菜单-----------------------------

	//菜单li标签的鼠标移入移出事件
	$('.menu-nav-left dl dd').mouseover(function(){
		$(this).addClass('current').siblings().removeClass('current');
		var index=$(this).index();
		$('.menu-nav-left dl .current>a').css('font-weight','bold');
		//显示对应的内容
		$('.menu-product').eq(index).show();
	}).mouseout(function(){
		$('.menu-product').hide();
		$(this).removeClass('current');

	});


	//------------------------轮播图-----------------------
	//全局变量
	var m=0;
	//封装函数 方便调用
	function run(){
		timer=setInterval(function(){
			m++;//下标自增
			if(m>5){m=0;}//判断下标
			//显示图片
			$('.img>li').eq(m).addClass('show').siblings('li').removeClass('show');
			//显示小块
			$('.num>li').eq(m).addClass('show').siblings('li').removeClass('show');
			//背景颜色
			if(m==0){$('.slide').css('background','#E71367');}
			if(m==1){$('.slide').css('background','#E8E8E8');}
			if(m==2){$('.slide').css('background','#000A38');}
			if(m==3){$('.slide').css('background','#E8E8E8');}
			if(m==4){$('.slide').css('background','#0CB7FF');}
			if(m==5){$('.slide').css('background','#237FFE');}
		},2500)}
	run();//首次调用函数 轮播

	//设置小块显示对应的图片
	$('.box').mouseenter(function(){//容器鼠标移入移出
		clearInterval(timer);//清除定时器
		//鼠标移入小块 显示对应的图片
		$('.num>li').mouseenter(function(){
			//获取当前li的下标
			m=$(this).index();
			//显示图片
			$('.img>li').eq(m).addClass('show').siblings('li').removeClass('show');
			//显示小块
			$('.num>li').eq(m).addClass('show').siblings('li').removeClass('show');
			if(m==0){$('.slide').css('background','#E71367');}
			if(m==1){$('.slide').css('background','#E8E8E8');}
			if(m==2){$('.slide').css('background','#000A38');}
			if(m==3){$('.slide').css('background','#E8E8E8');}
			if(m==4){$('.slide').css('background','#0CB7FF');}
			if(m==5){$('.slide').css('background','#237FFE');}
		})

	}).mouseleave(function(){run();})//继续轮播


	//------------------------翻转照片墙-----------------------
	var clickTimes = 1;
    var lineCount = 10;//总列数
    $('#btnRefresh').click(function(){
        $('.iconRefresh').css({'transition':'.3s linear'},{'transform':'rotate('+360*clickTimes+'deg)'});

        for (var i = 0; i< $('.img-3d').length; i++){
          var colNum = parseInt(i/lineCount);//第几列
          var rowNum = i%lineCount;
          var delayTime = (colNum+rowNum)*100;

        $('.img-3d').eq(i).css('transition','.3s '+delayTime+'ms linear').css('transform','rotateY('+180*clickTimes+'deg)');
         }
        clickTimes++;
    })
	//------------------------翻转照片墙END--------~~~~~~效果有点不同~~~~~---------------


//----------------天猫超市小轮播------------------------------

	//全局变量
	var n=0;
	//封装函数 方便调用
	function littleRun(){
		timor=setInterval(function(){
			n++;//下标自增
			if(n>2){n=0;}//判断下标
			//给当前li添加class名floor-current-tab，其他li移除
			$('.floor-tab-head li').eq(n).addClass('floor-current-tab').siblings('li').removeClass('floor-current-tab');
			$('.floor-tab-content>div').eq(n).css('display','block').siblings('div').css('display','none');
			//显示对应内容
			// $('.floor-tab-cont').eq(n).show();
		},2000)}

	littleRun();//首次调用函数 轮播

	//鼠标移入.floor-tab-head li
	$('.floor-tab-head li').mouseenter(function(){
		clearInterval(timor);//停止轮播
		n=$(this).index();
		$('.floor-tab-head li').eq(n).addClass('floor-current-tab').siblings('li').removeClass('floor-current-tab');
		$('.floor-tab-content>div').eq(n).css('display','block').siblings('div').css('display','none');
	}).mouseleave(function(){//鼠标移出.floor-tab-head li
		littleRun();//继续轮播
	})


	//-----------------------楼层------------------------

	//获取点击的当前的a
	var index;
	//1.点击li 滚动到指定的位置
	$('.floor>a').click(function(){
		index=$(this).index()-1;
		if(index==8){$('html').animate({scrollTop:0},1000);}

		//设置点击滚动到指定的位置
		$(document).scrollTop($('.floors').eq(index).offset().top);
		var top=$('.floors').eq(index).offset().top;
		//加动画
		$('html').stop().animate({scrollTop:top},800);
	})

	//需要获取楼层高度的数组
	var heights=[];
	//向空数组添加高度值 floor
	$('.floors').each(function(){
		//向一个数组的尾部添加数据 push()
		//获取每一个floor的高度
		heights.push($(this).offset().top)
	})
	//输出数组
	//console.log(heights);

	//2.滚动条滚动某一个位置显示对应楼层
	//当前文档的滚动监听事件
	$(window).scroll(function(){
		//获取滚动的距离值
		var top=$(window).scrollTop();
		// if(top>=document.documentElement.clientHeight){$('.floor').fadeIn('slow');}else{
		// 	$('.floor').fadeOut('slow');
		if(top>=document.documentElement.clientHeight){
			$('.floor').css({height:'369px',width:'36px',transition:'all 0.3s',overflow:'hidden',opacity:1})
		}else{
			$('.floor').css({height:'0px',width:'0px',transition:'all 0.3s',overflow:'hidden'});
		}
		//console.log(top);

		//遍历每一个楼层距离顶部的位置
		for(var i=0;i<heights.length;i++){
			//判断1F 滚动距离>100<700
			if(top>=heights[i]-100 && top<heights[i+1]){
				//每1层 显示对应背景色
				if(i==0){$('.floor a').eq(i).css('background','#64C333').siblings('a').css('background','rgba(0, 0, 0, 0.6)');}
				if(i==1){$('.floor a').eq(i).css('background','#ff0036').siblings('a').css('background','rgba(0, 0, 0, 0.6)');}
				if(i==2){$('.floor a').eq(i).css('background','#EA5F8D').siblings('a').css('background','rgba(0, 0, 0, 0.6)');}
				if(i==3){$('.floor a').eq(i).css('background','#64C333').siblings('a').css('background','rgba(0, 0, 0, 0.6)');}
				if(i==4){$('.floor a').eq(i).css('background','#19C8A9').siblings('a').css('background','rgba(0, 0, 0, 0.6)');}
				if(i==5){$('.floor a').eq(i).css('background','#0AA6E8').siblings('a').css('background','rgba(0, 0, 0, 0.6)');}
				if(i==6){$('.floor a').eq(i).css('background','#F15453').siblings('a').css('background','rgba(0, 0, 0, 0.6)');}

			//第七个 top>=自己的offset().top
			}else if(top>=heights[heights.length-1]){
				i=heights.length-1;
				$('.floor>a').eq(i).css('background','#ff0036').siblings('a').css('background','rgba(0, 0, 0, 0.6)');
			}

		}
	})

	//工具条toolbar-------------------------------------------
	$('#toTop').click(function(){
		$('html').animate({scrollTop:0},800);
	})

})