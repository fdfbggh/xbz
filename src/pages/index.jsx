import api from '../../services/api'

import Banner from '../../components/banner'
import BannerSlider from '../../components/bannerSlider'
import YoutubeVideo from '../../components/youtubeVideo'
import ProductsSlider from '../../components/productsSlider'

export default function Home({ products, banners }) {
  return (
    <>
      <section>
        <BannerSlider />
      </section>

      <section>
        <div className="container-fluid">
          <div className="row py-1">
            <Banner size="4" src={`https://asia.ajung.site/files/banners/${banners[2].image}`} alt="Baner" width="100%" height="620px" />
            <Banner size="4" src={`https://asia.ajung.site/files/banners/${banners[0].image}`} alt="Baner" width="100%" height="620px" />
            <Banner size="4" src={`https://asia.ajung.site/files/banners/${banners[3].image}`} alt="Baner" width="100%" height="620px" />
          </div>
          <div className="row py-1">
            <Banner size="8" src={`https://asia.ajung.site/files/banners/${banners[1].image}`} alt="Baner" width="100%" height="620px" />
            <Banner size="4" src={`https://asia.ajung.site/files/banners/${banners[0].image}`} alt="Baner" width="100%" height="620px" />
          </div>
          <div className="row py-1">
            <Banner size="4" src={`https://asia.ajung.site/files/banners/${banners[3].image}`} alt="Baner" width="100%" height="620px" />
            <Banner size="8" src={`https://asia.ajung.site/files/banners/${banners[2].image}`} alt="Baner" width="100%" height="620px" />
          </div>
        </div>
      </section>

      <section className={`py-5`}>
        <YoutubeVideo src="LhKb956SF8Y" width="560" height="315" />
      </section>

      <section>
        <ProductsSlider title="Mais Vendidos" products={products} productWidth="12" />
      </section>
    </>
  )
}

export async function getServerSideProps() {
  const res = await api.get('/products/most-visited')
  const banners = await api.get('/banners')

  return {
    props: {
      products: res.data,
      banners: banners.data,
    }
  }


}