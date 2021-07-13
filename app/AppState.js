import { Fighter } from "./Models/Fighter.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  // SECTION Phase 1
  // /** @type { Fighter } */
  // target = new Fighter('Zangif', 'https://www.fightersgeneration.com/np5/char/ssf2hd/zangief-hdstance.gif')

  // SECTION Phase 2
  /** @type {Fighter} */
  target = new Fighter('Zangif', 'https://www.fightersgeneration.com/np5/char/ssf2hd/zangief-hdstance.gif', 150, 4, 7, 3)

  /** @type {Fighter} */
  fighter = new Fighter('Ken', 'https://www.fightersgeneration.com/np5/char/ssf2hd/ken-hdstance.gif', 110, 2, 5, 8)

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
