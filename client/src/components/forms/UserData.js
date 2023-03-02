function UserData({
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
    confirmPassword,
    setConfirmPassword,
    btnText,
    errors
}) {
    console.log("error", errors)
    return ( 
        <form className="col-6 mx-auto" onSubmit={(e)=>{
            e.preventDefault();
            onSubmit();
        }}>
        <div className="form-group pt-3">
            <label htmlFor="firstName">Nombre</label>
            <input 
                id="firstName" 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Ingresa tu nombre" 
                value={firstName} 
                onChange={e=>setFirstName(e.target.value)}/>
            { errors && errors?.firstName && (
                <small class="form-text text-danger">
                    {errors?.firstName?.message}
                </small>
            )}
        </div>
        <div className="form-group pt-3">
            <label htmlFor="lastName">Apellido</label>
            <input 
                id="lastName" 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Ingresa tu apellido" 
                value={lastName} 
                onChange={e=>setLastName(e.target.value)}/>
            { errors && errors?.lastName && (
                <small class="form-text text-danger">
                    {errors?.lastName?.message}
                </small>
            )}
        </div>
        <div className="form-group pt-3">
            <label htmlFor="email">Email</label>
            <input 
                id="email" 
                type="email" 
                className="form-control form-control-lg" 
                placeholder="Ingresa tu email" 
                value={email} 
                onChange={e=>setEmail(e.target.value)}/>
            { errors && errors?.email && (
                <small class="form-text text-danger">
                    {errors?.email?.message}
                </small>
            )}
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
            { errors && errors?.password && (
                <small class="form-text text-danger">
                    {errors?.password?.message}
                </small>
            )}
        </div>
        <div className="form-group pt-3">
            <label htmlFor="cpassword">Comfirmar Password</label>
            <input 
                id="cpassword" 
                type="password" 
                className="form-control form-control-lg" 
                placeholder="Ingresa tu contrasena" 
                value={confirmPassword} 
                onChange={e=>setConfirmPassword(e.target.value)}/>
            { errors && errors?.confirmPassword && (
                <small class="form-text text-danger">
                    {errors?.confirmPassword?.message}
                </small>
            )}
        </div>
        
        <button type="submit" className="btn btn-primary btn-lg w-100 mt-4">{btnText || "Submit"}</button>
    </form>
     );
}

export default UserData;