(function(){
    var oSmallPic=document.getElementById("small-pic");
    var aSmallImgs=oSmallPic;
-    .getElementsByTagName("img");
    var oBigPic=document.getElementById("big-pic");
    var oBigImg=oBigPic.getElementsByTagName("img")[0];
    for(var i=0;i<aSmallImgs.length;i++){
        aSmallImgs[i].onclick=function(){
            oBigImg.src=this.src;
        };

    }


})();
