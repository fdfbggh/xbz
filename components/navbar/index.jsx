import { setCookie, parseCookies } from 'nookies'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import api from '../../services/api'
import styles from './styles.module.css'
import ProductSearch from '../productSearch'
import ProductCard from '../productCard'
import ProductPreviewCard from '../productPreviewCard'

export default function Navbar() {
    const [categoryColumns, setCategoryColumns] = useState([])
    const [searchProducts, setSearchProducts] = useState([])
    const [productsList, setProductsList] = useState([])
    const [active, setActive] = useState(0)
    const [show, setShow] = useState('none')
    const [search, setSearch] = useState('')
    const [view, setView] = useState('none')

    useEffect(() => {
        loadCategories()
        loadProductsList()
    }, [])

    async function loadCategories() {
        await api.get('/categories')
            .then(response => {
                setCategoryColumns(response.data);
            })
    }

    async function loadSearchItens(value) {
        if (value.length > 2) {
            await api.get(`/products?page=1&query=${value}`)
                .then(response => {
                    setSearchProducts(response.data.products.data);
                    setShow('flex')
                })
        } else {
            setShow('none')
            setSearchProducts([])
        }
    }

    function closeSearchResult() {
        setShow('none')
    }

    function loadProductsList() {
        const { XBZ_PRODUCT_LIST } = parseCookies()
        let getProductList
        XBZ_PRODUCT_LIST ? getProductList = XBZ_PRODUCT_LIST : getProductList = null
        setProductsList(JSON.parse(getProductList))
    }

    return (
        <>
            <div className={`d-none d-md-block container px-0 py-3`} >
                <nav className="navbar-expand-lg">

                    <div className="row justify-content-center align-items-center m-0">
                        <div className="col-1">
                            <Link href="/" >
                                <a className="navbar-brand">
                                    <img src='/images/LOGO_XBZ_03.svg' alt="language" className="img-fluid" />
                                </a>
                            </Link>
                        </div>

                        <div className="col-8 ">
                            <div className="row justify-content-center">
                                <div className="col-6">
                                    <form method="POST" className="form-inline">
                                        <input type="search" className="form-control" placeholder="Pesquisar..." onChange={(e) => { loadSearchItens(e.target.value); setSearch(e.target.value.toUpperCase()); }} />
                                    </form>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <ul className="nav justify-content-center" id="nav-main">
                                        <li className="nav-item dropdown px-1">
                                            {/* <Link href="/produtos">
                                        <a className="nav-link dropdown-toggle text-uppercase" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">DROPDOWN</a>
                                    </Link> */}
                                            <a href="" className="btn btn-link  text-dark" data-bs-toggle="dropdown" style={{ textDecoration: 'none' }}>Produtos</a>
                                            <ul className="dropdown-menu main shadow bg-light p-0" aria-labelledby="navbarDropdown" style={{ width: '70vw', maxWidth: '700px' }}>
                                                <li className="">
                                                    <div className="row m-0">
                                                        <div className="col-5" style={{ backgroundColor: '#023867' }}>
                                                            <div className={`${styles.container} row`} style={{ height: '70vh', overflow: 'auto' }}>
                                                                {categoryColumns.map((category, key) => (
                                                                    <>
                                                                        {category.categories.length > 0 &&
                                                                            <Link href={`/categorias/${category.slug}`}>
                                                                                <a className={`text-light ${styles.category} dropdown-item text-uppercase`} onMouseOver={() => { setActive(key) }} style={{ cursor: 'pointer' }}>
                                                                                    <div className="d-flex justify-content-between align-items-center">{category.name}
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </a>
                                                                            </Link>
                                                                        }

                                                                        {category.categories.length === 0 &&
                                                                            <Link href={`/categorias/${category.slug}`}>
                                                                                <a className={`text-light ${styles.category} dropdown-item text-uppercase`} onMouseOver={() => { setActive(null) }} >{category.name}</a>
                                                                            </Link>
                                                                        }
                                                                    </>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className={`col-7 d-flex flex-column p-3`} style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
                                                            <div className="row">
                                                                {categoryColumns[active] &&
                                                                    <>
                                                                        <Link href={`/categorias/${categoryColumns[active].slug}`}>
                                                                            <a className={`text-dark text-uppercase`} >{categoryColumns[active].name}</a>
                                                                        </Link>
                                                                        <hr className="mt-2" />
                                                                    </>
                                                                }
                                                            </div>
                                                            <div className="row" style={{ height: '100%' }}>
                                                                <div className="col-6" >
                                                                    {/* {JSON.stringify(categoryColumns[active])} */}

                                                                    {categoryColumns[active]?.categories.map((subcategory, index) => (
                                                                        <>
                                                                            <div className={`pb-2 `}>
                                                                                <Link href={`/categorias/${subcategory.slug}`}>
                                                                                    <a className={`text-uppercase text-dark`} >{subcategory.name}</a>
                                                                                </Link>
                                                                            </div>
                                                                        </>
                                                                    ))}
                                                                </div>
                                                                <div className="col-6">
                                                                    {categoryColumns[active] &&
                                                                        <>
                                                                            <div style={{ height: '100%' }}>
                                                                                <img src={categoryColumns[active].image_product} alt="Imagens do produto" className="img-fluid" style={{ width: '100%' }} />
                                                                            </div>
                                                                        </>
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item px-1">
                                            <Link href="/lancamentos">
                                                <a className="btn btn-link text-dark" style={{ textDecoration: 'none' }}>Lançamentos</a>
                                            </Link>

                                        </li>
                                        <li className="nav-item px-1">
                                            <Link href="/colecoes">
                                                <a className="btn btn-link text-dark" style={{ textDecoration: 'none' }}>Coleções</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item px-1">
                                            <Link href="/promocoes">
                                                <a className="btn btn-link text-dark" style={{ textDecoration: 'none' }}>Promoções</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item px-1">
                                            <Link href="/pontadeestoque">
                                                <a className="btn btn-link text-dark" style={{ textDecoration: 'none' }}>Ponta de Estoque</a>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className={`${styles.container} row d-${show}`} style={{ position: 'absolute', zIndex: '100', backgroundColor: '#fff', width: '70%', height: '50vh', overflow: 'auto' }}>
                                <div className={`col-4`}>
                                    <h3>Categorias</h3>
                                    {categoryColumns.map((categoria, index) => (
                                        <p key={index}>{categoria.name.indexOf(search) != -1 ? categoria.name : ''}</p>
                                    ))}

                                </div>

                                <div className={`col-8`}>
                                    {searchProducts.map((product, index) => (
                                        <>
                                            <ProductSearch product={product} clickProduct={closeSearchResult} />
                                        </>
                                    ))}
                                </div>



                            </div>
                        </div>

                        <div className="col-3 p-0" style={{ height: '50px' }} >
                            <div className="row justify-content-center align-items-end" style={{ height: '100%', cursor: 'pointer' }} onClick={() => view == 'block' ? setView('none') : setView('block')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                                </svg>
                            </div>
                            <div className={`d-${view} d-flex flex-column p-3 bg-light mt-1`} style={{ position: 'relative', zIndex: 2 }}>
                                {productsList?.map((product, index) => (
                                    <>
                                        {/* <ProductCard key={index} slug={product.slug} /> */}
                                        <ProductPreviewCard key={index} slug={product.slug} />
                                    </>
                                ))}

                                <Link href="/lista" >
                                    <a className={`btn btn-primary mb-1`}>IR PARA LISTA</a>
                                </Link>
                                <button className={`btn btn-secondary mb-1`}>GERAR LISTA - PDF</button>
                                <Link href="/comparar" >
                                    <a className={`btn btn-secondary mb-1`}>COMPARAR</a>
                                </Link>
                                <button className={`btn btn-link`}>Limpar tudo</button>
                            </div>
                        </div>
                    </div>
                </nav >
            </div >


        </>
    )
}
