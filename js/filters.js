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
  return function (input) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
    input = input.split(" ");
    var pigInput = input.map(function (word) {
      for (var i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) > -1) {
          return word.slice(i) + "-" + word.slice(0, i) +'ay';
        }
      }
    });
    return pigInput.join(" ");
  };
});

app.filter('redact', function () {
  return function(input, wordToReplace){
      input = input.replace(wordToReplace, 'REDACTED');
      return input;
  };
});
