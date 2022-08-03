import Link from 'next/link'

export default function () {
    return (
        <footer className="d-none d-md-block ">
            <section>
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-2 d-flex flex-column">
                            <h5>Menu</h5>
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
                        <div className="col-md-2 d-flex flex-column">
                            <h5>Sobre a XBZ</h5>
                            <Link href="/sobre">
                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Sobre</a>
                            </Link>
                            <Link href="/contato">
                                <a style={{ color: '#AFB1B2', textDecoration: 'none' }}>Contato</a>
                            </Link>
                        </div>
                        <div className="col-md-2 d-flex flex-column">
                            <h5>Ajuda</h5>
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
                        <div className="col-md-3">
                            <h5>Fique por dentro</h5>
                            <span style={{ color: '#AFB1B2' }}>Receba direto em seu e-mail, lançamentos, destaques e muitas novidades para você e seu cliente.</span>
                            <form className="pt-2">
                                <input type="text" placeholder="Seu e-mail" className="form-control" />
                            </form>
                        </div>
                        <div className="col-md-3">
                            <h5>Siga-nos</h5>
                            <span style={{ color: '#AFB1B2' }}>Perodicamente a XBZ Brindes publica nas principais redes sociais seus lançamentos e destaque. Fique por dentro!</span>
                            <div className="d-flex pt-2">
                                <a href="https://instagram.com" className="px-1" target="_blank"><img src={'https://via.placeholder.com/30'} alt="language" className="img-fluid" /></a>
                                <a href="https://facebook.com" className="px-1" target="_blank"><img src={'https://via.placeholder.com/30'} alt="language" className="img-fluid" /></a>
                                <a href="https://linkedin.com" className="px-1" target="_blank" ><img src={'https://via.placeholder.com/30'} alt="language" className="img-fluid" /></a>
                                <a href="https://youtube.com" className="px-1" target="_blank"><img src={'https://via.placeholder.com/30'} alt="language" className="img-fluid" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section>
                <div className="container">
                    <div className="row py-2">
                        <div className="col-md-1" >
                            <img src='/images/LOGO_XBZ_04.svg' alt="language" className="img-fluid" />
                        </div>

                        <div className="col d-flex justify-content-center align-items-center">
                            <span>&copy; XBZ Brindes - Rua Antônio Paes, 94. São Paulo/SP 01027-020</span>
                        </div>

                        <div className="col-md-4 d-flex justify-content-between align-items-center">
                            <Link href="/" >
                                <a className="text-dark">Termos de uso</a>
                            </Link>
                            <Link href="/" >
                                <a className="text-dark">Politica de Privacidade</a>
                            </Link>
                            <Link href="/" >
                                <a >
                                    <img src={'https://via.placeholder.com/30'} alt="language" className="img-fluid" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}