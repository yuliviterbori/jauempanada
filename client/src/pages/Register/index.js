import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserData from "../../components/forms/UserData";

function RegisterForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [userData, setUserData] = useState({});
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const onSubmit = () => {
        setErrors({});
        axios.post("http://localhost:8000/api/user/register",
        {firstName, lastName, email, password, confirmPassword},
        {withCredentials: true}
        )
        .then((res)=>{
            if(res?.data?.user){
                setSuccess(true);
                setUserData(res?.data?.user);
            }
            setTimeout(() => {
                navigate("/")
              }, 1500);
            
        })
        .catch((err)=>{
            console.log(err);
            if(err?.response?.data?.errors){
                console.log(err?.response?.data?.errors)
                setErrors(err?.response?.data?.errors);
            }
        })
    }
    return (
        <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <h2>Registrar usuario</h2>
            <UserData 
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onSubmit={onSubmit}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                errors={errors}
            />
            {
                success && (
                    <div className="alert alert-success mt-5" role="alert">
                        <h4 className="alert-heading">Bienvenido/a {userData?.firstName}!</h4>
                        <p>Ingresa</p>
                    </div>
                )
            }
          </div>
          <div className="col">
            <img src="https://empanadasdonoso.com.py/assets/img/gallery/big/e1-compressed_opt.jpg" style={{maxWidth: "100%"}} />
          </div>
        </div>
      </div>        
     );
}

export default RegisterForm;
