import './sliderContent.css'

export interface SliderImage {
  urls: string
  title: string
  description: string
}

interface SliderContentProps {
  activeIndex: number
  sliderImage: SliderImage[]
}

function SliderContent({ activeIndex, sliderImage }: SliderContentProps) {
  return (
    <section className="slider-content-container">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? 'slides active' : 'inactive'}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
        </div>
      ))}
    </section>
  )
}

export default SliderContent
