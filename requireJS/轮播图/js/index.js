require(["jquery-1.11.2","carousel"],function($,Carousel){

        var imgs1=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
        var setting1={
            selector : "#container",
            imgArr : imgs1,
            speed:500,
            buttonStyle:"square",//circle
            arrowsPos:"bottom"//center
        };//������

        var carousel1=new Carousel(setting1);
        carousel1.init();//init�ķ�������ʾ��ʼ��
});
//����ģ��һ��Ҫ��define
//setting1 ʵ��
