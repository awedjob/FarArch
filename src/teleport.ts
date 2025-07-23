import { engine, InputAction, MeshCollider, MeshRenderer, pointerEventsSystem, Transform } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { movePlayerTo } from '~system/RestrictedActions'

export function createTeleport() {
const myEntity = engine.addEntity()
MeshRenderer.setBox(myEntity)
MeshCollider.setBox(myEntity)

Transform.create(myEntity, {
	position: { x: -9, y: 1.5, z: 32 },
})

// give entity behavior
pointerEventsSystem.onPointerDown(
	{
		entity: myEntity,
		opts: { button: InputAction.IA_POINTER, hoverText: 'Click' },
	},
	function () {
		// respawn player
		movePlayerTo({
			newRelativePosition: Vector3.create(-15, 42, 20),
			cameraTarget: Vector3.create(-2.5 , 43.5, 45.5),
			avatarTarget: Vector3.create(-2.5 , 43.5, 45.5),
		})
	}
)
}

// create entity
