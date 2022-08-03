import Link from 'next/link'
import styles from './style.module.css'

export default function ProductSearch({ product, clickProduct }) {
    return (
        <>
            <Link href={`/brinde/${product.slug}`}>
                <a onClick={clickProduct}>
                    <div className={`row d-flex align-items-center mb-3`}>
                        <div className={`col-3`}>
                            <img src={product.imagem.image_asset} alt={product.slug} style={{ width: '100px' }} />
                        </div>
                        <div className={`col`}>
                            <strong>{product.name}</strong>
                            <p>{product.code}</p>
                        </div>
                    </div>
                </a>
            </Link>
            <hr />
        </>
    )
}