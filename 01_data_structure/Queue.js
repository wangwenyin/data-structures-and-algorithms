//队列的构造函数
function Queue() {
    this.arr = [];
}

//加入队列: enqueue(ele)
Queue.prototype.enqueue = function (ele) {
    this.arr.push(ele);
};
//读取队列元素: first()
Queue.prototype.first = function () {
    if(this.arr.length>0) {
        return this.arr[0];
    }
};
//移除队列元素: dequeue()
Queue.prototype.dequeue = function () {
    if(this.arr.length>0) {
        return this.arr.shift();
    }
};
//清理队列: clear()
Queue.prototype.clear = function () {
    if(this.arr.length>0) {
        this.arr = [];
    }
};

//得到队列的大小: size()
Queue.prototype.size = function () {
    return this.arr.length;
};
//判断队列是否是空的: isEmpty()
Queue.prototype.isEmpty = function () {
    return this.arr.length===0;
};