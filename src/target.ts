import { AudioSource, engine, Entity, GltfContainer, Transform } from '@dcl/sdk/ecs'
import * as utils from '@dcl-sdk/utils'
import { Color3, Vector3 } from '@dcl/sdk/math'

export function target() {
    let playerPos = Vector3.create(0, 0, 0)
    
const entity = engine.addEntity()
GltfContainer.create(entity, { src: 'models/target.glb' })
Transform.create(entity, {
  position: { x: 8, y: 0, z: 8 },
  scale: { x: 1, y: 1, z: 1 }
})
const centerPos = engine.addEntity()
Transform.create(centerPos, {
    parent: entity,
    position: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 }
})
utils.triggers.oneTimeTrigger(
    entity,
    utils.LAYER_2,
    utils.LAYER_1,
    [{ type: 'box' ,scale: {x:10,y:3,z:10}}],
    () => {
        playerPos = Transform.get(engine.PlayerEntity).position
        console.log('Player position:', playerPos)
        console.log('Difference to center:', compareToCenter(playerPos, Transform.get(centerPos).position))
        
    },
    Color3.Yellow()
  )
}
export function compareToCenter(posOne: Vector3, posTwo: Vector3): number {
    let posX = posOne.x - posTwo.x
    let posZ = posOne.z - posTwo.z
    let finalPos = posX + posZ
    return finalPos
    
}   
