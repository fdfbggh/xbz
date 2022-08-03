import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation'
import { setCookie, parseCookies } from 'nookies'
import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon
} from "next-share";

import ProductsSlider from '../../../components/productsSlider'

export default function Brinde({ product, suggestions, getProductList }) {
    const [domLoaded, setDomLoaded] = useState(false);
    const [imgActive, setImgActive] = useState(0);
    const [colorActive, setColorActive] = useState(null)
    const [showSaibaMais, setShowSaibaMais] = useState(false)

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    function addProductList(slug, cores, img, features) {
        let productsList = []
        let lastId = 0

        if (getProductList != null) {
            productsList = JSON.parse(getProductList)
            let lastObj = productsList[productsList.length - 1]
            lastId = lastObj.id

            // lastId = productsList.length
        }

        productsList.push({ id: ++lastId, slug: slug, quantidade: 1, cores: ['azul, verde'], img: img, features: features })

        setCookie(null, 'XBZ_PRODUCT_LIST', JSON.stringify(productsList), {
            path: '/',
            maxAge: 86400 * 99999,
        });
    }

    return (
        <>
            <Head>
                <title>{product.slug} - XBZ</title>

                <meta property="og:url" content={`${process.env.APP_URL}/brinde/${product.slug}`} />
                <meta property="og:type" content="product" />
                <meta property="og:title" content={product.slug} />
                <meta property="og:description" content={product.features} />
                <meta property="og:image" content={product.images[0].image_asset} />
                <meta property="" content={``} />


            </Head>

            <section>
                <div className="container">
                    <div className="row">
                        <div className={`col-12 d-md-none`}>
                            <p className={`h4 m-0`}>{product.name}</p>
                            <span>{product.code}</span>
                        </div>

                        <div className="col-md-7">
                            <div className="d-none d-md-block row">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <img src={product.images[imgActive].image_asset} alt="Imagens do produto" className="img-fluid" style={{ width: '70%' }} />
                                </div>
                            </div>
                            <div className="row">
                                {domLoaded && (
                                    <Swiper tag="section"
                                        spaceBetween={0}
                                        loop
                                        navigation
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
                                            delay: 2000

                                        }}
                                        modules={[Autoplay, Navigation]}
                                    >

                                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                                            {product.images.map((image, index) => (
                                                <SwiperSlide>
                                                    <img src={image.image_asset} alt="Imagens do produto" className="img-fluid" onClick={() => setImgActive(index)} />
                                                </SwiperSlide>
                                            ))}
                                        </div>

                                    </Swiper>

                                )}
                            </div>

                        </div>


                        <div className="col-md-5 p-md-5">
                            <div className="row">
                                <div className={`col-12 d-none d-md-block`}>
                                    <p className={`h4 m-0`}>{product.name}</p>
                                    <span>{product.code}</span>
                                </div>

                                <div className={`col-12 pt-4 d-none d-md-block`}
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />

                                <hr />

                                <div className="col-12">
                                    <p className="h5 p-0">Cores</p>
                                    <div className={`d-flex`}>
                                        {product.colors.map((color, index) => {
                                            return (
                                                <>
                                                    <div className="col-1 col-md-1 col-lg-1 pe-5">
                                                        <button
                                                            onClick={() => { colorActive === index.toString() ? setColorActive(null) : setColorActive(index.toString()) }}
                                                            style={{ border: '0px', }}
                                                            data-bs-toggle="tooltip"
                                                            data-bs-custom-class="custom-tooltip"
                                                            title={color.color.name}
                                                        >
                                                            <div
                                                                style={{ height: '20px', width: '40px', borderRadius: '5px' }}
                                                                className={`color color-${color.color?.slug}`}

                                                            ></div>
                                                        </button>
                                                    </div>

                                                </>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className={`col-12 mt-2`}>
                                    {product.colors[colorActive]?.images.length > 0 && <strong className="p-0">Visualização</strong>}
                                    <div className={`row d-flex flex-wrap`}>
                                        {colorActive &&
                                            product.colors[colorActive].images.map((image, index) => (
                                                <>
                                                    <div className={`col-md-4`}>
                                                        <img src={image.image_asset} alt="Imagens do produto" className="img-fluid" />
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className={`col-12 mt-4 d-flex justify-content-end`}>
                                    <button className={`btn btn-primary px-5 py-2`} style={{ borderRadius: '25px' }} onClick={() => { addProductList(product.slug, product.colors, product.imagem.image_asset, product.features); }}>Adicionar a Lista</button>
                                </div>

                                <div className={`col-12 mt-4 d-flex justify-content-end`} >
                                    <button className={`btn btn-link px-5 py-2 text-dark`} style={{ borderRadius: '25px', textDecoration: 'none' }} onClick={() => { addProductList(product.slug, product.colors, product.imagem.image_asset, product.features); }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg>
                                        <span className={`ps-2`}>Compartilhar</span>
                                    </button>
                                </div>

                                <div>
                                    <FacebookShareButton url={`${process.env.APP_URL}/brinde/${product.slug}`}>
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>

                                    <WhatsappShareButton
                                        url={"https://github.com/next-share"}
                                        title={"next-share is a social share buttons for your next React apps."}
                                        separator=":: "
                                    >
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                </div>









                                <hr />

                                <div className={`col-12 pt-4 d-md-none`}
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />


                                <div className="col-12">
                                    <button className="btn btn-link text-dark p-0" data-bs-toggle="collapse" data-bs-target="#area" style={{ textDecoration: 'none' }} onClick={() => { setShowSaibaMais(!showSaibaMais) }}>
                                        <div className={`d-flex align-items-center`}>
                                            <span className={`h5 m-0 pe-2`}>Saiba Mais</span>
                                            {showSaibaMais ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                                :

                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            }

                                        </div>
                                    </button>

                                    <div id="area" className="collapse mt-2">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea molestiae explicabo quis obcaecati perferendis cumque enim cupiditate hic ullam. Saepe nobis delectus quidem facilis, fugit quibusdam voluptatem beatae eos.</p>
                                    </div>
                                </div>

                                <div className="col-12 mt-5 d-flex justify-content-end d-none d-md-block">
                                    <button className="btn btn-link text-dark p-0" data-bs-toggle="collapse" data-bs-target="#area" style={{ textDecoration: 'none' }} onClick={() => { setShowSaibaMais(!showSaibaMais) }}>
                                        <div className={`d-flex justify-content-center calign-items-center`}>
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





                            </div>
                        </div>

                    </div>
                </div>
            </section >

            <section>
                <div className="container-fluid d-flex justify-content-center align-items-center d-none d-md-block" style={{ width: '100%', height: '500px', backgroundColor: '#ccc' }}>
                    <p className="h1">Conteúdo para Marketing Digital</p>
                </div>
            </section>

            <section>
                <ProductsSlider title="Produtos Relacionados" products={suggestions} productWidth="12" />
            </section>
        </>
    )
}


export async function getServerSideProps(context) {
    const { XBZ_PRODUCT_LIST } = parseCookies(context)
    let getProductList
    XBZ_PRODUCT_LIST ? getProductList = XBZ_PRODUCT_LIST : getProductList = null

    const slug = context.query.id
    const res = await fetch(`https://asia.ajung.site/api/products/${slug}`, { headers: { 'appKey': 'yDY5qu106qdgj7iBJm9j1biHH8v7sTO6WPPe29vY' } })
    const data = await res.json();

    return {
        props: {
            product: data.product,
            suggestions: data.suggestions,
            getProductList
        },
    }
}