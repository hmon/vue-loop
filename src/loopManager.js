function getCount(val) {
  if (Array.isArray(val) || typeof val === 'string') {
    return val.length
  } else if (typeof val === 'number') {
    return val
  } else if (val !== null && typeof val === 'object') {
    if (Symbol && val[Symbol.iterator]) {
      const iterator = val[Symbol.iterator]()
      const result = iterator.next()
      let count = 0
      while (!result.done) {
        count++
      }
      return count
    } else {
      return Object.keys(val).length
    }
  } else {
    return 0
  }
}

export default class LoopManager {
  loopsStack = []

  addLoop (data) {
    const length = getCount(data)

    if (length < 1) return

    const parent = this.loopsStack[this.loopsStack.length - 1] || null

    this.loopsStack.push({
      iteration: 0,
      index: 0,
      remaining: length,
      count: length,
      first: true,
      last: length === 1,
      odd: false,
      even: true,
      depth: this.loopsStack.length + 1,
      parent: parent,
    })
  }

  incrementLoopIndices() {
    let index = this.loopsStack.length - 1
    const loop = this.loopsStack[index]

    this.loopsStack[index] = Object.assign(this.loopsStack[index], {
      iteration: loop.iteration + 1,
      index: loop.iteration,
      first: loop.iteration == 0,
      odd: !loop.odd,
      even: !loop.even,
      remaining: loop.count ? loop.remaining - 1 : 0,
      last: loop.count ? loop.iteration == loop.count - 1 : false,
    })
  }

  popLoop() {
    this.loopsStack.pop()
  }

  getLastLoop() {
    let last
    if (last = this.loopsStack[this.loopsStack.length - 1]) {
      return last
    }
  }

  getLoopStack() {
    return this.loopsStack
  }
}