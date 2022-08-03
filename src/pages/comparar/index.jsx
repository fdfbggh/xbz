import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useState, useEffect } from 'react';
import Link from 'next/link'

import api from '../../../services/api'
import styles from './styles.module.css';
import Item from '../../../components/item'
import Linha from '../../../components/linha'

export default function Comparar({ getProductList }) {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        loadProducts()
        if (getProductList != null) {
            setProductsList(JSON.parse(getProductList))
        }
    }, [])

    const feats = {}

    function beautifyName(name) {
        let nocap = ['de', 'do', 'da', 'o', 'para', 'e', 'a', 'c/']

        let capitalizeFirst = (name) => {
            return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        }
        return (
            (name &&
                name
                    .split(' ')
                    .map((word) => {
                        return !nocap.includes(word.toLowerCase())
                            ? capitalizeFirst(word)
                            : word.toLowerCase()
                    })
                    .join(' ')) ||
            ''
        )
    }

    const attributeTranslateLabel = (w) => {
        if (!w) return ''
        const table = [
            ['Dimensão', 'Dimensões'],
            ['Dimensao', 'Dimensões'],
            [' do Produto', ' Produto'],
            [' da aixa', ' caixa'],
            [' por caixa', ' caixa'],
            [' por caixinha', ' caixinha'],
            ['quant.', 'quant '],
        ]
        var toTranslate = w
        table.map((tr) => {
            let rex = new RegExp(tr[0], 'gi')
            toTranslate = toTranslate.replace(rex, tr[1])
        })
        toTranslate = beautifyName(toTranslate)
        return toTranslate.trim()
    }


    productsList.map((product) => {
        const { features } = product
        features.map((feature) => {
            let featureName = attributeTranslateLabel(feature.feature)
            feats[featureName] = 1
        })
    })

    async function loadProducts() {
        if (getProductList) {
            await api.get(`/products/${getProductList.slug}`)
                .then(response => {
                    setProducts(response.data.product);
                })
        }
    }

    function removeItem(id) {
        console.log(productsList)
        let aux = productsList.filter((item) => item.id !== id);
        console.log(aux)

        if (aux.length > 0) {
            setCookie(null, 'XBZ_PRODUCT_LIST', JSON.stringify(aux), {
                path: '/',
                maxAge: 86400 * 99999,
            });
        } else {
            destroyCookie(null, 'XBZ_PRODUCT_LIST')
        }
        document.location.reload(true);
    }

    return (
        <div className={`container mb-5`}>
            <h1 className={`py-5`}>Comparar</h1>

            {productsList?.length > 0 ? (
                <table className={`mb-5 w-100`} >
                    <tbody>
                        <tr>
                            <th style={{ height: '100px' }}>Produto</th>

                            {productsList.map((product) => (
                                <td className={`pb-3`}>
                                    <Link href={`/brinde/${product.slug}`}>
                                        <a>
                                            <img src={product.img} style={{ width: '150px' }} /><br />
                                            {product.name}<br />
                                            <small>{product.code}</small>
                                        </a>
                                    </Link>
                                </td>
                            ))}
                        </tr>

                        <tr>
                            <th className={`pb-3`}>Cores</th>
                            {productsList.map((product) => (
                                <td className={`pb-3`}>
                                    <div className={`d-flex`}>
                                        {product.colors?.map(cor => (
                                            <div style={{ height: '20px', width: '20px', borderRadius: '50%', cursor: 'pointer' }} className={`me-2 color color-${cor.color.slug}`}></div>
                                        ))}
                                    </div>
                                </td>
                            ))}
                        </tr>

                        {Object.keys(feats).map((feature) => {
                            var featureName = attributeTranslateLabel(feature)

                            return (
                                <Linha feature={featureName} products={productsList} attributeTranslateLabel={attributeTranslateLabel} removeItem={removeItem} />
                            )
                        })}

                        <tr>
                            <th className={`pb-3`}>&nbsp;</th>

                            {productsList.map(product => (
                                <td className={`pb-3`}>
                                    <button className={`btn btn-secondary`} onClick={() => removeItem(product.id)}>Remover</button>
                                </td>
                            ))}
                        </tr>

                    </tbody>
                </table>
            ) :
                <p className={`h2 text-center pb-5`}>Não Há Itens</p>
            }

        </div >
    )
}

export async function getServerSideProps(context) {
    const { XBZ_PRODUCT_LIST } = parseCookies(context)
    let getProductList
    XBZ_PRODUCT_LIST ? getProductList = XBZ_PRODUCT_LIST : getProductList = null

    return {
        props: {
            getProductList
        },
    }
}