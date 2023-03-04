import axios from "axios";

const getInitialValues = async () => {
    const res = await axios.get("http://localhost:8000/api/user", {withCredentials: true})
    console.log("user", res?.data)
    return res?.data?.user
}

function User() {
    getInitialValues()

    return ( 
        <div>Editar usuario</div>
     );
}

export default User;