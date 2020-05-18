import {
  Mesh,
  MeshBasicMaterial,
  MeshNormalMaterial,
  SphereBufferGeometry,
  BoxBufferGeometry
} from 'three'

export default class Shape extends Mesh {
  constructor({ type = 'sphere', size = {x: 20, y: 20, z: 20}, pos = {x: 0, y: 0, z: 0}, texture = null } = {}) {

    let geo
    let mat
    // what kind of shape are are drawing?
    if (type === 'sphere') {
      geo = new SphereBufferGeometry(size.x, 50, 50)
    } else {
      geo = new BoxBufferGeometry(size.x, size.y, size.z, 50, 50)
    }
    // Do we have a texture? give it a texture
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
