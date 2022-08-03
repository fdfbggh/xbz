export default function Empresa({ pathLogo, nome, site, local, endereco, telefone }) {
    let random = Math.floor(Math.random() * 100000);
    return (
        <>
            <div className="col-md-3 mb-3">
                <img src={pathLogo} alt="Logo marca da empresa" className="img-fluid" style={{ border: '1px solid #ccc', width: '100%' }} />
                <h5>{nome}</h5>
                <p className="mb-2"><small>{site}</small></p>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{local}</span>
                <p className="m-0" style={{ fontSize: '12px' }}>{endereco}</p>
                <p style={{ fontSize: '12px' }}>Telefone: {telefone}</p>

                <div className="d-flex justify-content-end">
                    <button className="btn btn-link text-dark p-0" data-bs-toggle="collapse" data-bs-target={`#area${random}`} style={{ fontSize: '12px', textDecoration: 'none' }}>Ver mais...</button>
                </div>
                <div id={`area${random}`} className="collapse mt-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea molestiae explicabo quis obcaecati perferendis cumque enim cupiditate hic ullam. Saepe nobis delectus quidem facilis, fugit quibusdam voluptatem beatae eos.</p>
                </div>
            </div >
        </>
    )
}