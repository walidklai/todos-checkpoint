import React from 'react'
import propTypes from 'prop-types'
const ProductTable = (props) => {
    return (
        <div>
            {props.products.map(produit => <div>
                <td>{produit.name} </td>
                <td>{produit.price} </td>
                <td>{produit.category} </td>
            </div>)}
        </div>
    )
}

ProductTable.propTypes={
    products : propTypes.array
}
export default ProductTable