function $(selector,context){
    context=context||document;  //或 有一个为真就行 如果上下文有那就赋给context 如果上下文没有就在document里找
    switch(selector.charAt(0)){
        case'#':
            return[document.getElementById(selector.substring(1))];
            break;
        case '.':
            return getByClass(selector.substring(1),context);
            break;
        default :
            return context.getElementsByTagName(selector);
            break;
    }
}

/**
 * 返回指定的元素的下一个元素兄弟
 * @param elem
 * return 指定的元素的下一个元素兄弟
 */
function next(elem){
    do{
        elem=elem.nextSibling ;
    }while(elem &&elem.nodeType !=1 );
    return elem;
}

/**
 * 返回指定的元素的前一个元素兄弟
 * @param elem
 * return 指定的元素的前一个元素兄弟

 */
function prev(elem){
    do{
        elem=elem.previousSibling;
    }while(elem &&elem.nodeType !=1 );
    return elem;
}

/**
 * 查找指定元素的第一个孩子节点
 * @param elem
 */
function first(elem){
    elem=elem.firstChild;  //先找一个孩子元素
    return elem&&elem.nodeType==1 ?elem :next(elem);
}

/**
 * 查找指定元素的最后一个孩子节点
 * @param elem
 */
function last(elem){
    elem=elem.lastChild;
    return  elem&&elem.nodeType==1 ? elem :prev1(elem);  //最后一个孩子都不是就找它前一个
}

/**
 * 获取当前元素样式
 * @param elem
 * @param attr
 * @return{*}
 */





/**
 * 在给定的当前元素的前面插入一个新元素
 * @param elem
 */
function before(elem, newNode) {
    elem.parentNode.insertBefore(newNode, elem);
}

//        before(oH1, oSpan);
/**
 * 在给定的当前元素的后面面插入一个新元素
 * @param elem
 * @param newNode
 */
function after(elem, newNode) {
    if(elem.nextSibling){
        before(elem.nextSibling, newNode);
    }else{
        elem.parentNode.appendChild(newNode);
    }
}

/**
 * 删除给定的元素
 * @param elem
 */
function remove(elem) {
    elem.parentNode.removeChild(elem);
}

/**
 * @param elem 当前元素
 * @return {Array} 返回当前元素的元素节点
 */
function siblings(elem) {
    var arr = [];
    var elements = elem.parentNode.children;
    for(var i=0; i<elements.length; i++){
        if(elements[i] != elem){
            arr.push(elements[i]);
        }
    }
    return arr;
}


/**
 * 1、firstchild有可能找到文本也有可能找到元素，现在要的就是元素
 *2、context 查找上下文 是为了缩小查找范围
 * 3、substring() 方法用于提取字符串中介于两个指定下标之间的字符
 * 提取下标是1的字符  substring(1)相当于aa
 */













