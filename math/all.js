define('Array/math/all', ['objects/extend'], function(extend) {
  
  extend(Array.prototype, {

    equals : function(a) {
      for (var i = this.length; i--; ) if (a[i] !== this[i]) return false;
      return true;
    },

    multiply : function(a) {
      var ret = [];
      if (typeof(a) === 'number') {
        for (var i = this.length; i--; ) {
          ret[i] = this[i] * a;
        }
      } else {
        for(var i = this.length; i--; ) {
            ret[i] = this[i] * a[i];
        }
      }
      return (ret);
    },

    divide : function(a) {
      var ret = [];
      if(typeof(a) === 'number') {
        for(var i = this.length; i--; ) {
          ret[i] = this[i]/a;
        }
      } else {
        for(var i = this.length; i--; ) {
            ret[i] = this[i] / a[i];
        }
      }
      return (ret);
    },

    minus : function(a) {
      var ret = [];
      if(typeof(a) === 'number') {
          for(var i = this.length; i--; )
          {
              ret[i] = this[i] - a;
          }
      }
      else
      {
          for(var i = this.length; i--; )
          {
              ret[i] = this[i] - a[i];        
          }
      }
      return (ret);
    },

    add : function(a) {
      var ret = [];
      if(typeof(a) === 'number') {
          for(var i = this.length; i--; )
          {
              ret[i] = this[i] + a;
          }
      } else {
        for(var i = this.length; i--; ) {
          ret[i] = this[i] + a[i];
        }
      }
      return (ret);
    },

    round : function() {
      for(var i = this.length; i--; ) {
        this[i] = Math.round(this[i]);
      }
      return (this);
    },

    orth : function(){
      if (this.length != 2){
        throw Error;
      }
      return [-this[1],this[0]];
    },

    norm : function() {
      return Math.sqrt(this.sum(function(i){return i*i}));
    }

  });

});
