// 计算index
var myIndex = function(list, key) {
    var low = 0;
    var high = list.length - 1;
    var mid;
    var result = -1; //查询的结果：索引值

    //不止一个数字
    while(low <= high){
        mid = parseInt((low + high) / 2); //找到中间的数字
        if(list[mid] === key){  //命中
            result = mid;
            break; //结束循环
        }else if (list[mid] < key){     //key 落在 mid 的右侧
            low = mid + 1;
        }else if (key < list[mid]){     //key 落在 mid 的左侧
            high = mid - 1;
        }
    }

    return result;
};

//可以使用测试数组测一下：
var list = [1,3,5,7,9];
var key = 8;

var result = myIndex(list, key);
console.log(result);