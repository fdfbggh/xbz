import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Produto from '../produto'
import ProductList from '../productList'

export default function Categoria({ products, category, slug }) {
    const router = useRouter()
    const [modoExibicao, setModoExibicao] = useState('grid')

    function redirect(value) {
        router.push(`/categorias/${slug}?${value}`)
    }

    return (
        <>
            <section className={`p-0 m-0`}>
                <div className="container-fluid">
                    <div className="row text-light py-5 bg-secondary">
                        <div className="col d-flex flex-column align-items-center">
                            <h1>{category.name}</h1>
                            {category.description &&
                                <span>{category.description}</span>
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className={`py-3 m-0`} style={{ backgroundColor: '#ccc' }}>
                <div className="container">
                    <div className="row  d-flex justify-content-center">



                        <div className="d-none d-md-flex col-md-8 p-0">
                            <ul className={`list-inline m-0`} style={{ listType: 'none' }}>
                                {category.children?.map((subcategory, index) => (
                                    <li className={`list-inline-item px-1 py-1`}>
                                        <Link key={index} href={`/categorias/${subcategory.slug}`}>
                                            <a>{subcategory.name}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>



                        <div className="col-md-4 p-0 d-flex justify-content-around align-items-center">
                            <div className="row w-100 px-2">
                                <div className={`d-md-none col-6 px-0`}>
                                    <button className="bg-light text-dark btn btn-link d-flex align-items-center text-dark px-3" style={{ textDecoration: 'none' }} onClick={() => { setModoExibicao('grid') }}>
                                        <span className={`pe-2`}>Filtros</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders2-vertical" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="d-none d-md-block col-md-3 p-0">
                                    <button className="btn btn-link d-flex align-items-center text-dark" style={{ textDecoration: 'none' }} onClick={() => { setModoExibicao('grid') }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
                                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                        </svg>
                                        <span className={`ps-2`}>Grid</span>
                                    </button>
                                </div>
                                <div className="d-none d-md-block col-md-3 p-0">
                                    <button className="btn btn-link d-flex align-items-center text-dark" style={{ textDecoration: 'none' }} onClick={() => { setModoExibicao('list') }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdd-stack" viewBox="0 0 16 16">
                                            <path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z" />
                                            <path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                                            <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                        </svg>
                                        <span className={`ps-2`}>List</span>
                                    </button>
                                </div>
                                <div className="col-6 col-md-6 p-0 d-flex align-items-center">
                                    <select name="sortBy" id="sortBy" className="form-control form-control-sm p-2" onChange={(e) => { redirect(e.target.value) }}>
                                        <option value="">ORDENAR POR</option>
                                        <option value="price=asc">preço crescente</option>
                                        <option value="price=desc">preço decrescente</option>
                                        <option value="name=asc">A-Z</option>
                                        <option value="name=desc">Z-A</option>
                                        <option value="code=asc">Referência</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                modoExibicao === 'grid' &&
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            {products.map((product, index) => (
                                <Produto key={product.id} img={product.imagem.image_asset} name={product.name} slug={product.slug} productId={product.code} colors={product.colors} width="2" />
                            ))}
                        </div>
                    </div>
                </section>
            }

            {
                modoExibicao === 'list' && (
                    <section>
                        <div className="container-fluid py-5">
                            {products.map((product, index) => (
                                <ProductList key={product.id} img={product.imagem.image_asset} name={product.name} code={product.code} slug={product.slug} productId={product.code} colors={product.colors} product={product} features={product.features} />
                            ))}
                        </div>
                    </section>
                )
            }
        </>
    )
}