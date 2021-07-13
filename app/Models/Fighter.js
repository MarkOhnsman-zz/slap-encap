// SECTION Phase 1
// export class Fighter {
//   constructor(name, imgUrl) {
//     this.name = name
//     this.imgUrl = imgUrl
//     this.health = 100
//     this.hits = 0
//   }
// }


// SECTION Phase 2
export class Fighter {
  constructor(name, imgUrl, health, slap, punch, kick) {
    this.name = name
    this.imgUrl = imgUrl
    this.health = health
    this.hits = 0
    this.attacks = {
      slap,
      punch,
      kick
    }
  }
}
