import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper"
import 'swiper/css';

export default function BannerSlider() {
    return (
        <>
            <Swiper tag="section"
                spaceBetween={0}
                loop
                slidesPerView={1}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className="col-md-12 pe-1 p-4 d-flex flex-column justify-content-center align-items-center" id="teste" style={{ padding: '0px', backgroundColor: '#313E51', backgroundPosition: 'center', backgroundSize: 'cover', height: '550px' }}>
                        <h1 className="text-light">Conheça nossa coleção de tecnologia</h1>
                        <p style={{ color: '#D38E12' }}>Selecionamos os produtos com tecnologia que vão deixar seu cliente louco!</p>
                        <button className="btn btn-warning text-light px-5 py-2" style={{ textDecoration: 'none', borderRadius: '25px', maxWidth: '200px' }}>
                            SAIBA MAIS
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="col-md-12 pe-1 p-4 d-flex flex-column justify-content-center align-items-center" id="teste" style={{ padding: '0px', backgroundColor: '#367aba', backgroundPosition: 'center', backgroundSize: 'cover', height: '550px' }}>
                        <h1 className="text-light">Slide 2</h1>
                        <p style={{ color: '#D38E12' }}>Selecionamos os produtos com tecnologia que vão deixar seu cliente louco!</p>
                        <button className="btn btn-warning text-light px-5 py-2" style={{ textDecoration: 'none', borderRadius: '25px', maxWidth: '200px' }}>
                            SAIBA MAIS
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}