import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavbarMobile() {
    return (
        <>
            <nav className="navbar p-0 navbar-expand-lg navbar-light bg-light d-block d-sm-none">
                <div className="container-fluid">
                    <div className="col-3 d-flex justify-content-center" style={{ height: '100%' }}>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="col-3 d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                        <Link href="/">
                            <a className="navbar-brand">
                                <Image
                                    src="/images/LOGO_XBZ_03.svg"
                                    alt="Logo - Asia Import"
                                    height="60"
                                    width="170"
                                    objectFit="contain"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="col-3 d-flex justify-content-center" style={{ height: '100%' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        {/* <Link href="/minha-conta">
                            <a className="text-danger">
                                <FontAwesomeIcon icon={["fal", "coffee"]} />
                            </a>
                        </Link>

                        <a className="text-dark" style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={["fal", "coffee"]} />
                        </a>

                        <Link href="/carrinho">
                            <a className="text-dark">
                                <FontAwesomeIcon icon={["fal", "coffee"]} />
                            </a>
                        </Link> */}
                    </div>

                </div>
                <div className="collapse navbar-collapse ps-3" id="navbarNavDarkDropdown" style={{ backgroundColor: '#026395' }}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link text-uppercase text-light">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sobre">
                                <a className="nav-link text-uppercase text-light">Empresa</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                PRODUTOS
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink" style={{ backgroundColor: '#026395' }}>
                                <li className={` text-light`}>
                                    CATEGORIAS
                                </li>
                                <li>
                                    <Link href="/produtos">
                                        <a className="dropdown-item text-light">TODOS</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/lancamentos">
                                <a className="nav-link text-uppercase text-light">Lançamentos</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/colecoes">
                                <a className="nav-link text-uppercase text-light">Coleções</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/promocoes">
                                <a className="nav-link text-uppercase text-light">Promoções</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/pontadeestoque">
                                <a className="nav-link text-uppercase text-light">Ponta de Estoque</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/sac">
                                <a className="nav-link text-uppercase text-light">Central de atendimento</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contato">
                                <a className="nav-link text-uppercase text-light">Contato</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`w-100 my-3 d-flex justify-content-center`}>
                    <input type="text" name="" id="" placeholder="Buscar" style={{ width: '90%' }} />
                </div>
            </nav>
        </>
    )
}