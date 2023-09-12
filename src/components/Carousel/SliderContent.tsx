import axios from 'axios'
import { useEffect, useState } from 'react'

export interface SliderImage {
  urls: string
  title: string
  description: string
}

interface SliderContentProps {
  activeIndex: number
}

function SliderContent({ activeIndex }: SliderContentProps) {
  const [data, setData] = useState<SliderImage[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3333/news')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Falha ao carregar os dados da API:', error)
      })
  }, [])

  return (
    <section>
      {data.map((slide, index) => (
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
