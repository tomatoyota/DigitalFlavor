import {
  Uint32BufferAttribute,
  BufferGeometry,
  BufferAttribute,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
  Group,
} from 'three'

/** this class used for create a digital number group a */
// export default class DigitalNumber {
//   constructor() {
//     this.create()
//     this.lightSetting = this.createLightSetting()
//     this._number = 0
//   }

//   create() {
//     let points = new Float32Array([
//       -1, 0, 0, -0.9, 0.1, 0, -0.9, -0.1, 0, 1, 0, 0, 0.9, 0.1, 0, 0.9, -0.1, 0,
//     ])

//     let faceIndex = new Uint32BufferAttribute(
//       [0, 2, 1, 1, 2, 4, 2, 5, 4, 4, 5, 3],
//       1
//     )

//     let geometry = new BufferGeometry()
//     geometry.setIndex(faceIndex)
//     geometry.setAttribute('position', new BufferAttribute(points, 3))
//     geometry.computeVertexNormals()
//     geometry.normalizeNormals()

//     let normals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1])
//     geometry.setAttribute('normal', new BufferAttribute(normals, 3))

//     const mesh = new Mesh(
//       geometry,
//       new MeshBasicMaterial({
//         color: 0xccccff,
//         side: DoubleSide,
//       })
//     )
//     mesh.scale.y = 1.5

//     let top = mesh.clone()
//     top.position.set(0, 2, 0)

//     let leftTop = mesh.clone()
//     leftTop.position.set(-1, 1, 0)
//     leftTop.rotation.z = Math.PI / 2

//     let rightTop = mesh.clone()
//     rightTop.position.set(1, 1, 0)
//     rightTop.rotation.z = Math.PI / 2

//     let leftBottom = mesh.clone()
//     leftBottom.position.set(-1, -1, 0)
//     leftBottom.rotation.z = Math.PI / 2

//     let rightBottom = mesh.clone()
//     rightBottom.position.set(1, -1, 0)
//     rightBottom.rotation.z = Math.PI / 2

//     let bottom = mesh.clone()
//     bottom.position.set(0, -2, 0)

//     const group = new Group()
//     group.add(top, leftTop, rightTop, mesh, leftBottom, rightBottom, bottom)

//     this.group = group
//     return group
//   }

//   createLightSetting() {
//     let zero = [1, 1, 1, 0, 1, 1, 1]
//     let one = [0, 0, 1, 0, 0, 1, 0]
//     let two = [1, 0, 1, 1, 1, 0, 1]
//     let three = [1, 0, 1, 1, 0, 1, 1]
//     let four = [0, 1, 1, 1, 0, 1, 0]
//     let five = [1, 1, 0, 1, 0, 1, 1]
//     let six = [1, 1, 0, 1, 1, 1, 1]
//     let seven = [1, 0, 1, 0, 0, 1, 0]
//     let eight = [1, 1, 1, 1, 1, 1, 1]
//     let nine = [1, 1, 1, 1, 0, 1, 1]

//     let numberSetting = [
//       zero,
//       one,
//       two,
//       three,
//       four,
//       five,
//       six,
//       seven,
//       eight,
//       nine,
//     ]
//     return numberSetting
//   }

//   set number(value) {
//     if (value < 0 || value > 9) {
//       console.error(`number not in range`)
//       return
//     }
//     value = Math.floor(value)
//     this._number = value
//     this.updateNumber(this._number)
//   }

//   get number() {
//     return this._number
//   }

//   updateNumber(n) {
//     let info = this.lightSetting[n]
//     if (info) {
//       for (let i = 0; i < this.group.children.length; i++) {
//         this.group.children[i].visible = !!info[i]
//       }
//     }
//   }
// }

export default class DigitalNumber {
  constructor() {
    this.create()
    this.lightSetting = this.createLightSetting()
    this._number = 0
  }

  create() {
    const points = new Float32Array([
      -1, 0, 0, -0.9, 0.1, 0, -0.9, -0.1, 0, 1, 0, 0, 0.9, 0.1, 0, 0.9, -0.1, 0,
    ])

    const faceIndex = new Uint32BufferAttribute(
      [0, 2, 1, 1, 2, 4, 2, 5, 4, 4, 5, 3],
      1
    )

    const geometry = new BufferGeometry()
    geometry.setIndex(faceIndex)
    geometry.setAttribute('position', new BufferAttribute(points, 3))
    geometry.computeVertexNormals()
    geometry.normalizeNormals()

    const normals = new Float32Array(
      new Array(points.length).fill(0).map((_, i) => (i % 3 === 2 ? 1 : 0))
    )
    geometry.setAttribute('normal', new BufferAttribute(normals, 3))

    const mesh = new Mesh(
      geometry,
      new MeshBasicMaterial({
        color: 0xCBCBFF,
        side: DoubleSide,
      })
    )
    mesh.scale.y = 1.5

    const top = mesh.clone()
    top.position.set(0, 2, 0)

    const leftTop = mesh.clone()
    leftTop.position.set(-1, 1, 0)
    leftTop.rotation.z = Math.PI / 2

    const rightTop = mesh.clone()
    rightTop.position.set(1, 1, 0)
    rightTop.rotation.z = Math.PI / 2

    const leftBottom = mesh.clone()
    leftBottom.position.set(-1, -1, 0)
    leftBottom.rotation.z = Math.PI / 2

    const rightBottom = mesh.clone()
    rightBottom.position.set(1, -1, 0)
    rightBottom.rotation.z = Math.PI / 2

    const bottom = mesh.clone()
    bottom.position.set(0, -2, 0)

    const group = new Group()
    group.add(top, leftTop, rightTop, mesh, leftBottom, rightBottom, bottom)

    this.group = group
    return group
  }

  createLightSetting() {
    const zero = [1, 1, 1, 0, 1, 1, 1]
    const one = [0, 0, 1, 0, 0, 1, 0]
    const two = [1, 0, 1, 1, 1, 0, 1]
    const three = [1, 0, 1, 1, 0, 1, 1]
    const four = [0, 1, 1, 1, 0, 1, 0]
    const five = [1, 1, 0, 1, 0, 1, 1]
    const six = [1, 1, 0, 1, 1, 1, 1]
    const seven = [1, 0, 1, 0, 0, 1, 0]
    const eight = [1, 1, 1, 1, 1, 1, 1]
    const nine = [1, 1, 1, 1, 0, 1, 1]

    return [zero, one, two, three, four, five, six, seven, eight, nine]
  }

  set number(value) {
    if (value < 0 || value > 9) {
      throw new Error('number not in range')
    }
    this._number = Math.floor(value)
    this.updateNumber(this._number)
  }

  get number() {
    return this._number
  }

  updateNumber(n) {
    const info = this.lightSetting[n]
    if (info) {
      for (let i = 0; i < this.group.children.length; i++) {
        this.group.children[i].visible = !!info[i]
      }
    }
  }
}
