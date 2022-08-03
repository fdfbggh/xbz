import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation'

import { useState } from 'react'
import styles from './styles.module.css';

export default function ProductList({ img, code, slug, name, colors, product, features }) {
    const [urlImage, setUrlImage] = useState('')

    return (
        <>
            <div className="py-2 mb-3 p-0 m-0" id={styles.container}>
                <Link href={`/brinde/${slug}`}>
                    <a style={{ textDecoration: 'none', color: 'black', }} >
                        <div className="row d-flex text-dark">
                            <div className="col-md-4">

                                {!urlImage &&
                                    <img src={img} alt={slug} style={{ width: '100%' }} />
                                }

                                {urlImage &&
                                    <img src={urlImage} alt="Imagens do produto" className="img-fluid" />
                                }
                            </div>

                            <div className="col-md-4">
                                <h3 className={`m-0`}>{name}</h3>
                                <strong>{code}</strong>

                                <p className="fs-6 pt-3" dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                <hr />
                                <p><strong>Cores</strong></p>
                                <div className="d-flex flex-wrap mb-2 g-0">
                                    {colors.map((color, key) => {
                                        return (
                                            <>
                                                <div className="col-1 pe-5 pb-2">
                                                    <div style={{ height: '25px', width: '40px', borderRadius: '5px' }} className={`color color-${color.color?.slug}`} onMouseOver={() => { setUrlImage(color.images[0]?.image_asset) }}></div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>

                                <p><strong>Visualização</strong></p>
                                <div className="d-flex flex-wrap mb-4 g-0">
                                    <Swiper tag="section"
                                        spaceBetween={0}
                                        loop
                                        // navigation
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
                                            delay: 5000

                                        }}
                                        modules={[Autoplay, Navigation]}
                                    >
                                        {product.images.map((image, index) => (
                                            <SwiperSlide>
                                                <img src={image.image_asset} alt="Imagens do produto" className="img-fluid" width="70px" onClick={() => setImgActive(index)} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                <div className={`row d-flex align-items-center`}>
                                    <div className="col-6 p-0 d-flex justify-content-end d-none d-md-block">


                                        <button className="btn btn-link text-dark p-0" data-bs-toggle="collapse" data-bs-target="#area" style={{ textDecoration: 'none' }} onClick={() => { setShowSaibaMais(!showSaibaMais) }}>
                                            <div className={`d-flex justify-content-center align-items-center`}>
                                                <div className={`d-flex justify-content-center align-items-center`} style={{ backgroundColor: '#FBA301', borderRadius: '50%', border: '1px solid #000', width: '30px', height: '30px' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                    </svg>
                                                </div>
                                                <strong className={`h5 m-0 ps-2`}>Download do pacote</strong>
                                            </div>
                                        </button>


                                    </div>
                                    <div className={`col-6 p-0`}>
                                        <button className={`btn btn-primary  w-100`} style={{ borderRadius: '25px' }}>Adicionar a Lista</button>
                                    </div>
                                    <div className={`col-12 d-flex justify-content-end px-0`} >
                                        <button className={`btn btn-link text-dark px-0`} style={{ borderRadius: '25px', textDecoration: 'none' }} onClick={() => { addProductList(product.slug, product.colors, product.imagem.image_asset, product.features); }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                            </svg>
                                            <span className={`ps-2`}>Compartilhar</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <p className={`h5 pb-3`}>Detalhes Técnicos</p>
                                {features?.map(item => (
                                    <>
                                        {item &&
                                            <p>{item.feature}: {item.value}</p>
                                        }
                                    </>
                                ))}
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}