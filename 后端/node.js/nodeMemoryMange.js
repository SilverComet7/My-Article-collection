
var bar = function () {
  var local = "局部变量";
  return function () {
    return local;
  };
};
var baz = bar();
console.log(baz());

setTimeout(() => {
  console.log(baz());
}, 1000);
