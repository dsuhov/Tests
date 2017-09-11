var array = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = new Set();

function counting(level, arr, count) {
  for (let i = 0; i < arr.length - level; i++) {
    if (level > 0) {
      counter(level-1, arr.slice(i+1), count+arr[i]);
    } else {
      sum.add(count+arr[i]);
    }
  }
}

counter(2, array, 0);
console.log(sum);

