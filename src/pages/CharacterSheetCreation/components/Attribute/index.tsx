import { AttributeContainer, BaseAttribute, SecondaryAttribute } from './styles'

import AbilityIcon from '../../../../assets/SheetIcons/ability-icon.png'
import ActtionPointsIcon from '../../../../assets/SheetIcons/action-points-icon.png'
import LifePointsIcon from '../../../../assets/SheetIcons/life-points-icon.png'
import ManaPointsIcon from '../../../../assets/SheetIcons/mana-points-icon.png'
import PowerIcon from '../../../../assets/SheetIcons/power-icon.png'
import ResistanceIcon from '../../../../assets/SheetIcons/resistance-icon.png'
import { InputHTMLAttributes } from 'react'

type AttributeVariants =
  | 'power'
  | 'ability'
  | 'resistance'
  | 'action'
  | 'mana'
  | 'life'

interface AttributeProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: AttributeVariants
}

export function Attribute({ variant, ...rest }: AttributeProps) {
  return (
    <AttributeContainer>
      {variant === 'power' && (
        <BaseAttribute>
          <div className="image">
            <img src={PowerIcon} alt="" />
          </div>
          <label htmlFor="power">P: </label>
          <input id="power" type="number" {...rest} />
        </BaseAttribute>
      )}
      {variant === 'ability' && (
        <BaseAttribute>
          <div className="image">
            <img src={AbilityIcon} alt="" />
          </div>
          <label htmlFor="ability">H: </label>
          <input id="ability" type="number" {...rest} />
        </BaseAttribute>
      )}
      {variant === 'resistance' && (
        <BaseAttribute>
          <div className="image">
            <img src={ResistanceIcon} alt="" />
          </div>
          <label htmlFor="resistance">R: </label>
          <input id="resistance" type="number" {...rest} />
        </BaseAttribute>
      )}
      {variant === 'action' && (
        <SecondaryAttribute>
          <div className="image">
            <img src={ActtionPointsIcon} alt="" />
          </div>
          <label htmlFor="action-points">PA: </label>
          <input id="action-points" type="number" {...rest} />
        </SecondaryAttribute>
      )}
      {variant === 'mana' && (
        <SecondaryAttribute>
          <div className="image">
            <img src={ManaPointsIcon} alt="" />
          </div>
          <label htmlFor="mana-points">PM: </label>
          <input id="mana-points" type="number" {...rest} />
        </SecondaryAttribute>
      )}
      {variant === 'life' && (
        <SecondaryAttribute>
          <div className="image">
            <img src={LifePointsIcon} alt="" />
          </div>
          <label htmlFor="life-points">PV: </label>
          <input id="life-points" type="number" {...rest} />
        </SecondaryAttribute>
      )}
    </AttributeContainer>
  )
}
