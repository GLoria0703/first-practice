requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});//config����
define(["jquery"],function($){
        function Carousel(settings){
            this.defaultSettings={
                selector : document.body,//λ�ò���
                imgArr : [],//û��Ĭ��ͼƬ�����ǿ�
                speed:500,
                buttonStyle:"square",//circle
                arrowsPos:"bottom"//center
            };//Ĭ�����Ե���һ������
            $.extend(this.defaultSettings,settings);//�ϲ�
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
//��������Ҫ�����ţ����Ǳߵ��ò�������
//setting �β�

