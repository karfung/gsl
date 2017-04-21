$('.menu1.dropdown').mouseover(function() {
    $(this).addClass('open'); $(this).children().attr("aria-expanded","true")   })
    .mouseout(function() {        $(this).removeClass('open'); $(this).children().attr("aria-expanded","false");   });

$(".dongtaiNav li").click(function(){
    $(".dongtaiNav li").removeClass('active');
    $("#tab div").removeClass("active");
    $(this).addClass('active');
    var index = $(".dongtaiNav li").index(this);
    $("#tab").children().removeClass("hidden");
    if(index==0){
        $("#zxgg").addClass("hidden");
    }else{
        $("#shdt").addClass("hidden");
    }
});

//当前图片第几张的参数
var slide = 0;
var page = $(".page").children("li");
var img = $(".imgNew");
var clone = $(".imgNew li").first().clone();
var title = $(".imgInfo").children("li");
img.append(clone);
//总共有几张图片
var lastSlide = $(".imgNew li:last-child").index();

//自动轮播
/*function auto(){
 $("#btn-right").trigger("click");
 }
 var autoSlide = setInterval(auto,6000);
 img.mouseout(function(){
 autoSlide = setInterval(auto,6000);
 });
 img.mouseover(function(){
 clearInterval(autoSlide)
 });*/

//向右滑动按钮的点击事件
$("#btn-right").click(function (){
    //清除下方选项按钮的active类
    $(".page").children(".active").removeClass("active");
    $(".imgInfo").children(".active").removeClass("active");

    //判断当前图片是否为最后一张，如果是最后一张则返回到第一张
    if(slide==lastSlide){
        img.css("left","0");
        slide = 1;
        page.eq(1).addClass("active");
        title.eq(1).addClass("active");
    }else if(slide == lastSlide-1){
        slide++;
        page.eq(0).addClass("active");
        title.eq(0).addClass("active");
    }
    else {
        slide++;
        page.eq(slide).addClass("active");
        title.eq(slide).addClass("active");
    }
    img.animate({left: -slide*600}, 1000);

});

//向左活动按钮的点击事件
$("#btn-left").click(function(){
    $(".page").children(".active").removeClass("active");
    $(".imgInfo").children(".active").removeClass("active");
    if(slide==0){
        img.css("left",-600*3);
        slide = 2;
        page.eq(2).addClass("active");
        title.eq(2).addClass("active");
    }else if(slide == 1){
        slide--;
        page.eq(0).addClass("active");
        title.eq(0).addClass("active");
    }
    else {
        slide--;
        page.eq(slide).addClass("active");
        title.eq(slide).addClass("active");
    }
    img.animate({left: -slide*600},1000);
});

//下方选项按钮的点击事件
$(".page li").click(function(){

    //获取点击后的当前页数
    var index = $(this).index();

    //封装需要改变的定位left参数
    var num = -Math.abs(index)*600;

    //清除和添加active类
    $(".page").children(".active").removeClass("active");
    $(".imgInfo").children(".active").removeClass("active");
    $(".page").children("li").eq(index).addClass("active");
    $(".imgInfo").children("li").eq(index).addClass("active");
    //自定义的滑动动画
    img.animate({left: num}, 1000);

    //重新赋值给当前页的参数
    slide = index;
});
