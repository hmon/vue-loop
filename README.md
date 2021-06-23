# VueLoop

A loop helper plugin inspired by Blade.


## Installation

### 1. Install
```
yarn add vue-loop-helper
# or
npm i vue-loop-helper --save
```

### 2. Plug-in
```js
import VueLoop from 'vue-loop-helper'

Vue.use(VueLoop)
```

### 3. Use in your components

```vue
<template>
  <div v-for='item in items'>
    {{ $loop.index }}
    {{ $loop.count }}
    {{ $loop.first }}
    {{ $loop.last }}
    {{ item }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          'foo',
          'bar',
          'baz'
        ]
      }
    }
  };
</script>
```

## Helpers

| Property         | Description                                            
|------------------|--------------------------------------------------------
| $loop.index     | The index of the current loop iteration (starts at 0). 
| $loop.iteration | The current loop iteration (starts at 1).              
| $loop.remaining | The iterations remaining in the loop.                  
| $loop.count     | The total number of items in the array being iterated. 
| $loop.first     | Whether this is the first iteration through the loop.  
| $loop.last      | Whether this is the last iteration through the loop.   
| $loop.even      | Whether this is an even iteration through the loop.    
| $loop.odd       | Whether this is an odd iteration through the loop.     
| $loop.depth     | The nesting level of the current loop.                 
| $loop.parent    | When in a nested loop, the parent's loop variable.     

### Credits

The implementation of this module is inspired by [Laravel](https://github.com/laravel/framework) ([Blade](https://github.com/laravel/framework/blob/8.x/src/Illuminate/View/Concerns/ManagesLoops.php))

## License
MIT