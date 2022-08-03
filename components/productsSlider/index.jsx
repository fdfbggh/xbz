import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation'

import Produto from '../../components/produto'

export default function ProductSlider({ title, products, productWidth }) {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <section>
            <div className="container-fluid p-0">
                <h2 align="center">{title}</h2>
                <div className="row m-0 mt-3 justify-content-between">
                    {domLoaded && (
                        <Swiper tag="section"
                            id="slide-destaques"
                            navigation
                            spaceBetween={0}
                            loop
                            breakpoints={{
                                640: {
                                    width: 640,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 0,
                                },
                            }}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]}
                        >
                            {
                                (products != undefined)
                                    ? products.map((product, index) => {
                                        return (
                                            <SwiperSlide tag="li" key={product.id}>
                                                <Produto key={index} img={product.imagem.image_asset} name={product.name} slug={product.slug} productId={product.code} colors={product.colors} width={productWidth} />
                                            </SwiperSlide>
                                        )
                                    })
                                    : <div className="col-md-12 text-center">Carregando produtos...</div>
                            }
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
    )
}