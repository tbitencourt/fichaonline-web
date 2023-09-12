import { useEffect, useState } from 'react'
import SliderContent from './SliderContent'
import { Dots } from './Dots'
import { Arrows } from './Arrows'

import sliderImage from './sliderImage'
import './slider.css'

const len = sliderImage.length - 1

function Slider() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevActiveIndex) =>
        prevActiveIndex === len ? 0 : prevActiveIndex + 1,
      )
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} />
      <Arrows
        prevSlide={() =>
          setActiveIndex((prevActiveIndex) =>
            prevActiveIndex < 1 ? len : prevActiveIndex - 1,
          )
        }
        nextSlide={() =>
          setActiveIndex((prevActiveIndex) =>
            prevActiveIndex === len ? 0 : prevActiveIndex + 1,
          )
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(index) => setActiveIndex(index)}
      />
    </div>
  )
}

export default Slider
