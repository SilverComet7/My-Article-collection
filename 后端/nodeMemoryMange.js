// var a = []; for (var i = 0; i < 1000000; i++) a.push(new Array(100));

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
