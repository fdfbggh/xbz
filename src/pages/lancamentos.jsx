import api from '../../services/api'
import Produto from '../../components/produto'

export default function Lancamentos({ products }) {
    return (
        <>

            <div className="container-fluid">
                <div className="row py-5">
                    <h1 className="text-uppercase text-center pb-5">Lançamentos</h1>
                    {products.map((product, index) => (
                        <Produto key={product.id} img={product.imagem.image_asset} name={product.name} slug={product.slug} productId={product.code} colors={product.colors} />
                    ))}
                </div>
            </div>


        </>
    )
}


export async function getServerSideProps() {
    const res = await api.get('/products/launchs')

    return {
        props: {
            products: res.data
        }
    }

}