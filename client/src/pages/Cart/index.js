import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
    const [order, setOrder] = useState({});
    const [noOrder, setNoOrder] =useState(false);
    const [finalizandoPedido, setFinalizandoPedido] = useState(false);
    useEffect(()=>{
      axios.get("http://localhost:8000/api/order", {withCredentials: true})
            .then(res => {
                const lastorder = res?.data?.order;
                console.log("order", lastorder)
                setOrder(lastorder)
        })
        .catch(err => {
          console.log("Error al traer la orden", err);
          setNoOrder(true);
        })
    },[])

    const finalizarPedido = async () => {
      setFinalizandoPedido(true);
      try{
        const res = axios.post("http://localhost:8000/api/order/archive", {}, {withCredentials: true});
        if(res?.data){
          setFinalizandoPedido(false);
          console.log("Pedido finalizado",res.data)
        }
      }catch(err){
        console.log("Hubo un error al intentar finalizar el pedido", err);
        setFinalizandoPedido(false);
      }
    }

    return <div className="container text-center">
    <div className="row">
      <div className="col">
          <h2>Resumen</h2>
        { !noOrder ? (
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
        ) : (
          <div>No hay nada agregado al pedido</div>
        )

        }
      
      </div>
      <div className="col">
        <button className="btn btn-primary mt-5" disabled={finalizandoPedido} onClick={finalizarPedido}>Finalizar Pedido</button>
        <br />
        <Link className="btn btn-primary mt-5" to="/products">Seguir comprando</Link>
      </div>
    </div>
  </div>
  };
  
  export default Cart;