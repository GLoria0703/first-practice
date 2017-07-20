function $(selector,context){
    context=context||document;  //�� ��һ��Ϊ����� ������������Ǿ͸���context ���������û�о���document����
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
 * ����ָ����Ԫ�ص���һ��Ԫ���ֵ�
 * @param elem
 * return ָ����Ԫ�ص���һ��Ԫ���ֵ�
 */
function next(elem){
    do{
        elem=elem.nextSibling ;
    }while(elem &&elem.nodeType !=1 );
    return elem;
}

/**
 * ����ָ����Ԫ�ص�ǰһ��Ԫ���ֵ�
 * @param elem
 * return ָ����Ԫ�ص�ǰһ��Ԫ���ֵ�

 */
function prev(elem){
    do{
        elem=elem.previousSibling;
    }while(elem &&elem.nodeType !=1 );
    return elem;
}

/**
 * ����ָ��Ԫ�صĵ�һ�����ӽڵ�
 * @param elem
 */
function first(elem){
    elem=elem.firstChild;  //����һ������Ԫ��
    return elem&&elem.nodeType==1 ?elem :next(elem);
}

/**
 * ����ָ��Ԫ�ص����һ�����ӽڵ�
 * @param elem
 */
function last(elem){
    elem=elem.lastChild;
    return  elem&&elem.nodeType==1 ? elem :prev1(elem);  //���һ�����Ӷ����Ǿ�����ǰһ��
}

/**
 * ��ȡ��ǰԪ����ʽ
 * @param elem
 * @param attr
 * @return{*}
 */





/**
 * �ڸ����ĵ�ǰԪ�ص�ǰ�����һ����Ԫ��
 * @param elem
 */
function before(elem, newNode) {
    elem.parentNode.insertBefore(newNode, elem);
}

//        before(oH1, oSpan);
/**
 * �ڸ����ĵ�ǰԪ�صĺ��������һ����Ԫ��
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
 * ɾ��������Ԫ��
 * @param elem
 */
function remove(elem) {
    elem.parentNode.removeChild(elem);
}

/**
 * @param elem ��ǰԪ��
 * @return {Array} ���ص�ǰԪ�ص�Ԫ�ؽڵ�
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
 * 1��firstchild�п����ҵ��ı�Ҳ�п����ҵ�Ԫ�أ�����Ҫ�ľ���Ԫ��
 *2��context ���������� ��Ϊ����С���ҷ�Χ
 * 3��substring() ����������ȡ�ַ����н�������ָ���±�֮����ַ�
 * ��ȡ�±���1���ַ�  substring(1)�൱��aa
 */













