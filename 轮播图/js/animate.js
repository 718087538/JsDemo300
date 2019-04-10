$(function(){

    var odiv = $(".featureBox").offset().top;   //元素超出顶部高度
    var clientH =  $(window).height();   //可视区高度

    console.log("元素距离顶部的距离是:"+odiv);
    console.log("滚动的高度是:"+$(window).scrollTop());
    console.log("可视区域的高度是:"+clientH);
    $(window).scroll(function(){

        if( odiv < clientH + $(window).scrollTop()){
            $(".featureBox").addClass("animated fadeInUp")
        };
    // 小程序行业
     var info=$(".infoBox3 .info").offset().top;
     var imgBox = $(".example .imgBox").offset().top;
        if(info< clientH + $(window).scrollTop()){$(".infoBox3 .info").addClass("animated fadeInUp")}
        if(imgBox< clientH + $(window).scrollTop()){$(".example .imgBox span").addClass("animated fadeInUp")}

     // 小程序案例展示
     var info=$(".infoBox4 .info").offset().top;
     if(info< clientH + $(window).scrollTop()){$(".infoBox4 .info").addClass("animated fadeInUp")}

     //虎超小程序全网价值定制
     var info=$(".infoBox5 .info").offset().top;
     if(info< clientH + $(window).scrollTop()){$(".infoBox5 .info").addClass("animated fadeInUp")}
     //营销裂变
     var info=$(".infoBox6 .info").offset().top;
     if(info< clientH + $(window).scrollTop()){$(".infoBox6 .info").addClass("animated fadeInUp")}
     var info=$(".infoBox6 .sale").offset().top;
     if(info< clientH + $(window).scrollTop()){$(".infoBox6 .sale").addClass("animated fadeInUp")}

    });
})