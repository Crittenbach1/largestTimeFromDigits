var digits = [0,9,0,0];

var largestTimeFromDigits = function (A) {
  var ans = [];
  for (var i = 0; i < 2; i++) {
    A.forEach(function callback(h1, index1, array) {
      A.forEach(function callback(h2, index2, array) {
        if (index1 != index2) {
          mins = []
          A.forEach(function callback(m, index3, array) {
            if (index3 != index1 && index3 != index2) {
              mins.unshift(m);
            }
          });
          var allMins = [mins[0] + "" + mins[1], mins[1] + "" + mins[0]];
          for (var j = 0; j < 2; j++) {
            if (allMins[j] < 60 && parseInt(h1 + "" + h2 + allMins[j]) < 2360) {
              ans.unshift(h1 + "" + h2 + allMins[j]);
            }
          }
        }
      });
    });
  };
  ans = ans.sort((b, a) => a - b)[0];
  return (ans == undefined) ? "" : ans[0] + ans[1] + ":" + ans[2] + ans[3];
};

largestTimeFromDigits(digits);
