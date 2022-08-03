import Item from './item'

export default function Linha({ feature, products, attributeTranslateLabel }) {
    return (
        <tr>
            <Item feature={feature} products={products} attributeTranslateLabel={attributeTranslateLabel} />
        </tr>
    )
}