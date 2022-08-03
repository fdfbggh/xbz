export default function Item({ feature, products, attributeTranslateLabel }) {
    return (
        <>
            <th className={`pb-3`}>{feature}</th>

            {products.map(product => {
                const ref = product.features.find(
                    (f) => attributeTranslateLabel(f.feature) === feature,
                )
                let value
                if (ref) value = ref.value
                else value = '-'

                return (
                    <td className={`pb-3`}>{value}</td>
                )
            })}
        </>
    )
}

