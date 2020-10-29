/******************
 * YOUR CODE HERE *
 ******************/
/*
  changeToInitials,
  doubleEveryOther,
*/
const onlyOdds = function(arrays) {
  oddOnly = arrays.filter(function(array) {
  return array % 2 === 1;
  });
  return oddOnly;
}

const onlyEvens = function(arrays) {
  evenOnly = arrays.filter(function(array) {
    return array % 2 === 0;
  });
  return evenOnly; 
};

const shortNamesOnly = function(arrays) {
  onlyShortNames = arrays.filter(function(array) {
    return array.length < 7;
  });
  return onlyShortNames;
}

const sNames = function(arrays) {
  onlySNames = arrays.filter(function(array) {
    return array.startsWith('S');
  });
  return onlySNames;
};

const tripleAll = function(arrays) {
  tripled = arrays.map(function(array) {
    return array * 3;
  });
  return tripled;
};

const negativeValues = function(numbers) {
  makeNegative = numbers.map(function(number) {
    return Math.abs(number) * -1 || 0;
  });
  return makeNegative;  
};

const questionings = function(strs) {
  exclaimed = strs.map(function(str) {
    return str + '?';
  });
  return exclaimed;
};

const changeToInitials = function(strs) {
  justInitials = strs.map(function(str) {
    return str.charAt(0) + str[str.indexOf(' ') + 1];
  });
  return justInitials;
};

const doubleEven = function(nums) {
  evenDoubled = nums.map(function(num) {
    if (num % 2 === 0) {
      return num * 2; 
    } else {
      return num;
    }
  });
  return evenDoubled;
};
const titleCaseNames = function(names) {
  titleCase = names.map(function(name) {
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
  });
  return titleCase;
};

const doubleEveryOther = function(numbers) {
  everyOther = numbers.map(function(num, elem) {
      return elem % 2 === 1 ? num * 2 : num;
    }); 
    return everyOther;
};
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof sNames === 'undefined') {
  sNames = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
  tripleAll,
  negativeValues,
  questionings,
  changeToInitials,
  doubleEven,
  titleCaseNames,
  doubleEveryOther,
}
