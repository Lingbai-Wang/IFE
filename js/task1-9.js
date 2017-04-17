window.onload=function(){
    var container=document.getElementById('animate-container');
    var list=container.getElementsByClassName('list')[0];
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var animated=false;//表示当前是否正在执行切换，默认否
    var timer;//辅助play()和stop()
    /*play()和stop()控制图片自动播放和停止*/
    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 300);//相当于每300毫秒点一次右侧按钮
        /*另一种方法*/
        /*timer = setTimeout(function () {
            next.onclick();
            play();
        }, 300);*/
    }
    play();
    function stop() {
        clearInterval(timer);
        /*另一种方法*/
        /*clearTimeout(timer);*/
    }
    container.onmouseover=stop;
    container.onmouseout=play;
    prev.onmouseover=stop;
    prev.onmouseout=play;
    next.onmouseover=stop;
    next.onmouseout=play;
    /*下面注释的函数直接切换图片，无等待时间*/
    /*
    function animate(offset){
        var newLeft=parseInt(list.style.left)+offset;
        list.style.left=newLeft+"px";
        if(newLeft>-600){
            list.style.left=-3000+"px";
        }
        if(newLeft<-3000){
            list.style.left=-600+"px";
        }
    }
    */
    /*animate函数传入偏移量，进行切换*/
    function animate(offset){
        animated=true;
        var newLeft=parseInt(list.style.left)+offset;
        var time=300;//理论位移总时间，不是真正的总时间，只是在抛开函数执行时间什么的之后，理论上的理想值，实际位移总时间大于理论位移总时间
        var interval=50;//小位移间隔的时间，在上条注释描述下，值越小，实际位移总时间越长，反之，值越大，实际位移总时间越小
        //interval越大，实际位移总时间就越接近理论位移总时间
        //interval应设置为可以被理论位移总时间除尽的数
        var speed=offset/(time/interval);//每次小位移量
        function go(){
            if(parseInt(list.style.left) != newLeft){
                list.style.left=parseInt(list.style.left)+speed+"px";
                setTimeout(go,interval);
            }
            else{
                if(newLeft>0){
                    list.style.left=-2622+"px";
                }
                if(newLeft<-3420){
                    list.style.left=-798+"px";
                }
                animated=false;
            }
        }
        go();
    }
    prev.onclick=function(){
        if(!animated){
            animate(114);
        }
    }
    next.onclick=function(){
        if(!animated){
            animate(-114);
        }
    }
}
