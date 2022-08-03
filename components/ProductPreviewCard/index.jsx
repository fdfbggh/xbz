import { useState, useEffect } from 'react'
import api from '../../services/api'

export default function ProductCard({ slug }) {
    const [product, setProduct] = useState();

    useEffect(() => {
        loadProduct(slug)
    }, [])

    async function loadProduct(slug) {
        await api.get(`/products/${slug}`)
            .then(response => {
                setProduct(response.data.product);
            })
    }

    return (
        <>
            <div className={`container p-0 pb-3 w-100`}>
                <div className={`row`}>
                    <div className={`col-3 pe-0 d-flex align-items-center justify-content-center  `}>
                        <img src={product?.imagem.image_asset} alt="Imagens do produto" className="img-fluid" style={{ width: '100px', height: '100px' }} />
                    </div>
                    <div className={`col-6 d-flex flex-column justify-content-center align-items-center`}>
                        <p className={`h5 m-0`}>{product?.name}</p>
                        <p>{product?.slug}</p>
                    </div>
                    <div className={`col-3 d-flex flex-column justify-content-center  align-items-center`}>
                        <button className={`btn btn-danger`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg></button>
                    </div>
                </div>
            </div>
        </>
    )
}