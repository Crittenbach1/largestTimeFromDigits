digits = [1, 5, 6, 7];

var largestTimeFromDigits = function (A) {
  var i = 0;
  var splits = [];
  var similar = [];
  function sortNumber(a, b) {
    return a - b;
  }


  while (i < 2369) {
    var num = i.toString().split("");
    while (num.length > 2) {
      num.shift();
    }
    if ((parseInt(num.join("")) > 59 && parseInt(num.join("")) < 100) != true) {
      addZeros = i.toString().split("");
      while (addZeros.length < 4) {
        addZeros.unshift('0');
      }
      splits.push([addZeros.sort(sortNumber), i.toString().split("")]);
    }
    i = i + 1;
  };

  var digitString = A.join("").split("").sort(sortNumber);

  splits.forEach(function (split) {
    if (split[0].join("") === digitString.join("")) {
      similar.push(parseInt(split[1].join("")));
    }
  });

  if (similar.length == 0) {
    return "";
  } else {
    solution = similar.sort(sortNumber).reverse()[0].toString().split("");
    while (solution.length < 4) {
      solution.unshift('0');
    };
    solution.splice(2, 0, ':');
    return solution.join("");
  }

};


largestTimeFromDigits(digits);
