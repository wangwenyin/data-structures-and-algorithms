
//选择排序
var selectSort = function (arr) {
  var min;
  for (var i = 0; i < arr.length-1; i++) {
    min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i != min) {
      swap(arr, i, min);
    }
     console.log(i+1, ": " + arr);
  }
};
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};