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
	position: { x: 22, y: 2.0, z: 3 },
    rotation: { x: 0, y: 0.5, z: 0, w: 1 },
    scale: { x: 0, y: 6, z: 3 },
})

utils.triggers.addTrigger(
    myEntity,
    1,
    1,
    [{ type: 'box', scale: {x:2,y:5,z:3}, position: Vector3.create(0, 0, 0) }],
            () => {
    console.log('Player entered portal trigger')

    movePlayerTo({
			newRelativePosition: Vector3.create(-11, 44, 17.75),
			cameraTarget: Vector3.create(24.25 , 20.0, 18.0),
			avatarTarget: Vector3.create(-2.0 , 46.0, 17.75),
		})

        },
           


    () => {

    },
    Color3.Yellow()
  )
    //   utils.triggers.enableDebugDraw(true)
}
