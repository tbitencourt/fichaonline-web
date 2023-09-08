/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from 'react'
import { SliderImage } from './SliderContent'

interface DotsProps {
  activeIndex: number
  onclick: (index: number) => void
  sliderImage: SliderImage[]
}

export const Dots: FunctionComponent<DotsProps> = ({
  activeIndex,
  onclick,
  sliderImage,
}) => {
  return (
    <div className="all-dots">
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  )
}
