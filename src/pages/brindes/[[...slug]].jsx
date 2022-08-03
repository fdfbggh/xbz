import api from '../../../services/api'
import Categoria from '../../../components/categoria'

export default function Brindes({ products }) {
    return (
        <>
            <Categoria products={products} category={{ name: 'Resultado da Busca' }} slug="Produtos" />
        </>
    )
}

export async function getServerSideProps(context) {
    const { query } = context.query

    const res = await api.get(`/products?page=1&query=${query}`)

    return {
        props: {
            products: res.data.products.data
        }
    }
}