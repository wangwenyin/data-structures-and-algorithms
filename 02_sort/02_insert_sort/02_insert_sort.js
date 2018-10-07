
//插入排序
var insertSort = function (arr) {
  var len = arr.length, key;
  for (var i = 1; i < len; i++) {
    var j = i;
    key = arr[j];
    while (--j > -1) {
      if (arr[j] > key) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = key;
  }
};