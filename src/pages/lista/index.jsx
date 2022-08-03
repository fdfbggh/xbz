import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { useState, useEffect } from 'react'
import ProductCard from '../../../components/productCard'
import ProductsSlider from '../../../components/productsSlider'
import api from '../../../services/api'

export default function Lista({ products, getProductList }) {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        if (getProductList != null) {
            setProductsList(JSON.parse(getProductList))
        }
    }, [productsList])

    function removeItem(id) {
        console.log(productsList)
        let aux = productsList.filter((item) => item.id !== id);
        console.log(aux)

        if (aux.length > 0) {
            setCookie(null, 'XBZ_PRODUCT_LIST', JSON.stringify(aux), {
                path: '/',
                maxAge: 86400 * 99999,
            });
        } else {
            destroyCookie(null, 'XBZ_PRODUCT_LIST')
        }
    }

    function clearCookies() {
        destroyCookie(null, 'XBZ_PRODUCT_LIST')
    }

    return (
        <>
            <div className={`container`}>

                <section>
                    <div className={`row`}>
                        <div className={`col-12`}>
                            <h1 align="center">Lista</h1>
                        </div>
                    </div>
                </section>

                <section className={`mt-4 mt-md-0`}>
                    <div className={`row`}>
                        <div className={`col-12`}>
                            {productsList.map((product, index) => (
                                <ProductCard slug={product.slug} id={product.id} removeItem={removeItem} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className={`pb-md-5`}>
                    <div className={`row my-5`}>
                        <div className={`col-12 col-md-6`} >
                            <p className={`h3 pb-3`}>Resumo do Pedido</p>

                            <div className={`row d-flex align-items-center`}>
                                <div className={`col-8 col-md-6`}>
                                    <p className={`m-0 pb-1`}>Quantidade de Ítens</p>
                                </div>
                                <div className={`col-4 col-md-6`}>
                                    <p className={`m-0 pb-1`}>3</p>
                                </div>
                            </div>

                            <div className={`row`}>
                                <div className={`col-8 col-md-6`}>
                                    <p className={`m-0 pb-1`}>Data da Lista</p>
                                </div>
                                <div className={`col-4 col-md-6`}>
                                    <p className={`m-0  pb-1`}>20/03/2022</p>
                                </div>
                            </div>



                        </div>

                        <div className={`mt-5 mt-md-0 col-12 col-md-6 d-flex flex-column justify-content-center align-items-center `}>
                            <div className={`pb-3`}>
                                <button className={`btn btn-primary px-5`} style={{ borderRadius: '25px' }}>
                                    GERAR LISTA - PDF
                                </button>
                            </div>

                            <div>
                                <button className={`btn btn-link text-dark`} style={{ textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                    </svg>
                                    <span className={`ps-2`}>Compartilhar</span>
                                </button>
                            </div>

                            <div>
                                <button className={`btn btn-link text-dark`} onClick={clearCookies}>
                                    Limpar Tudo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`mb-5 mb-md-0`}>
                    <ProductsSlider title="Vistos Recentemente" products={products} productWidth="12" />
                </section>

            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { XBZ_PRODUCT_LIST } = parseCookies(context)
    let getProductList
    XBZ_PRODUCT_LIST ? getProductList = XBZ_PRODUCT_LIST : getProductList = null

    const res = await api.get('/products/most-visited')

    return {
        props: {
            getProductList,
            products: res.data,
        },
    }
}
