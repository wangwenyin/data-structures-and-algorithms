
//冒泡排序
var bubbleSort = function (arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = len - 1; j > i; j--) {
      if (arr[j-1] > arr[j]) {
        swap(arr, j-1, j);
      }
    }
  }
};


function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}