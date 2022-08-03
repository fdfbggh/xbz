import Mesario from '../../components/mesario'

export default function Sac() {
    return (
        <>
            <section>
                <div className="container py-3 py-md-5 mb-3 mb-md-0" style={{ padding: '0px' }}>
                    <div className="row" style={{ margin: '0px' }}>
                        <div className="col-12 d-flex flex-column align-items-center" style={{ padding: '0px' }}>
                            <h1 align='center'>Central de Atendimento - SAC</h1>
                            <span>PABX 2565-1400</span>
                            <span>SAC (11) 2565-1400</span>
                            <span>sac@xbzbrindes.com.br</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0" style={{ padding: '0px' }}>
                            <h4 className={`px-2 px-md-0`} style={{ color: '#026395' }}>Vendas dentro de SP</h4>
                            <span className={`px-2 px-md-0`} style={{ color: '#026395' }}>Gerente Fábio</span>
                        </div>
                        <div className="col-md-6 d-none d-md-block" style={{ padding: '0px' }}>
                            <h4 className={`px-2 px-md-0`} style={{ color: '#026395' }}>Vendas fora de SP</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container pb-5" style={{ padding: '0px' }}>
                    <div className="row" style={{ margin: '0px' }}>

                        <div className="col-md-6 pe-md-3" style={{ padding: '0px' }}>
                            <div className="row justify-content-center">
                                <div className="col-11 col-11 col-md-6 pb-3 pb-md-0 py-md-3">
                                    <Mesario titulo="Mesa 1" nome="Juliana Silva" assistente="Thais Albuquerque" telefone="(11) 2565-1403" whatsapp="(11) 2565-1400" email="juliana@xbzbrindes.com.br" />
                                </div>
                                <div className="col-11 col-md-6 pb-3 pb-md-0 py-md-3">
                                    <Mesario titulo="Mesa 2" nome="Juliana Silva" assistente="Thais Albuquerque" telefone="(11) 2565-1403" whatsapp="(11) 2565-1400" email="juliana@xbzbrindes.com.br" />
                                </div>
                                <div className="col-11 col-md-6 pb-3 pb-md-0 py-md-3">
                                    <Mesario titulo="Mesa 3" nome="Juliana Silva" assistente="Thais Albuquerque" telefone="(11) 2565-1403" whatsapp="(11) 2565-1400" email="juliana@xbzbrindes.com.br" />
                                </div>
                                <div className="col-11 col-md-6 pb-3 pb-md-0 py-md-3">
                                    <Mesario titulo="Mesa 4" nome="Juliana Silva" assistente="Thais Albuquerque" telefone="(11) 2565-1403" whatsapp="(11) 2565-1400" email="juliana@xbzbrindes.com.br" />
                                </div>
                                <div className="col-11 col-md-6 pb-3 pb-md-0 py-md-3">
                                    <Mesario titulo="Mesa 5" nome="Juliana Silva" telefone="(11) 2565-1403" whatsapp="(11) 2565-1400" email="juliana@xbzbrindes.com.br" />
                                </div>
                                <div className="col-11 col-md-6 pb-3 pb-md-0 py-md-3">
                                    <Mesario titulo="Mesa 6" nome="Juliana Silva" telefone="(11) 2565-1403" whatsapp="(11) 2565-1400" email="juliana@xbzbrindes.com.br" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mx-2 mx-md-0 pe-md-3" style={{ padding: '0px' }}>
                            <h4 className={`d-md-none px-2 pt-5 pb-3`} style={{ color: '#026395' }}>Vendas fora de SP</h4>

                            <div className="row">
                                <div className="col-11 col-md-6 pb-3 pb-md-0 py-md-3">
                                    <Mesario titulo="Mesa 1" nome="Juliana Silva" assistente="Thais Albuquerque" telefone="(11) 2565-1403" whatsapp="(11) 2565-1400" email="juliana@xbzbrindes.com.br" />
                                </div>
                                <div className="col-11 col-md-6 pb-3 pb-md-0 py-md-3">
                                    <Mesario titulo="Mesa 2" nome="Juliana Silva" assistente="Thais Albuquerque" telefone="(11) 2565-1403" whatsapp="(11) 2565-1400" email="juliana@xbzbrindes.com.br" />
                                </div>
                                <div className="col-11 col-md-6 pb-3 pb-md-0 py-md-3">
                                    <Mesario titulo="Mesa 3" nome="Juliana Silva" assistente="Thais Albuquerque" telefone="(11) 2565-1403" whatsapp="(11) 2565-1400" email="juliana@xbzbrindes.com.br" />
                                </div>
                                <div className="col-11 col-md-6 pb-3 pb-md-0 py-md-3">
                                    <Mesario titulo="Mesa 4" nome="Juliana Silva" assistente="Thais Albuquerque" telefone="(11) 2565-1403" whatsapp="(11) 2565-1400" email="juliana@xbzbrindes.com.br" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}