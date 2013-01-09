Array.prototype augmentations in javascript
=================================

All helpers are atomised in AMD modules. You can use it for instance with require.js or almond.js.  

You can require juste one, such as map : 

```javascript
define('myModule', ['Array/map'], function() {
	
	[10,20].map(function(n) { return n * 2 }); // [20, 40]

});
```

Or group exists, such as `Array/basics`, `Array/math` or `Array/all`

### Basics
--------------------

Array/basics include the following :
* map
* collect 
* first
* has
* last
* onEls
* remove
* removeOneValue

#### Map
```javascript
	
	[10,20].map(function(n) { return n * 2 }); // [20, 40]

```

