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
                var nowIndex=0;
                this.$container.append(this.$imgs).append(this.$nav).append(this.$arrows);
                this.$arrows.append(this.$left).append(this.$right);
                for(var i=0;i< this.defaultSettings.imgArr.length;i++){
                this.$imgs.append("<img src='"+ this.defaultSettings.imgArr[i] +"'>");
                    this.$nav.append("<li>"+ (i+1) +"</li>");
                }
                $("img",this.$imgs).eq(0).addClass("selected");//��imgs����img����С��Χ
                $("li",this.$nav).eq(0).addClass("selected");
                $(this.defaultSettings.selector).append(this.$container);
                //�¼�
                $(".carousel-nav li").on("mouseover",function(){
                    nowIndex=$(this).index();
                    changeImg();
                    $(this).addClass("selected").siblings().removeClass("selected");
                    $(".carousel-imgs img").eq(nowIndex).addClass("selected").siblings().removeClass("selected");
                });
                this.$left.on("click",function(){
                    nowIndex--;
                    if(nowIndex == -1){
                        nowIndex=this.defaultSettings.imgArr.length-1;
                    }
                    changeImg();
                }.bind(this));
                this.$right.on("click",function(){
                    nowIndex++;
                    if(nowIndex ==this.defaultSettings.imgArr.length ){
                        nowIndex=0;
                    }
                    changeImg();
                }.bind(this));

                this.$container.hover(function(){
                    clearInterval(timer);
                },function(){
                    setInterval(function(){
                        this.$right.trigger("click");//trigger��ģ���¼��Ĵ���
                    }.bind(this),this.defaultSettings.speed);
                }.bind(this ));//һ����껮�� һ����껮��
                //��д���bind this֮ǰ�����this--->this.$container,�ͱ��container�µ�right�ˣ������ͱ�����

                var timer=setInterval(function(){
                    this.$right.trigger("click");//trigger��ģ���¼��Ĵ���
                }.bind(this),this.defaultSettings.speed); //����bind֮ǰ��thisָ�����window

                //˽�з��� ֻ������������õ�
                function changeImg(){
                    $(".carousel-nav li").eq(nowIndex) .addClass("selected").siblings().removeClass("selected");
                    $(".carousel-imgs img").eq(nowIndex).addClass("selected").siblings().removeClass("selected");
                }


            };return Carousel;
});
//��������Ҫ�����ţ����Ǳߵ��ò�������
//setting �β�
//forѭ�� ��Ҫ�ַ���

