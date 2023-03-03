import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
    return (<>
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
    </form>
    </>
        
     );
}

export default LoginForm;