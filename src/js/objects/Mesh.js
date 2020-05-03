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

  update({rotate = {x: 0, y: 0, z: 0}}) {
    this.rotation.x += rotate.x
    this.rotation.y += rotate.y
    this.rotation.z += rotate.z
  }
}
