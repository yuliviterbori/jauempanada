import { useState } from "react";
import { addToOrder } from "../../utils/order";

function Item({
    product,
    onFavoriteClick
}) {
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] =useState(!!product?.isFavorite)
    const onSubmit = e => {
      e.preventDefault();
      addToOrder({
        productId: product?._id,
        title: product?.title,
        price: product?.price,
        quantity: quantity
      })
    }
    return ( <div className="card" style={{width: "100%",maxWidth: "18rem", position: "relative"}}>
    <img src={product?.image} className="card-img-top" alt={product?.title} />
    <div className="card-body">
      <h5 className="card-title">{product?.title}</h5>
      <p className="card-text">G. {product?.price}</p>
      <form className="row align-items-center" onSubmit={onSubmit} >
        <div className="col-6">
          <div className="input-group">
            <div className="input-group-text">Un.</div>
            <input type="number" className="form-control" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
          </div>
        </div>

        <div className="col-6">
          <button type="submit" className="btn btn-primary">Agregar</button>
        </div>
      </form>
      <div>
      <button 
      onClick={()=>{setIsFavorite(!isFavorite); onFavoriteClick(product?._id);}}
      style={{border: "none", backgroundColor: "white", borderRadius: "50%", position: "absolute", top: "10px", right: "10px",width: "35px", height: "35px"}}>
        { isFavorite ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill text-brown" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart text-brown" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        )

        }
      </button>
      
      </div>
    </div>
  </div> );
}

export default Item;