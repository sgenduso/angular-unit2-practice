app.filter('kebab', function () {
  return function (input) {
    if (isNaN(input)) {
      return input.replace(/_/g, "-");
    } else {
      return input;
    }
  };
});

app.filter('camel', function () {
  return function (input) {
  if (isNaN(input)) {
    input.replace(/_/g, "-");
    input=input.split('-');
    for (var i = 1; i < input.length; i++) {
      input[i] = input[i].charAt(0).toUpperCase() + input[i].substr(1);
    }
    return input.join("");
  } else {
    return input;
  }
};
});

app.filter('pigLatin', function () {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return function (input) {
    input = input.split(" ");
    input.map(function (word) {
      
    })
  };
});
