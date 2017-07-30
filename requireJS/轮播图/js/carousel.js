requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});//config配置
define(["jquery"],function($){
        function Carousel(settings){
            this.defaultSettings={
                selector : document.body,//位置不传
                imgArr : [],//没有默认图片，就是空
                speed:500,
                buttonStyle:"square",//circle
                arrowsPos:"bottom"//center
            };//默认属性等于一个对象
            $.extend(this.defaultSettings,settings);//合并
            this.$container=$('<div class="carousel-container"></div>');
            this.$imgs=$('<div class="carousel-imgs"></div>');
            this.$nav=$('<ul class="carousel-nav"></ul>');
            this.$arrows=$('<div class="carousel-arrows"></div>');
            this.$left=$('<div class="carousel-left">&lt;</div>');
            this.$right=$('<div class="carousel-right">&gt;</div>');
        }
            Carousel.prototype.init=function(){
                this.$container.append(this.$imgs).append(this.$nav).append(this.$arrows);
                this.$arrows.append(this.$left).append(this.$right);
                for(var i=0;i< this.defaultSettings.imgArr.length;i++){

                }
            };
     return Carousel;
});
//声明不需要加括号，在那边调用才用括号
//setting 形参

