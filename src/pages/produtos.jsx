import { useState, useEffect } from 'react'

import Categoria from '../../components/categoria'

import api from '../../services/api'
import Produto from '../../components/produto'

export default function Produtos() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        loadProducts();
    }, [])

    async function loadProducts() {
        await api.get(`/products`)
            .then(response => {
                setProducts(response.data.products.data);
            })
    }

    return (
        <>
            <Categoria products={products} category={{ name: 'Produtos' }} slug="Produtos" />

        </>
    )
}