import axios from "axios";

export const addToOrder = async (product) =>{
    const res = await axios.post("http://localhost:8000/api/order/addproduct",
    {products: [product]},
    {withCredentials: true})
    return res?.data;
};



/*axios.post("http://localhost:8000/api/user/register",
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
        })*/