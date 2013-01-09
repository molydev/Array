define('Array/onEls', function() {
  
  Array.prototype.onEls = function(f) { 
    for (var i = this.length; i--; ) this[i] = f(this[i]);
    return this;
  };
  
});
