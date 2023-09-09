import { AttributeContainer, BaseAttribute } from './styles'

import AbilityIcon from '../../../../assets/SheetIcons/ability-icon.png'
import ActtionPointsIcon from '../../../../assets/SheetIcons/action-points-icon.png'
import LifePointsIcon from '../../../../assets/SheetIcons/life-points-icon.png'
import ManaPointsIcon from '../../../../assets/SheetIcons/mana-points-icon.png'
import PowerIcon from '../../../../assets/SheetIcons/power-icon.png'
import ResistanceIcon from '../../../../assets/SheetIcons/resistance-icon.png'

type AttributeVariants =
  | 'power'
  | 'ability'
  | 'resistance'
  | 'action'
  | 'mana'
  | 'life'

interface AttributeProps {
  variant: AttributeVariants
}

export function Attribute({ variant }: AttributeProps) {
  return (
    <AttributeContainer>
      {variant === 'power' && (
        <BaseAttribute>
          <div className="image">
            <img src={PowerIcon} alt="" />
          </div>
          <label htmlFor="power">P: </label>
          <input id="power" type="number" />
        </BaseAttribute>
      )}
      {variant === 'ability' && (
        <BaseAttribute>
          <div className="image">
            <img src={AbilityIcon} alt="" />
          </div>
          <label htmlFor="ability">H: </label>
          <input id="ability" type="number" />
        </BaseAttribute>
      )}
      {variant === 'resistance' && (
        <BaseAttribute>
          <div className="image">
            <img src={ResistanceIcon} alt="" />
          </div>
          <label htmlFor="resistance">R: </label>
          <input id="resistance" type="number" />
        </BaseAttribute>
      )}
      {variant === 'action' && (
        <BaseAttribute>
          <div className="image">
            <img src={ActtionPointsIcon} alt="" />
          </div>
          <label htmlFor="action-points">PA: </label>
          <input id="action-points" type="number" />
        </BaseAttribute>
      )}
      {variant === 'mana' && (
        <BaseAttribute>
          <div className="image">
            <img src={ManaPointsIcon} alt="" />
          </div>
          <label htmlFor="mana-points">PM: </label>
          <input id="mana-points" type="number" />
        </BaseAttribute>
      )}
      {variant === 'life' && (
        <BaseAttribute>
          <div className="image">
            <img src={LifePointsIcon} alt="" />
          </div>
          <label htmlFor="life-points">PV: </label>
          <input id="life-points" type="number" />
        </BaseAttribute>
      )}
    </AttributeContainer>
  )
}
