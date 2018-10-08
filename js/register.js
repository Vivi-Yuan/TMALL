$(function(){

//小蜜拖拽-----------------------------------------
	$('.xiaomi').mousedown(function(e){
		//获取小蜜的位置
		var offset=$(this).offset();
		//获取鼠标距离小蜜不变的距离
		var x=e.pageX-offset.left;
		var y=e.pageY-offset.top;
		var bigLeft = $('.pub').offset().left;
		var bigTop = $('.pub').offset().top;
		//鼠标按下移动事件
		$(document).mousemove(function(evt){
			//获取指定的距离
			var ll=evt.pageX-x-bigLeft;
			var tt=evt.pageY-y-bigTop;

			//判断边界
			if(ll<=0){
				ll=0;
			}else if(ll>=$('.pub').width()-$('.xiaomi').width()){
				ll=$('.pub').width()-$('.xiaomi').width();
			}

			if(tt<=0){
				tt=0;
			}else if(tt>=$('.pub').height()-$('.xiaomi').height()){
				tt=$('.pub').height()-$('.xiaomi').height();
			}

			//给小蜜绑定移动的距离
			$('.xiaomi').css({left:ll+'px',top:tt+'px'});
		})
	})

	//鼠标抬起
	$(document).mouseup(function(){
		//关闭鼠标移动事件
		$(document).off('mousemove');
	})

	//点击同意按钮遮罩隐藏
	$('#agreeBtn').click(function(){
		$('.cover-box').hide();
	})

//---------------------小蜜拖拽END---------------------


//步骤li点击样式
	// $('.steps ol li').click(function(){

	// })



// 手机归属地选择  冒泡流----------------------------------------

	$('.local').toggle(function(){
		$('.drop').show();
	},function(){
		$('.drop').hide();
	});

	$('.drop>li').click(function(){
		$('.local').html($(this).html());
		$('.drop').hide();
	})

//验证条---------------------------------------------------------

    // success = false,//是否通过验证的标志
    // distance = $(".drag").width() - $('.btn').width();//滑动成功的距离

    // $('.btn').mousedown(function(e){//滑块鼠标按下事件
    //     //鼠标按下前过渡属性
    //     $('.btn').css('transition','');
    //     $('.bg').css('transition','');


    //     //滑块位于初始位置时，鼠标按下的水平位置
    //     var e = e || window.event;
    //     var downX = e.clientX;
    //     var btnLeft = $('.btn').offset().left;
    //     //绑定文档鼠标移动事件
    //     $(document).mousemove(function(e){
    //         var e = e || window.event;
    //         var moveX = e.clientX;//获取鼠标移动后的水平位置

    //         //得到鼠标水平位置的偏移量（鼠标移动时的位置 - 鼠标按下时的位置）
    //         var offsetX = moveX - downX;

    //         if( offsetX >=distance){//如果滑过了终点
    //             offsetX = distance;//滑块停留在终点位置
    //         }else if( offsetX < 0){//滑到了起点的左侧
    //             offsetX = 0;//滑块重置为起点位置
    //         }

    //         //根据鼠标移动的距离来动态设置滑块的偏移量和背景颜色的宽度
    //         $('.btn').offset({left:btnLeft+offsetX});
    //         $('.bg').width(offsetX + "px");

    //         if( offsetX > distance){//鼠标的水平移动距离=滑动成功的宽度
    //             //滑动成功后的样式
    //             $('.text').html("验证通过");
    //             $('.text').css('color','#fff');
    //             $('.btn').html() = "&radic;";
    //             $('.btn').css('color','green');
    //             $('.bg').css('backgroundColor','lightgreen');
    //             console.log(offset+':'+distance)
    //             success = true;//滑动成功

    //             //成功后，清除掉鼠标按下和移动事件
    //             $('.btn').mousedown() = null;
    //             $(document).mousemove() = null;
    //             setTimeout(function(){
    //                     alert('解锁成功！');
    //                 },100);

	   //      console.log(1111111111)//======================================???

    //         }
    // 	}).mouseup(function(e){//文档鼠标抬起事件
	   //      //鼠标抬起时，滑块滑到了终点，则验证通过
	   //      console.log(success);//=========================================false???
	   //      if(success){
	   //          return;
	   //      }else{
	   //          //反之，则将滑块复位（设置了1s的属性过渡效果）
	   //          $('.btn').css('left',0).css('transition','left .5s ease');
	   //          $('.bg').css('width',0).css('transition','width .5s ease');
	   //      }
	   //      //清除鼠标移动和抬起事件
	   //      $(document).mousemove(null);
	   //      $(document).mouseup(null);
	   //  })
    // })

        //     box = $(".drag"),//容器
        //     bg = $(".bg"),//背景
        //     text = $(".text"),//文字
        //     btn = $(".btn"),//滑块
        //     success = false,//是否通过验证的标志
        //     distance = box.offsetWidth - btn.offsetWidth;//滑动成功的宽度（距离）

        // //二、给滑块注册鼠标按下事件
        // btn.onmousedown = function(e){

        //     //1.鼠标按下之前必须清除掉后面设置的过渡属性
        //     btn.style.transition = "";
        //     bg.style.transition ="";

        //     //说明：clientX 事件属性会返回当事件被触发时，鼠标指针向对于浏览器页面(或客户区)的水平坐标。

        //     //2.当滑块位于初始位置时，得到鼠标按下时的水平位置
        //     var e = e || window.event;
        //     var downX = e.clientX;

        //     //三、给文档注册鼠标移动事件
        //     document.onmousemove = function(e){

        //         var e = e || window.event;
        //         //1.获取鼠标移动后的水平位置
        //         var moveX = e.clientX;

        //         //2.得到鼠标水平位置的偏移量（鼠标移动时的位置 - 鼠标按下时的位置）
        //         var offsetX = moveX - downX;

        //         //3.在这里判断一下：鼠标水平移动的距离 与 滑动成功的距离 之间的关系
        //         if( offsetX > distance){
        //             offsetX = distance;//如果滑过了终点，就将它停留在终点位置
        //         }else if( offsetX < 0){
        //             offsetX = 0;//如果滑到了起点的左侧，就将它重置为起点位置
        //         }

        //         //4.根据鼠标移动的距离来动态设置滑块的偏移量和背景颜色的宽度
        //         btn.style.left = offsetX + "px";
        //         bg.style.width = offsetX + "px";

        //         //如果鼠标的水平移动距离 = 滑动成功的宽度
        //         if( offsetX == distance){

        //             //1.设置滑动成功后的样式
        //             text.innerHTML = "验证通过";
        //             text.style.color = "#fff";
        //             btn.innerHTML = "&radic;";
        //             btn.style.color = "green";
        //             bg.style.backgroundColor = "lightgreen";

        //             //2.设置滑动成功后的状态
        //             success = true;
        //             //成功后，清除掉鼠标按下事件和移动事件（因为移动时并不会涉及到鼠标松开事件）
        //             btn.onmousedown = null;
        //             document.onmousemove = null;

        //             //3.成功解锁后的回调函数
        //             setTimeout(function(){
        //                 alert('解锁成功！');
        //             },100);
        //         }
        //     }

        //     //四、给文档注册鼠标松开事件
        //     document.onmouseup = function(e){

        //         //如果鼠标松开时，滑到了终点，则验证通过
        //         if(success){
        //             return;
        //         }else{
        //             //反之，则将滑块复位（设置了1s的属性过渡效果）
        //             btn.style.left = 0;
        //             bg.style.width = 0;
        //             btn.style.transition = "left 1s ease";
        //             bg.style.transition = "width 1s ease";
        //         }
        //         //只要鼠标松开了，说明此时不需要拖动滑块了，那么就清除鼠标移动和松开事件。
        //         document.onmousemove = null;
        //         document.onmouseup = null;
        //     }
        // }

//验证条---------------------------------------------------------

    $("#slider").slider({
        callback: function(result) {
            $("#result").text(result);
        }
    });

//验证手机号是否为空---------------------------------------------------------
    // $('.nextstep').click(function(){
    //     if($('.numbox').val() == null){
    //         $('.warn').show();
    //     }
    // })//-------------------------------------？？？

    // $("#slider").change(function(){
    //   $('.nextstep').css({"background-color":"#ff0036","color":"#fff"});
    // });//---------------------------???



})