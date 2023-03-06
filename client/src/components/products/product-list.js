import Item from "./item";

function ProductList({
    products,
    title,
    onFavoriteClick,
    onAddToOrderClick
}) {
    return ( <div className="container">
        <h2>{title}</h2>
        <div className="row">
            { products?.map(product => (
                <div className="col-xs-6 col-sm-4 col-md-3"> 
                    <Item 
                    product={product} 
                    onFavoriteClick={onFavoriteClick}
                    onAddToOrderClick={onAddToOrderClick} />
                </div>
            ))

            }

        </div>
    </div> );
}

export default ProductList;