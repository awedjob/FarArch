// text label
import { UiEntity, Label, ReactEcs } from '@dcl/sdk/react-ecs'
import { Color4 } from '@dcl/sdk/math'
import { score } from './target'

export const uiMenu = () => (
    <UiEntity uiTransform={{
      width: 'auto',
      height: 'auto',
      alignSelf: 'center',
      padding: 10,
      margin: '500px 0 8px 700px',
    }}>
        <Label
            value= {`${score}`}
            color={Color4.Red()}
            fontSize={80}
            font="serif"
            textAlign="top-center"
        />
    </UiEntity>
)