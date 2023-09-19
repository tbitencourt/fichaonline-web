import { AttributeContainer, BaseAttribute, SecondaryAttribute } from './styles'

import AbilityIcon from '../../../../assets/SheetIcons/ability-icon.png'
import ActtionPointsIcon from '../../../../assets/SheetIcons/action-points-icon.png'
import LifePointsIcon from '../../../../assets/SheetIcons/life-points-icon.png'
import ManaPointsIcon from '../../../../assets/SheetIcons/mana-points-icon.png'
import PowerIcon from '../../../../assets/SheetIcons/power-icon.png'
import ResistanceIcon from '../../../../assets/SheetIcons/resistance-icon.png'
import { InputHTMLAttributes } from 'react'
import { Tooltip } from '@radix-ui/themes'

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
        <Tooltip content="Poder">
          <BaseAttribute>
            <div className="image">
              <img src={PowerIcon} alt="" />
            </div>
            <label htmlFor="power">P: </label>
            <input id="power" type="number" {...rest} />
          </BaseAttribute>
        </Tooltip>
      )}
      {variant === 'ability' && (
        <Tooltip content="Habilidade">
          <BaseAttribute>
            <div className="image">
              <img src={AbilityIcon} alt="" />
            </div>
            <label htmlFor="ability">H: </label>
            <input id="ability" type="number" {...rest} />
          </BaseAttribute>
        </Tooltip>
      )}
      {variant === 'resistance' && (
        <Tooltip content="Resistência">
          <BaseAttribute>
            <div className="image">
              <img src={ResistanceIcon} alt="" />
            </div>
            <label htmlFor="resistance">R: </label>
            <input id="resistance" type="number" {...rest} />
          </BaseAttribute>
        </Tooltip>
      )}
      {variant === 'action' && (
        <Tooltip content="Pontos de ação">
          <SecondaryAttribute>
            <div className="image">
              <img src={ActtionPointsIcon} alt="" />
            </div>
            <label htmlFor="action-points">PA: </label>
            <input id="action-points" type="number" {...rest} />
          </SecondaryAttribute>
        </Tooltip>
      )}
      {variant === 'mana' && (
        <Tooltip content="Pontos de mana">
          <SecondaryAttribute>
            <div className="image">
              <img src={ManaPointsIcon} alt="" />
            </div>
            <label htmlFor="mana-points">PM: </label>
            <input id="mana-points" type="number" {...rest} />
          </SecondaryAttribute>
        </Tooltip>
      )}
      {variant === 'life' && (
        <Tooltip content="Pontos de vida">
          <SecondaryAttribute>
            <div className="image">
              <img src={LifePointsIcon} alt="" />
            </div>
            <label htmlFor="life-points">PV: </label>
            <input id="life-points" type="number" {...rest} />
          </SecondaryAttribute>
        </Tooltip>
      )}
    </AttributeContainer>
  )
}
