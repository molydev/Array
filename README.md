Javascript Array.prototype augmentations 
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

Array/basics provide the following :
* map
* collect 
* first
* has
* last
* onEls
* remove
* removeOneValue
* except
* exceptFn
* uniq
* equals

#### Map
```javascript
	[10,20].map(function(n) { return n * 2 }); // [20, 40]
```

#### Collect 
Such as map, but provide a useful tricks :
```javascript
	[{ name : 'cyril'}, { name : 'piercus'}].collect('name') // ['cyril', 'piercus']
```

### Send
Useful, allow you to call a method on each element of the array
```javascript
[{ callMe : function(arg) { console.log(arg)}}, { callMe : function() { console.log('world')}}].send('callMe', 'hello'); // log 'hello' and then 'world'
```
 
### Where
Return a new array with all found occurences

#### Find
Return the first found occurence wich evaluate to true

#### First 
Return array[0]

#### Has
Return true if instance has value 
```javascript
['cyril', 'piercus'].has('cyril'); // true
```

####  onEls
Replaces every element of this with f(element)

#### Remove
If found, the argument is removed from the array

### Last
Return the last element of the array

### Except
Return a new array without the element that are the same at the argument

### isIn

### Equals

#### Each

