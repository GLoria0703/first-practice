requirejs.config({
    paths:{
        jquery:'jquery-1.11.2'
    }
});
define(["jquery"],function($){
        //��������
    function Dialog(settings){
        this.defaultSettings={
            width:500,
            height:400,
            title:"������",
            content:""
        };
        $.extend(this.defaultSettings,settings);
        this.$container = $('<div class="dialog-container"></div>');
        this.$mask = $('<div class="dialog-mask"></div>');
        this.$box = $('<div class="dialog-box"></div>');
        this.$title = $('<div class="dialog-title"></div>');
        this.$item = $('<div class="dialog-title-item"></div>');
        this.$close = $('<div class="dialog-title-close">[X]</div>');
        this.$content = $('<div class="dialog-content"></div>');
    }
    Dialog.prototype.open=function(){
        this.$container.append(this.$mask).append(this.$box).appendTo(document.body);
        this.$box.append(this.$title).append(this.$content);
        this.$title.append(this.$item).append(this.$close);
        this.$box.css({
            width:this.defaultSettings.width,
            height:this.defaultSettings.height
        });
        this.$item.html(this.defaultSettings.title);
        if(this.defaultSettings.content.indexOf(".html")!=-1){
            $(this.$content).load(this.defaultSettings.content);
        }else{
            $(this.$content).html(this.defaultSettings.content);
        }
        this.$close.on("click",function(){
            //this.$container.remove();
            this.close();
        }.bind(this));
    };
    Dialog.prototype.close=function(){
        this.$container.remove();
    };
    return Dialog;
    });
