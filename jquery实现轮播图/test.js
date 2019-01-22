<script type="text/javascript">
    /*i表示当前图片的下标和当前圆点的下标（图片和圆点是对应关系）*/
    var i = 0;
    var timer;
    $(function(){
        /*Step 2： 鼠标移入小圆点的时候，首先清除定时器，找到当前圆点的索引，改变当前显示的图片，使其变换成圆点对应的图片，当前圆点变换样式*/
        $("b").hover(function(){
            clearInterval(timer);
            i = $(this).index();
            change();
        }, function(){
            /*鼠标移出的时候，重新启动定时器*/
            start();
        });
    });

</script>
