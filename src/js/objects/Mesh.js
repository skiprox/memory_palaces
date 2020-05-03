import { Mesh, MeshBasicMaterial, MeshNormalMaterial, IcosahedronBufferGeometry } from 'three'

export default class Plane extends Mesh {
  constructor({ pos = {x: 0, y: 0, z: 0}, texture = null } = {}) {

    let geo = new IcosahedronBufferGeometry(20, 3)
    let mat
    if (texture) {
      mat = new MeshBasicMaterial({map: texture})
    } else {
      mat = new MeshNormalMaterial()
    }

    super(geo, mat)

    this.position.x = pos.x
    this.position.y = pos.y
    this.position.z = pos.z

  }

  update({x = -20, y = 0, z = -20} = {}) {
    if (x) this.position.x = x
    if (y) this.position.y = y
    if (z) this.position.z = z
  }
}
