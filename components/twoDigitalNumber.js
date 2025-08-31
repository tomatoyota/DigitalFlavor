import { Group } from 'three'
import DigitalNumber from './digitalNumber'

// export default class TwoDigitalNumber {
//   constructor() {
//     this.init()
//     this.update(0)
//   }

//   init() {
//     this.first = new DigitalNumber()
//     this.second = new DigitalNumber()
//     this.first.group.position.set(-1.2, 0, 0)
//     this.second.group.position.set(1.2, 0, 0)
//     this.group = new Group()
//     this.group.add(this.first.group)
//     this.group.add(this.second.group)
//   }

//   update(number) {
//     console.log('Updating TwoDigitalNumber with:', number)
//     if (number >= 100) {
//       throw new Error('number should be less than 100')
//     } else {
//       const firstNumber = Math.floor(number / 10)
//       const secondNumber = Math.floor(number % 10)
//       console.log('First number:', firstNumber, 'Second number:', secondNumber)
//       this.first.number = firstNumber
//       this.second.number = secondNumber
//     }
//   }
// }

export default class TwoDigitalNumber {
  constructor() {
    this.init()
    this.update(0)
  }

  init() {
    this.first = new DigitalNumber()
    this.second = new DigitalNumber()
    this.first.group.position.set(-1.2, 0, 0)
    this.second.group.position.set(1.2, 0, 0)
    this.group = new Group()
    this.group.add(this.first.group)
    this.group.add(this.second.group)
  }

  update(number) {
    // console.log('Updating TwoDigitalNumber with:', number)
    if (number >= 100 || number < 0) {
      throw new Error('number should be between 0 and 99')
    } else {
      const firstNumber = Math.floor(number / 10)
      const secondNumber = Math.floor(number % 10)
      // console.log('First number:', firstNumber, 'Second number:', secondNumber)
      this.first.number = firstNumber
      this.second.number = secondNumber
    }
  }
}
