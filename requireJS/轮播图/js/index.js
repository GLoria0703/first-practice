require(["jquery-1.11.2","carousel"],function($,Carousel){

        var imgs1=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
        var setting1={
            selector : "#container",
            imgArr : imgs1,
            speed:500,
            buttonStyle:"square",//circle
            arrowsPos:"bottom"//center
        };//配置项

        var carousel1=new Carousel(setting1);
        carousel1.init();//init的方法，表示初始化
});
//定义模块一定要用define
//setting1 实参
