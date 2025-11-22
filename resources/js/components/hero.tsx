import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

interface HerosProps {
    title: string
    subtitle: string
    foto: string
}


export default function Hero({title, subtitle, foto} : HerosProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
      
      <SwiperSlide>
          <div className={`bg-[url(${foto})] `+"min-h-screen  bg-cover bg-center flex items-center"}>
            <div className="ml-5 md:ml-20 text-white max-w-md md:max-w-lg ">
              <p className="text-3xl md:text-6xl font-bold">{title}</p>
              <p className="text-lg mt-2">
                {subtitle}
              </p>
            </div>
          </div>
        </SwiperSlide>

  )
}
