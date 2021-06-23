import { PluginFunction } from 'vue'

export default class VueLoop {
  static install(): PluginFunction<any>
}

type LoopType = {
  index: number
  iteration: number
  remaining: number
  count: number
  first: boolean
  last: boolean
  odd: boolean
  even: boolean
  depth: number
  parent: LoopType | null
}

declare module 'vue/types/vue' {
  interface Vue {
    $loop: LoopType
  }
}
