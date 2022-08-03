import Link from 'next/link'
import { useState } from 'react'
import styles from './styles.module.css'


export default function Produto({ img, slug, name, colors, width }) {
    const [urlImage, setUrlImage] = useState('')

    return (
        <>
            <div className={`mb-1 mb-md-0 col-12 d-flex d-md-block col-md-${width}`} id={styles.container}>
                <div className={`col-4 col-md-12`}>
                    <Link href={`/brinde/${slug}`}>
                        <a style={{ textDecoration: 'none', color: 'black', }} >
                            {!urlImage &&
                                <img src={img} alt={slug} style={{ width: '100%' }} />
                            }

                            {urlImage &&
                                <img src={urlImage} alt="Imagens do produto" className="img-fluid" />
                            }

                        </a>
                    </Link>
                </div>

                <div className={`d-md-none col-8 col-md-12 ps-3`}>
                    <Link href={`/brinde/${slug}`}>
                        <div className={`row`}>
                            <div className={`col-12`}>
                                <a style={{ textDecoration: 'none', color: 'black', }} >
                                    <div>
                                        <strong>{name}</strong>
                                        <p className={`mb-2`}>{slug}</p>
                                    </div>
                                </a>
                            </div>
                            <div className={`col-12 d-flex`}>
                                {colors.map((color, key) => {
                                    return (
                                        <>
                                            <div className="col-1 pe-4">
                                                <div style={{ height: '15px', width: '15px', borderRadius: '50%', cursor: 'pointer' }} className={`color color-${color.color?.slug}`} onMouseOver={() => { setUrlImage(color.images[0]?.image_asset) }}></div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </Link>
                </div>



                <div className="d-none d-md-flex col-4 col-md-12 d-flex justify-content-center align-items-center mb-2 g-0">

                    {colors.map((color, key) => {
                        return (
                            <>
                                <div className="col-1 pe-4">
                                    <div style={{ height: '15px', width: '15px', borderRadius: '50%', cursor: 'pointer' }} className={`color color-${color.color?.slug}`} onMouseOver={() => { setUrlImage(color.images[0]?.image_asset) }}></div>
                                </div>
                            </>
                        )
                    })}

                </div>

                <div className={`d-none d-md-block`}>
                    <Link href={`/brinde/${slug}`}>
                        <a style={{ textDecoration: 'none', color: 'black', }} >
                            <div className="px-3">
                                <strong>{name}</strong>
                                <p>{slug}</p>
                            </div>
                        </a>
                    </Link>
                </div>

            </div>
        </>
    )
}