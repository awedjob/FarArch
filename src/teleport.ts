import { engine, GltfContainer, InputAction, MeshCollider, MeshRenderer, pointerEventsSystem, Transform } from '@dcl/sdk/ecs'
import { Color3, Vector3 } from '@dcl/sdk/math'
import * as utils from '@dcl-sdk/utils'
import { movePlayerTo } from '~system/RestrictedActions'
import { target } from './target'

export function createTeleport() {
const myEntity = engine.addEntity()
// GltfContainer.create(myEntity, { src: 'models/portal.glb' })
// when I add the portal.glb make sure to remove line 11
MeshRenderer.setBox(myEntity)

Transform.create(myEntity, {
	position: { x: -9, y: 1.5, z: 32 },
    scale: { x: 0, y: 5, z: 3 }
})

utils.triggers.addTrigger(
    myEntity,
    1,
    1,
    [{ type: 'box', scale: {x:2,y:5,z:3}, position: Vector3.create(0, 0, 0) }],
            () => {
    console.log('Player entered portal trigger')

    movePlayerTo({
			newRelativePosition: Vector3.create(-15, 42, 20),
			cameraTarget: Vector3.create(-2.5 , 43.5, 45.5),
			avatarTarget: Vector3.create(-2.5 , 43.5, 45.5),
		})

        },
           


    () => {

    },
    Color3.Yellow()
  )
    //   utils.triggers.enableDebugDraw(true)
}
