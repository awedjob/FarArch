import { Vector3 } from '@dcl/sdk/math'
import { engine } from '@dcl/sdk/ecs'
import { target } from './target'
import { createTeleport } from './teleport'
import { LeaderBoard } from './leaderboard'
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

const leaderboard = new LeaderBoard(
    {
      position: Vector3.create(1, 0, 9.5),
      scale: Vector3.create(1.8453333377838135, 1.8453333377838135, 6)
    },
    5
  )

