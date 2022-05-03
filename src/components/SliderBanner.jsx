import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../assets/img/banner1.jpg'
import 'swiper/css';


function SliderBanner() {
  return (
    <section className="container mx-auto">
      <h2>Latest</h2>
      <Swiper sliderPerView={1} >
          <SwiperSlide>
            <div className='slide'>
              <img src={banner1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide'>
              <img src={banner1} alt="" />
            </div>
          </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SliderBanner
