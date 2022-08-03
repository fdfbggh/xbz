import Link from 'next/link'
import { useState, useEffect } from 'react'

import api from '../services/api'

export default function Navbar() {
    const [categoryColumns, setCategoryColumns] = useState([])

    useEffect(() => {
        loadCategories()
    }, [])

    async function loadCategories() {
        await api.get('/categories')
            .then(response => {
                setCategoryColumns(response.data);
            })
    }

    return (
        <>
            <div className="d-none d-md-block container px-0 py-3">
                <nav className="navbar-expand-lg">

                    <div className="row justify-content-center align-items-center m-0">
                        <div className="col-1">
                            <Link href="/" >
                                <a className="navbar-brand">
                                    <img src='/images/LOGO_XBZ_03.svg' alt="language" className="img-fluid" />
                                </a>
                            </Link>
                        </div>

                        <div className="col-10">
                            <div className="row justify-content-center">
                                <div className="col-6">
                                    <form method="POST" className="form-inline">
                                        <input type="text" className="form-control" placeholder="Pesquisar..." />
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
                                                        <div className="col-4" style={{ backgroundColor: '#026395' }}>
                                                            <div className="row" style={{ height: '70vh', overflow: 'auto' }}>
                                                                {categoryColumns.map((category, key) => (
                                                                    <>

                                                                        <Link href={`/categorias/${category.slug}`}>
                                                                            <a className="dropdown-item text-uppercase" >{category.name}</a>
                                                                        </Link>

                                                                    </>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="col-8 d-flex p-0" style={{ backgroundColor: '#ADA9A7' }}>
                                                            <div className="col-6"><h1>DIV 2</h1></div>
                                                            <div className="col-6"><h1>DIV 3</h1></div>
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
                        </div>

                        <div className="col-1" style={{ height: '50px' }} >
                            <div className="row justify-content-center align-items-end" style={{ height: '100%' }} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                                </svg>
                                {/* <img src={'https://via.placeholder.com/20'} alt="language" className="img-fluid" style={{ width: '54px' }} /> */}
                            </div>
                        </div>
                    </div>
                </nav >
            </div >


        </>
    )
}