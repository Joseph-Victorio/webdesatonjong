import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="w-full min-h-screen">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        navigation={true} 
        autoplay={
          isMobile
            ? { delay: 3000, disableOnInteraction: false }
            : undefined 
        }
        pagination={{ clickable: true }}
        className="w-full h-screen"
      >
        <SwiperSlide>
          <div className="min-h-screen bg-[url('/hero.png')] bg-cover bg-center flex items-center">
            <div className="ml-5 md:ml-20 text-white max-w-md md:max-w-lg ">
              <p className="text-3xl md:text-6xl font-bold">Selamat Datang</p>
              <p className="text-lg mt-2">
                Sumber informasi terbaru tentang pemerintahan di Desa Tonjong
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-screen bg-[url('/hero.png')] bg-cover bg-center flex items-center">
            <div className="ml-6 md:ml-20 text-white max-w-md">
              <h3 className="text-3xl font-bold">Desa yang Maju</h3>
              <p className="text-lg mt-2">
                Mari bersama membangun Desa Tonjong yang makmur dan sejahtera
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-screen bg-[url('/hero3.png')] bg-cover bg-center flex items-center">
            <div className="ml-6 md:ml-20 text-white max-w-md">
              <h3 className="text-3xl font-bold">Gotong Royong</h3>
              <p className="text-lg mt-2">
                Kebersamaan adalah semangat masyarakat Desa Tonjong
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
