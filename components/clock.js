import { Group, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three'
import TwoDigitalNumber from './twoDigitalNumber'

export default class DigitalClock {
  constructor() {
    // create numbers
    this.initNumbers()
    this.initDots()
    // create dots
  }

  // updateTimeFunction()

  update() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    this.hour.update(hours)
    this.minutes.update(minutes)
    this.seconds.update(seconds)
  }

  initNumbers() {
    this.hour = new TwoDigitalNumber()
    this.minutes = new TwoDigitalNumber()
    this.seconds = new TwoDigitalNumber()
    this.hour.group.position.set(-6, 0, 0)
    this.seconds.group.position.set(6, 0, 0)
    this.group = new Group()
    this.group.add(this.hour.group)
    this.group.add(this.minutes.group)
    this.group.add(this.seconds.group)
  }

  initDots() {
    const dotGeometry = new PlaneGeometry(0.3, 0.3)
    const material = new MeshBasicMaterial({
      // color: 0xffffff,
      color: 0xff0000,
    })
    const dot = new Mesh(dotGeometry, material)

    const dot1 = dot.clone()
    dot1.position.set(-4, 0.8, 0)
    const dot2 = dot.clone()
    dot2.position.set(-4, -0.8, 0)

    const dot3 = dot.clone()
    dot3.position.set(4, 0.8, 0)
    const dot4 = dot.clone()
    dot4.position.set(4, -0.8, 0)

    this.group.add(dot1, dot2, dot3, dot4)
  }
}
