$(function(){
    $(".text p").height($("#pages1").height()*0.04);
    $(".text1 p").height($("#pages5").height()*0.04);
    var audio = document.querySelector("#audio");
    // var imgSrc=[];
    var imgSrc = ["imgs/loading_txt.png","imgs/1-1.png","imgs/star2.png","imgs/1-2.png",		"imgs/kuang_bg.png","imgs/star3.png","imgs/1-3.png","imgs/loading_bg.png","imgs/star4.png","imgs/1-4.png","imgs/loading_txt.png","imgs/star5.png","imgs/1-5.png","imgs/loading_xuzheng.png",	"imgs/star6.png","imgs/1-6.png","imgs/star7.png","imgs/1-7.png",			"imgs/music_off.png","imgs/star8.png","imgs/1-8.png","imgs/music_on.png","imgs/star9.png",
"imgs/one_guan_pic.png","imgs/super_body1.png","imgs/CSSatyr.png",		"imgs/one_pic1.png","imgs/super_body2.png","imgs/baobei.png","imgs/one_pic2.png",		"imgs/super_body3.png","imgs/beier.png","imgs/one_pic3.png","imgs/super_glasses.png",
"imgs/bg.jpg","imgs/person_kuang.png","imgs/super_head.png","imgs/chip1.png","imgs/phone.png","imgs/tietou.png","imgs/chip2.png","imgs/ribbon1.png","imgs/chip3.png",		"imgs/ribbon2.png","imgs/up.png","imgs/chip4.png","imgs/ribbon3.png","imgs/vivo_mobile.png",
"imgs/chip5.png","imgs/ribbon4.png","imgs/chip6.png","imgs/ribbon5.png",		"imgs/word_bg.jpg","imgs/chip7.png","imgs/xuzheng.png",
"imgs/chip8.png","imgs/star.png","imgs/xuzheng_kuang.png","imgs/color_yan.png","imgs/star1.png","imgs/xuzheng_succ_kuang.png","imgs/game_info_bg.png","imgs/star10.png","imgs/zxuzheng.png","imgs/game_info_bt.png","imgs/star11.png"];
    // for(var i=1;i<imgSrc.;i++){
    //     imgSrc.push('imgs/chip'+i+'.png');
    // }
    var loaded=0;
    var toload = imgSrc.length;
    for(var i=0;i<imgSrc.length;i++){
    var img = new Image();
    img.onload = function(){
        loaded++;
        var percent = loaded / toload ;
        if (percent == 1) {
            var timer;
            timer = setTimeout(function () {

            $('#pages0').hide();
            $('#pages1').show();
        }, 1000)
        }
    }
            img.src = imgSrc[i];
    }
    // 背景音乐关闭 开启
    $("#music_on").click(function () {
        audio.pause();
        $("#music_on").hide();
        $("#music_off").show();
    });
    $("#music_off").click(function () {
        audio.play();
        $("#music_on").show();
        $("#music_off").hide();
    });
    //文字
    var index=0;
    function show1(){
        setTimeout(function (){
            $("#audio1").attr({"src":"media/背景文字页-打字音效.mp3"});
            $(".text p").eq(index).show();
            index++;
         if(index<=12){
             if(index>=8){
                 $('.img1 img').css({
                     "-webkit-transition": "1s",
                     "-webkit-animation": "star1 4s linear infinite"
                 });
                 $('.img3 img').css({
                     "-webkit-transition": "1s",
                     "-webkit-animation": "star2 5s linear infinite"
                 });
                 $('.img2 img').css({
                     "-webkit-transition": "1s",
                     "-webkit-animation": "star3 6s linear infinite"
                 });
             }
                show1();

            }else{
                $("#audio1").attr({"src":""});

                $(".text p").css({
                    "-webkit-transition": "1s",
                    "-webkit-animation": "text 1s linear",
                    "-webkit-animation-fill-mode": "forwards",
                });
                $('.img1 img').css({
                    "-webkit-transition": "1s",
                    "-webkit-animation": "star11 3s linear",
                    "-webkit-animation-fill-mode": "forwards"
                });
                $('.img1 img').css({
                    "-webkit-transition": "1s",
                    "-webkit-animation": "star111 1s  linear infinite",
                });
                $('.img4 img').css({
                    "-webkit-transition": "1s",
                    "-webkit-animation": "star4 2s linear",
                });
                $('.img4 img').css({
                    "-webkit-transition": "1s",
                    "-webkit-animation": "star41 2s linear infinite",
                });
                setTimeout(function() {
                        $(".vivomove").css({
                            "-webkit-animation":"vivomoves 2s linear",
                            "-webkit-animation-fill-mode": "forwards",
                        });
                        vivoshowbg();
                },300)
            }
        },1000)
    }
    show1();
    var  b = 0;
    function vivoshowbg() {
        setTimeout(function() {
            b++;
            if (b%3==0) {
                $("#yifu").attr({src:"imgs/super_body1.png"});
            }else if (b%3==1) {
                $("#yifu").attr({src:"imgs/super_body2.png"});
            }else if (b%3==2) {
                $("#yifu").attr({src:"imgs/super_body3.png"});
            };
            if(b>=18){
                vivophoneshow();
                setTimeout(qiuhide,2000);
                setTimeout(function(){
                    $(".phone").hide();
                    $(".suipian").show();
                },3000);
                //让动画调用一次
                if(b==18){
                    setTimeout(splitsp,6000);

                }
            }else if(b>=10){
                $(".vivomove").css({
                    "-webkit-animation": "vivomoves2 3s linear",
                });
                vivoshowbg();
            }
            vivoshowbg();
        },500)
    }
    function vivophoneshow(){
        $('#pages1 .info .phone').css({
            "-webkit-transition": "1s",
            "-webkit-animation": "vivophoneshow 2s linear ",
            "-webkit-animation-fill-mode": "forwards",
        });
    }
    //小球消失
    function qiuhide(){
        $("#pages1 .info .img1 img ").hide();
        $("#pages1 .info .img2 img ").hide();
        $("#pages1 .info .img3 img ").hide();
        $("#pages1 .info .img4 img ").hide();
    }
    //碎片爆炸
    function splitsp(){
        $("#pages1 .info .suipian .sp1").css({
            "-webkit-transition": "1s",
            "-webkit-animation": "sp1move 5s linear ",
            "-webkit-animation-fill-mode": "forwards",
        });
        $("#pages1 .info .suipian .sp2").css({
            "-webkit-transition": "1s",
            "-webkit-animation": "sp2move 5s linear ",
            "-webkit-animation-fill-mode": "forwards",
        });
        $("#pages1 .info .suipian .sp3").css({
            "-webkit-transition": "1s",
            "-webkit-animation": "sp3move 5s linear ",
            "-webkit-animation-fill-mode": "forwards",
        });
        $("#pages1 .info .suipian .sp4").css({
            "-webkit-transition": "1s",
            "-webkit-animation": "sp4move 5s linear ",
            "-webkit-animation-fill-mode": "forwards",
        });
        $("#pages1 .info .suipian .sp5").css({
            "-webkit-transition": "1s",
            "-webkit-animation": "sp5move 5s linear ",
            "-webkit-animation-fill-mode": "forwards",
        });
        $("#pages1 .info .suipian .sp6").css({
            "-webkit-transition": "1s",
            "-webkit-animation": "sp6move 5s linear ",
            "-webkit-animation-fill-mode": "forwards",
        });
        $("#pages1 .info .suipian .sp7").css({
            "-webkit-transition": "1s",
            "-webkit-animation": "sp7move 5s linear ",
            "-webkit-animation-fill-mode": "forwards",
        });
        $("#pages1 .info .suipian .sp8").css({
            "-webkit-transition": "1s",
            "-webkit-animation": "sp8move 5s linear ",
            "-webkit-animation-fill-mode": "forwards",
        });
        setTimeout(function() {
            $("#pages1 .info .suipian").css("background","none");
            $("#pages1 .info .suipian .sp1 .head1").show();
            $("#pages1 .info .suipian .sp2 .head1").show();
            $("#pages1 .info .suipian .sp3 .head1").show();
            $("#pages1 .info .suipian .sp4 .head1").show();
            $("#pages1 .info .suipian .sp5 .head1").show();
            $("#pages1 .info .suipian .sp6 .head1").show();
            $("#pages1 .info .suipian .sp7 .head1").show();
            $("#pages1 .info .suipian .sp8 .head1").show();
            $("#pages1 .info .planet").show();
            planetMove();
            footerMove();
            $("#pages1").on('click',function(){
                $("#pages1").hide();
                $("#pages2").show();
                setTimeout(function(){
                    $("#pages3").show();
                    var find=$('.find');
                    var fw=$('.find').width()*1.07;
                    find.height(fw);
                    game();
                },1000);
            })
        },1800);
    }
    //星球动画
    function planetMove(){
        for (var i = 0; i < 8; i++) {
            var num=random(3,5);
            $("#pages1 .info .planet img").eq(i).css({
                "-webkit-transition": "1s",
                "-webkit-animation": "planetMove "+ num+"s linear  infinite",
            });
        }
    }
    function footerMove(){
        $("#pages1 footer ").show();
        $("#pages1 footer ").css({
            "-webkit-transition": "1s",
            "-webkit-animation": "footerMove 2s linear  infinite",
        });
    }


//游戏
var find=$('.find');
var fw=$('.find').width()*1.07;
find.height(fw);
var find1=$(".find1");
var num=2;
var count=0;
var gameloop=0;
var zheng=null;
var a = 30;
var time;
var textnum=0;
var texttimer=null;
function game(){
    find=$('.find');
    fw=$('.find').width()*1.07;
    find.height(fw);
    find1=$(".find1");
    num=2;
    count=0;
    gameloop=0;
    zheng=null;
    a = 30;
    time;
    textnum=0;
    texttimer=null;
    //点击谈碎片
    daojishi();
    function daojishi() {
        if (time) {
            clearInterval(time)
        }
        time = setInterval(function() {
            a-=0.01;
            a=a.toFixed(2);
            $(".find h1").html(a);
            if (a<=0) {
                clearInterval(time);

                time=null;
                $("#audio1").attr({"src":"media/闯关失败页-out音效(节).wav"});
                $("#audio1").get(0).loop=false;
                $("#pages4").show();
                $("#pages4 .info4 .prue").hide();
                $("#pages4 .info4 .prue1").show();
            }
        },16);
    }
    $("#pages4 .info4 .prue1 .main .span1").click(function(){
        clearInterval(time);
        $("#pages4").hide();
        $("#pages4 .info4 .prue1").hide();
         num=2;
         count=0;
         gameloop=0;
         zheng=null;
         a = 30;
         time;
         $("#pages3 .info3 h3").html("第一关&nbsp;&nbsp;&nbsp;水星");
        daojishi();
        add();
    })
    function add(){
        find1.html("");
        var w=((find1.get(0).clientWidth)/num);
        for (var i = 0; i < num; i++) {
            for (var j = 0; j < num; j++) {
                var span = $("<span></span>");
                span.css({
                    "width":w+'px',
                    "height":w+'px',
                    "left":i*w+'px',
                    "top":j*w+"px",
                });
                find1.append(span);
            }
        }
        var spans = $('span');
        var random1 = parseInt(Math.random()*num*num);
        spans.eq(random1).addClass('zheng');
        if (gameloop==5||gameloop==6) {
            var aaa = $("span").length;
            var num1 = random(0,aaa,random1);
            var num2 = random(0,aaa,random1);
            var num3 = random(0,aaa,random1);
            spans.eq(num1).addClass('tietou');
            spans.eq(num2).addClass('tietou');
            spans.eq(num3).addClass('tietou');
        }
        zheng = $('.zheng');
        zheng.click (function(){
            count++;
            gameloop++;
            $("#pages4").show();
            $("#pages4 .prue ").show();
            var sp=$(".prue").width()*1.3;
            $(".prue").height(sp);
            $("h2").html("您获得了"+count+"/8个碎片");
            clearInterval(time);
            time=null;
            if(count==8){
                console.log(count,a);
                clearInterval(time);
                $("#pages3").hide();
                $("#pages4").hide();
                $("#pages4 .prue1").hide();
                $("#pages5").show();
                function textshow(){
                    $("#pages5").show();
                    $("#pages5 .info5 .text1 ").show()
                   $("#pages5 .info5 .heti").show();
                    var bbbbbb=setTimeout(function(){

                   $("#pages5 .info5 .text1 p").eq(textnum).show();
                        textnum++;
                        console.log(textnum);
                        if (textnum<6) {
                            textshow();
                        }
                        if (textnum==6) {
                            clearTimeout(bbbbbb);
                            setTimeout(function(){
                                $("#pages5 .info5 .text1 p").hide();
                                $(".hetis").show();
                                for (var i = 1; i < 9; i++) {
                                    if (i==5) {
                                        $(".heti .heti"+i+"").css({
                                            '-webkit-animation':'heti'+i+'move 3s linear',
                                            '-webkit-animation-fill-mode': 'forwards',
                                            '-webkit-transform': 'rotate(-180deg)',
                                        })
                                    }else {
                                        $(".heti .heti"+i+"").css({
                                            '-webkit-animation':'heti'+i+'move 3s linear',
                                            '-webkit-animation-fill-mode': 'forwards',
                                        })
                                    }
                                }
                                setTimeout(function(){
                                    $("#pages5 .info5 .heti").hide();
                                    $("#pages5 .info5 .hetisucc").show();
                                },4000);

                            },6000);
                            textnum=0;
                            clearTimeout(bbbbbb);
                    }
                },1000);
                }
                textshow();
            }
            setTimeout(function() {
                time = setInterval(function() {
                    a-=0.01;
                    a=a.toFixed(2);
                    $(".find h1").html(a);
                    if (num>=8) {
                        clearInterval(time);
                    }
                    if (a<=0) {
                        clearInterval(time);
                        $("#audio1").attr({"src":"media/闯关失败页-out音效(节).wav"});
                        $("#audio1").get(0).loop=false;
                        $("#pages4").show();
                        $("#pages4 .info4 .prue").hide();
                        $("#pages4 .info4 .prue1").show();

                        }
                    },16)
                    $("#pages4").hide();
                    $("#pages4 .info4 .prue").hide();
                },300);
            num++;
            suc(gameloop);
            add();
        });
    }
    add();
}
function suc(gameloop) {
    if (gameloop==1) {
        $("#pages3 .info3 h3").html("第二关&nbsp;&nbsp;&nbsp;金星");
    }else if(gameloop==2){
        $("#pages3 .info3 h3").html("第三关&nbsp;&nbsp;&nbsp;地球");
    }else if(gameloop==3){
        $("#pages3 .info3 h3").html("第四关&nbsp;&nbsp;&nbsp;火星");
    }else if(gameloop==4){
        $("#pages3 .info3 h3").html("第五关&nbsp;&nbsp;&nbsp;木星");
        num=5;
    }else if(gameloop==5){
        $("#pages3 .info3 h3").html("第六关&nbsp;&nbsp;&nbsp;土星");
        num=6;
    }else if(gameloop==6){
        $("#pages3 .info3 h3").html("第七关&nbsp;&nbsp;&nbsp;天王星");
        num=6;
    }else if(gameloop==7){
        $("#pages3 .info3 h3").html("第八关&nbsp;&nbsp;&nbsp;海王星");
        num=7;
    }else if(gameloop>=8){
        clearInterval(time);
        return;
    }
}
function random(min,max, not) {
       var res = parseInt(Math.random() * (max - min + 1) + min);
       if (not != undefined) {
           if (not == res) {
              return random(max,min, not);
           }
       }
       return res;
}
   $("#pages5 .info5 .hetisucc .check").click(function(){
       $("#pages5 .info5 .hetisucc").hide();
        $("#pages5 .info5 .loose ").show();
   });

   $("#pages5 .hetisucc .mas ").click(function(){
        $("#pages6").show();
   })

   $("#pages5 .info5 .loose .main .span1").click(function(){
       clearInterval(time);
       time=null;
       $("#pages5").hide();
       $("#pages3 ").show();
       $(".hetis").hide();
       $("#pages3 .find").show();
       fw=$('.find').width()*1.07;
       find.height(fw);
        num=2;
        count=0;
        gameloop=0;
        zheng=null;
        a = 30;
        time;
        $("#pages3 .info3 h3").html("第一关&nbsp;&nbsp;&nbsp;水星");
        $("#pages5 .info5 .loose").hide();
       game();
   });

   $("#pages6 .info6 img").click(function(){
       $("#pages6").hide();
   });

   $("#pages5 .hetisucc .mas ").click(function(){
        $("#pages6").show();
        var wrapper = $('#pages6 .info6 .gametext').get(0);
            var myScroll = new IScroll(wrapper, {
                mouseWheel: true,
                disableMouse: true,
                disablePointer: true,
                scrollbars: 'custom',
                resizeScrollbars:false,
                // snap: true,
             //    preventDefault: false,
             //    fadeScrollbars: true,
                // keyBindings: {
                //     pageUp: 33,
                //     pageDown: 34,
                //     end: 35,
                //     home: 36,
                //     left: 37,
                //     up: 38,
                //     right: 39,
                //     down: 40
                // }
            // myScroll.destroy();
            // myScroll = null;
        });
   })
   function resdraw() {
            $(".pages7").show();
            var res = Math.random();
            if (res>=0.9) {
                $(".draw").html("<h2>恭喜你获得</h2><p>vivo X5pro一台</p><span class='nameinput'>姓名<input type='text'></span><span class='phoninput'>手机号码<input type='text'></span><strong class='tijiao'>提交信息</strong>");
            }else if (res>=0.8) {
                $(".draw").html("<h2>恭喜你获得</h2><p>港囧电影票一套</p><span class='nameinput'>姓名<input type='text'></span><span class='phoninput'>手机号码<input type='text'></span><strong class='tijiao'>提交信息</strong>");
            }else if (res>=0.7) {
                $(".draw").html("<h2>恭喜你获得</h2><p>VIVO充电宝一个</p><span class='nameinput'>姓名<input type='text'></span><span class='phoninput'>手机号码<input type='text'></span><strong class='tijiao'>提交信息</strong>");
            }else if (res>=0.6) {
                $(".draw").html("<h2>恭喜你获得</h2><p>vivo 耳机一个</p><span class='nameinput'>姓名<input type='text'></span><span class='phoninput'>手机号码<input type='text'></span><strong class='tijiao'>提交信息</strong>");
            }else if (res>=0.5) {
                $(".draw").html("<h2>恭喜你获得</h2><p>签名剧照一张</p><span class='nameinput'>姓名<input type='text'></span><span class='phoninput'>手机号码<input type='text'></span><strong class='tijiao'>提交信息</strong>");
            }else {
                $(".draw").css("background","imgs/xuzheng_kuang.png");
                $(".draw h2").html("很遗憾");
                $(".draw p").html("你没有抽中奖品,再来一次吧!");
                $(".draw strong").html("返回游戏");
                $(".draw strong").on("click",function() {
                    $(".page8").hide();
                    $(".page9").hide();
                    a=30;
                    gameloop=0;
                    $(".items").html('<div class="headimg"><img src="imgs/baobei.png" alt="" /></div><div class="headimg"><img src="imgs/baobei.png" alt="" /></div><div class="headimg"><img src="imgs/baobei.png" alt="" /></div><div class="headimg"><img src="imgs/baobei.png" alt="" /></div>')
                    daojishi();
                })
            }
        }

});
