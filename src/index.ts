import { Vector3 } from '@dcl/sdk/math'
import { engine } from '@dcl/sdk/ecs'
import { target } from './target'
import { createTeleport } from './teleport'
import * as utils from '@dcl-sdk/utils'

export function main() {
  target()
  createTeleport()
}

// const entity = engine.addEntity()
// GltfContainer.create(entity, { src: 'models/target.glb' })
// Transform.create(entity, {
//   position: { x: 16, y: 0, z: 16 },
//   scale: { x: 1, y: 1, z: 1 }
// })



