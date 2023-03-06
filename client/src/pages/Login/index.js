import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const onSubmit = () => {
        axios.post("http://localhost:8000/api/user/login",
        {email, password},
        {withCredentials: true}
        )
        .then((res)=>{
            console.log(res)
            setTimeout(() => {
                navigate("/")
              }, 1500);
            
        })
        .catch((err)=>{
            console.log(err);
            if(err?.response?.data?.errors){
                console.log(err?.response?.data?.errors)
            }
        })
    }
    return (
    <div class="container text-center">
    <div class="row align-items-center">
      <div class="col">
        <h2>Ingresar</h2>
        <form className="col-6 mx-auto" onSubmit={(e)=>{
                e.preventDefault();
                onSubmit();
            }}>
            <div className="form-group pt-3">
                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    type="email" 
                    className="form-control form-control-lg" 
                    placeholder="Ingresa tu email" 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group pt-3">
                <label htmlFor="password">Password</label>
                <input 
                    id="password" 
                    type="password" 
                    className="form-control form-control-lg" 
                    placeholder="Ingresa tu contrasena" 
                    value={password} 
                    onChange={e=>setPassword(e.target.value)}/>
            </div>
            
            <button type="submit" className="btn btn-primary btn-lg w-100 mt-4">Ingresar</button>

            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/register">No tienes una cuenta? Crear cuenta</Link>
        </form>
      </div>
      <div class="col">
        <img src="https://empanadasdonoso.com.py/assets/img/gallery/big/e1-compressed_opt.jpg" style={{maxWidth: "100%"}} />
      </div>
    </div>
  </div>  
        
     );
}

export default LoginForm;