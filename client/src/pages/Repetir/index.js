import { useState, useEffect } from "react";
import axios from "axios";

function RepetirPedido() {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/order/all", {withCredentials: true})
            .then(res => {
                const newProducts = res.data;
                console.log("all orders", newProducts)
                setOrders(newProducts?.orders)
        })
    },[])
    console.log(orders)

    return ( <div className="container">
        {orders && orders?.map(order =>(
            <div className="card mt-3" key={order?._id}>
                <div className="card-body">
                    <h5 className="card-title">
                        Order # {order?._id}
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">{order?.createdAt}</h6>
                    <div className="row align-items-center">
                        <div className="col">
                            <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Un.</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            { order && order?.products?.map( pro => (
                                <tr key={pro?._id}>
                                <td>{pro?.quantity}</td>
                                <td>{pro?.title}</td>
                                <td>{pro?.price}</td>
                                <td>{pro?.subtotal}</td>
                                <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                </svg>
                                </td>
                                </tr>
                            ))}
                            
                            <tr>
                                <th></th>
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td scope="row">G. {order?.total}</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary">Repetir pedido</button>
                        </div>
                    </div>
                    
                </div>
            </div>

        ))}
    </div> );
}

export default RepetirPedido;