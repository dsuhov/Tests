'use strict'
  var sum = new Set();


function chooseBestSum(/*max distance*/ t, /*towns to visit*/ k, ls) {

  var max = 0;

  function counting(pass, arr, count) {
    if(pass > 0) {
      for (let i = 0; i < arr.length-pass; i++) {
        counting(pass-1, arr.slice(i+1), count+arr[i]);
      };
    } else {
      console.log(arr[0]);
      sum.add(count+arr[0]);
    };
  };

  counting(k-1, ls, 0);
  sum.forEach(function(a) {
      if(a>max && a <= t) max = a;
  });

  return max > 0 ? max : null;
};

var ts = [50, 55, 57, 58, 60];
console.log(chooseBestSum(174, 3, ts));
console.log(sum);
