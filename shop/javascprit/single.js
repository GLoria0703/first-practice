/**
 * Created by lenovo on 2017/6/18.
 */
(function(){
    var oSmallPic=document.getElementById("small-pic");
    var aSmallImgs=oSmallPic.getElementsByTagName("img");
    var oBigPic=document.getElementById("big-pic");
    var oBigImg=oBigPic.getElementsByTagName("img");
    var oLeft=document.getElementById("left");
    var oRight=document.getElementById("right");
    var nowIndex=0;
    for(var i= 0;i<<aSmallImgs.length; i++){
        aSmallImgs [i].index=i;
        aSmallImgs[i].onclick=function(){
            nowIndex=this.index;
            changeImg();
        }
    }
    oLeft.onclick=oRight.onclick=function(){
        if(this===oRight){
            nowIndex++;
            if(nowIndex==aSmallImgs.length){
                nowIndex=0;
            }
        }else{
            nowIndex--;
            if(nowIndex==-1){
                nowIndex=aSmallImgs.length-1;
        }
    }
        changeImg();
    };
    function changeImg(){
        oBigImg.src=aSmallImgs[nowIndex].src;
        for(var i=0;i<aSmallImgs.length;i++){
            aSmallImgs[i].className=""
        }
        aSmallImgs[nowIndex].className="selected";
        var left=0;//这段的意思是当点击图片，图片就往左边串一个；0表示的是第一张图片
        if(nowIndex==0){
            left=0;
        }else{
            left=1;
        }
         animate(oSmallPic,{
                left:-(aSmallImgs[0].offsetWidth+10)*left
            });
    }
})();