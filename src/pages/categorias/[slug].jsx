import Link from 'next/link'
import { useState } from 'react'

import api from '../../../services/api'
import Categoria from '../../../components/categoria'

export default function Category({ slug, products, category, colors }) {
    const [visibility, setVisibility] = useState('none')

    function toggleVisibility() {
        if (visibility === 'none') {
            setVisibility('block');
        } else if (visibility === 'block') {
            setVisibility('none')
        }

    }
    return (
        <>
            <Categoria products={products} category={category} slug={slug} />

            <div className={`d-none d-md-flex bg-dark text-light align-items-center`} style={{ width: '50px', height: '100px', position: 'fixed', top: '50vh', right: '0', borderRadius: '10px 0px 0px 10px', cursor: 'pointer' }} onClick={toggleVisibility}>FILTROS</div>

            <div className={`container-fluid d-${visibility} bg-light`} style={{ width: '20vw', height: '70vh', position: 'fixed', top: '20vh', right: '0' }}>
                <div className={`row bg-dark text-light py-2`}>
                    <div className={`col`} style={{ cursor: 'pointer' }} onClick={toggleVisibility}>
                        <span className={`h6 pe-2`}>Filtros</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg>
                    </div>
                </div>

                <h6 className={`pt-3`}>Cores</h6>
                <div className={`d-flex flex-wrap`}>
                    {colors?.map(color => (
                        <>
                            <Link href={`/categorias/${slug}?cor=${color.slug}`}>
                                <a>
                                    <div className={`ms-2 color-square color-${color.slug}`} key={color.id} style={{ width: '40px', height: '25px', borderRadius: '5px' }}>.</div><br />
                                </a>
                            </Link>
                        </>
                    ))}
                </div>
                <hr />


            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const slug = context.query.slug

    let url = `/products`
    let colorsUrl = `/colors`

    const urlParams = []

    const sorts = ['price', 'name', 'code']
    for (let i in context.query) {
        // console.log('1')
        if (i != 'slug' && !sorts.includes(i)) {
            console.log('2')
            urlParams.push(`${i}=${context.query[i]}`)
        }

        if (sorts.includes(i)) {
            console.log('3')
            urlParams.push(`sort=${i}`)
            // urlParams.push(`direction=${context.query[i]}`)
        }
    }

    let categories = ""
    console.log(categories)
    if (context.params.slug != undefined) {
        // categories = context.params.slug.join("/")
        url += `/category/${slug}`
        colorsUrl = `/colors?category_slug=${slug}`
    }

    if (urlParams.length > 0) {
        url += '?' + urlParams.join('&')
    }
    const res = await api.get(url)
    const colors = await api.get(colorsUrl)

    return {
        props: {
            slug,
            products: res.data.products.data,
            category: res.data.category,
            colors: colors.data,
        },
    }
}