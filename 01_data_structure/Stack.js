//栈的构造函数
function Stack() {
    this.arr = [];
}
//入栈: push(ele)
Stack.prototype.push = function (ele) {
    this.arr.push(ele);
};
//查看栈顶元素: peek()
Stack.prototype.peek = function () {
    if(this.arr.length>0) {
        return this.arr[this.arr.length-1];     //返回数组的最后一个元素
    }
};
//出栈: pop()
Stack.prototype.pop = function () {
    if(this.arr.length>0) {
        return this.arr.pop();
    }
};
//清栈: clear()
Stack.prototype.clear = function () {
    if(this.arr.length>0) {
        this.arr = [];
    }
};
//大小: size()
Stack.prototype.size = function () {
    return this.arr.length;
};
//判断是否是空: isEmpty()
Stack.prototype.isEmpty = function () {
    return this.arr.length===0;
};