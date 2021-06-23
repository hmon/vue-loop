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
import VueLoop from 'vue-loop'

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

## License
MIT