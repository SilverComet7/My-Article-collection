setTimeout(() => {
  console.log('setTimeOut延迟执行')
}, 1000);

process.nextTick(function() {
  console.log('nextTick延迟执行')
});
setImmediate(function() {
  console.log('setImmediate延迟执行')
});
console.log("正常执行")
;
