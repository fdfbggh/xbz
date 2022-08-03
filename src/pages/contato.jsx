export default function Contato() {
    return (
        <>
            <section>
                <div className={`container-fluid d-md-none`}>
                    <div className={`row`}>
                        <div className={`col-12`}>
                            <p className={`h1`}>Contate-nos</p>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container" style={{ padding: '0px' }}>
                    <div className="row" style={{ margin: '0px' }}>
                        <div className="col-md-8 p-4 p-md-5 ps-md-1 d-flex flex-column align-items-center justify-content-center" style={{ padding: '0px', backgroundColor: '#023564' }}>
                            {/* <img src={'https://via.placeholder.com/2000x500'} alt="language" className="img-fluid" /> */}
                            <h1 className="text-light">Venha nos visitar</h1>
                            <h3 className="text-light">Rua Antônio Pais, 90-94</h3>
                            <h3 className="text-light">São Paulo - SP</h3>
                            <h3 className="text-light">Cep 01027-020 - Centro</h3>
                            <a href="https://www.waze.com/" target="_blank" className="text-light btn btn-link align-self-end justify-content-center">Ver no Waze</a>
                        </div>
                        <div className="d-none d-md-block col-md-4 pe-1" style={{ padding: '0px' }}>
                            <img src='/images/Mask_Group_75.jpg' alt="language" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container pb-5" style={{ padding: '0px' }}>
                    <div className="row pt-3 pt-md-5 justify-content-between" style={{ margin: '0px' }}>
                        <div className="col-md-6 px-3 pb-5" style={{ padding: '0px' }}>
                            <div className={`d-none d-md-block`}>
                                <p className={`h1`}>Contate-nos</p>
                                <span>Escreva para a gente, responderemos o mais rápido possivel.</span>
                            </div>
                            <form>
                                <div className="my-3">
                                    <label for="inputName" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="inputName" />
                                </div>
                                <div className="my-3">
                                    <label for="inputEmail" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="inputEmail" />
                                </div>
                                <div className="my-3">
                                    <label for="inputTelephone" className="form-label">Telefone</label>
                                    <input type="text" className="form-control" id="inputTelephone" />
                                </div>
                                <div className="my-3">
                                    <label for="inputMessage" className="form-label">Mensagem</label>
                                    <textarea className="form-control" id="inputMessage" rows="10" />
                                </div>
                                <button type="submit" className="btn btn-primary w-25" style={{ borderRadius: '20px' }}>Enviar</button>
                            </form>
                        </div>

                        <div className="col-md-6 px-3 d-flex flex-column justify-content-start" style={{ padding: '0px' }}>
                            <div className="row">
                                <h5>Por telefone</h5>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</span>
                                <strong className="py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span className="ps-2">(11) 2565-1428</span>
                                </strong>
                            </div>

                            <div className="row d-flex flex-column pt-5">
                                <h5>Faturamento</h5>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</span>
                                <strong className="py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span className="ps-2">(11) 2565-1428</span>
                                </strong>
                                <strong className="py-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor" viewBox="0 0 16 16">
                                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                                    </svg>
                                    <span className="ps-2">coleta@xbzbrindes.com.br</span>
                                </strong>
                            </div>

                            <div className="row d-flex flex-column pt-5">
                                <h5>Expedição</h5>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</span>
                                <strong className="py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span className="ps-2">(11) 2565-1428</span>
                                </strong>
                            </div>

                            <div className="row d-flex flex-column pt-5">
                                <h5>Financeiro</h5>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</span>
                                <strong className="py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span className="ps-2">(11) 2565-1428</span>
                                </strong>
                                <strong className="py-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor" viewBox="0 0 16 16">
                                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                                    </svg>
                                    <span className="ps-2">coleta@xbzbrindes.com.br</span>
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 px-3">
                            <h5>Marketing/Web</h5>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>

                        <div className="col-md-6 pt-5 pt-md-0 px-3 d-flex flex-column justify-content-start" style={{ padding: '0px' }}>
                            <h5>Administração</h5>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-3 py-md-5" style={{ fontSize: '14px' }}>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-6 d-flex flex-column">
                            <strong className="py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                <span className="ps-2">Jonathan</span>
                            </strong>
                            <strong className="py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <span className="ps-2">(11) 2565-1421 / (11) 99918-7553</span>
                            </strong>
                            <strong className="py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor" viewBox="0 0 16 16">
                                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                                </svg>
                                <span className="ps-2">mkt@xbzbrindes.com.br</span>
                            </strong>
                        </div>

                        <div className="col-md-6 d-flex">
                            <div className="row">
                                <div className="col-md-6 d-flex flex-column  py-3">
                                    <strong className="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                        </svg>
                                        <span className="ps-2">Vinicius</span>
                                    </strong>
                                    <strong className="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                        </svg>
                                        <span className="ps-2">(11) 2565-1421 / (11) 99918-7553</span>
                                    </strong>
                                    <strong className="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor" viewBox="0 0 16 16">
                                            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                                        </svg>
                                        <span className="ps-2">mkt@xbzbrindes.com.br</span>
                                    </strong>
                                </div>

                                <div className="col-md-6 d-flex flex-column py-md-3">
                                    <strong className="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                        </svg>
                                        <span className="ps-2">Cleberson</span>
                                    </strong>

                                    <strong className="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                        </svg>
                                        <span className="ps-2">(11) 2565-1421 / (11) 99918-7553</span>
                                    </strong>

                                    <strong className="py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor" viewBox="0 0 16 16">
                                            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                                        </svg>
                                        <span className="ps-2">mkt@xbzbrindes.com.br</span>
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}