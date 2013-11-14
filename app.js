(function(){
  // (function(){
  //   console.log("ok");
  // }).call(this);
  var test = function(){
    console.log("ok");
  }
  return test();
}).call(this);
