import Link from 'next/link'
import { useState, useEffect } from 'react'
import api from '../../services/api'

export default function ProductCard({ slug, id, removeItem }) {
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
            <div className={`container p-0 pb-3`}>
                <div className={`row`}>

                    <div className={`col-4 col-md-2 d-flex align-items-center`}>
                        <Link href={`/brinde/${slug}`} >
                            <a>
                                <img src={product?.imagem.image_asset} alt="Imagens do produto" className="img-fluid" style={{ width: '100px', height: '100px' }} />
                            </a>
                        </Link>
                    </div>

                    <div className={`col-8 col-md-7 d-flex flex-column justify-content-center`}>
                        <button className={` d-md-none btn btn-link text-dark align-self-end`} style={{ textDecoration: 'none' }} onClick={() => alert(id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                            <span className={`ps-2`}>Remover</span>
                        </button>
                        <Link href={`/brinde/${slug}`} >
                            <a>
                                <p className={`h5 m-0`}>{product?.name}</p>
                                <p>{product?.slug}</p>
                            </a>
                        </Link>

                        <div className="d-flex justify-content-start align-items-center ">
                            {product?.colors.map((color, index) => {
                                return (
                                    <>
                                        <div className="pe-2">
                                            <button onClick={() => { colorActive === index.toString() ? setColorActive(null) : setColorActive(index.toString()) }} style={{ border: '0px', }}><div style={{ height: '20px', width: '20px', borderRadius: '50%' }} className={`color color-${color.color?.slug}`}></div></button>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div className={`d-none d-md-flex col-3 d-flex flex-column justify-content-center align-items-center`}>
                        <Link href={`/brinde/${slug}`} >
                            <button className={`btn btn-link text-dark`} style={{ textDecoration: 'none' }} onClick={() => { removeItem(id) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                                <span className={`ps-2`}>Editar Item</span>
                            </button>
                        </Link>
                        <button className={`btn btn-link text-dark`} style={{ textDecoration: 'none' }} onClick={() => { removeItem(id) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                            <span className={`ps-2`}>Remover Item</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}