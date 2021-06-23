import LoopManager from './loopManager'

export default class VueLoop {
  static installed = false

  static install (Vue) {
    const isDev = process.env.NODE_ENV !== 'production'

    if (VueLoop.installed && Vue) {
      if (isDev) {
        console.warn(
          '[vue-loop] already installed. Vue.use(VueLoop) should be called only once.'
        )
      }
      return
    }

    Vue.mixin({
      /**
       * VueLoop init hook, injected into each instances init hooks list.
       */
      beforeCreate () {
        Vue.mixin({
          beforeCreate() {
            this.$loopManager = new LoopManager()
            Object.defineProperty(this, '$loop', {
              get() {
                return this.$loopManager.getLastLoop()
              }
            })
          }
        })
      }
    })

    Vue.prototype._l = function(val, render) {
      this.$loopManager.addLoop(val)
      return renderList(val, (v, i) => {
        this.$loopManager.incrementLoopIndices()
        const loop = this.$loopManager.getLastLoop()
        let ret = render(v, i)
        if (loop.last) {
          this.$loopManager.popLoop()
        }
        return ret
      })
    }

    VueLoop.installed = true
  }
}
