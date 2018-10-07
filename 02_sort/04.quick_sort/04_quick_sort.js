//快速排序
var quickSort = function(arr, left, right) {
  var i, j, temp, pivot;       //pivot  ['pɪvət] n. 中心点  起到标杆的作用
  if (left >= right) {  //如果输入不合理直接退出
    return;
  }
  pivot = arr[left];  //选择标杆
  i = left;           //确定 左侧 指针的位置
  j = right;          //确定 右侧 指针的位置
  while (i != j) {
    while (arr[j] >= pivot && i < j) {  // j 从右向左跑
      j--;
    }
    while (arr[i] <= pivot && i < j) {  // i 从左向右跑
      i++;
    }
    if (i < j) {    //交换
      t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
  }
  arr[left] = arr[j];
  arr[j] = pivot;
  quickSort(arr, left, i - 1);    //对左侧迭代
  quickSort(arr, i + 1, right);   //对右侧迭代
};