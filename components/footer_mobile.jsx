import Link from 'next/link'

export default function FooterMobile() {
    return (
        <>

            <section className="d-md-block d-md-none">
                <div className="container">
                    <div className="row">



                        <div className="col-12">
                            <div id="accordion">


                                <div className="card">
                                    <div className="card-header p-0">
                                        <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#c1" style={{ textDecoration: 'none' }}>
                                            <h6 className="text-dark">SIGA-NOS</h6>
                                        </button>
                                    </div>
                                    <div className="collapse" id="c1" data-bs-parent="#accordion">
                                        <div className="card-body d-flex justify-content-center">
                                            <Link href="/">
                                                <a className="px-1"><img src={'https://via.placeholder.com/30'} alt="language" className="img-fluid" /></a>
                                            </Link>
                                            <Link href="/">
                                                <a className="px-1"><img src={'https://via.placeholder.com/30'} alt="language" className="img-fluid" /></a>
                                            </Link>
                                            <Link href="/">
                                                <a className="px-1"><img src={'https://via.placeholder.com/30'} alt="language" className="img-fluid" /></a>
                                            </Link>
                                            <Link href="/">
                                                <a className="px-1"><img src={'https://via.placeholder.com/30'} alt="language" className="img-fluid" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header p-0">
                                        <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#c2" style={{ textDecoration: 'none' }}>
                                            <h6 className="text-dark">MENU</h6>
                                        </button>
                                    </div>
                                    <div className="collapse" id="c2" data-bs-parent="#accordion">
                                        <div className="card-body d-flex flex-column">
                                            <Link href="/produtos">
                                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Produtos</a>
                                            </Link>
                                            <Link href="/lancamentos">
                                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Lançamentos</a>
                                            </Link>
                                            <Link href="/colecoes">
                                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Coleções</a>
                                            </Link>
                                            <Link href="/promocoes">
                                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Promoções</a>
                                            </Link>
                                            <Link href="/pontadeestoque">
                                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Ponta de Estoque</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header p-0">
                                        <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#c3" style={{ textDecoration: 'none' }}>
                                            <h6 className="text-dark">SOBRE A XBZ</h6>
                                        </button>
                                    </div>
                                    <div className="collapse" id="c3" data-bs-parent="#accordion">
                                        <div className="card-body d-flex flex-column">
                                            <Link href="/sobre">
                                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Sobre</a>
                                            </Link>
                                            <Link href="/contato">
                                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Contato</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="card">
                                    <div className="card-header p-0">
                                        <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#c4" style={{ textDecoration: 'none' }}>
                                            <h6 className="text-dark">AJUDA</h6>
                                        </button>
                                    </div>
                                    <div className="collapse" id="c4" data-bs-parent="#accordion">
                                        <div className="card-body d-flex flex-column">
                                            <Link href="/sac">
                                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Central de Atendimento</a>
                                            </Link>
                                            <Link href="/suporte">
                                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Suporte Técnico</a>
                                            </Link>
                                            <Link href="/politica">
                                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Políticas do Site</a>
                                            </Link>
                                            <Link href="/gravacao">
                                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Empresas de Gravação</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 py-3">
                            <h5>Fique por dentro</h5>
                            <span style={{ color: '#AFB1B2' }}>Receba direto em seu e-mail, lançamentos, destaques e muitas novidades para você e seu cliente.</span>
                            <form className="pt-2">
                                <input type="text" placeholder="Seu e-mail" className="form-control" />
                            </form>
                        </div>

                        <hr />
                        <div className="col-12">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="col-5">
                                    <span style={{ color: '#AFB1B2' }}>&copy; XBZ Brindes</span>
                                </div>
                                <div className="col-2">
                                    <Link href="/produtos">
                                        <a className="px-1"><img src={'https://via.placeholder.com/30'} alt="ajung Logo" className="img-fluid" /></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}