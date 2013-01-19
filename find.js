define('Array/find', function() {
  
  Array.prototype.find = function(f) {
    for (var i = 0,n=this.length;i<n;i++) {
      if (f(this[i], i)) return this[i];
    }
  };
  
});
