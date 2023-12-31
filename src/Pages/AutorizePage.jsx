import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authorizeUser } from "../features/users/user-slice";
import { useEffect } from "react";

export const AutorizePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isUserAuth = useSelector(state => state.user.isUserAuth)

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

    const onSubmit = (data) => dispatch(authorizeUser(data))
    const onError = (data) => console.log(data)

    useEffect(()=> {if (isUserAuth) {
      navigate("/Orders")
  }}, [isUserAuth, navigate])

  return (
    <div className="pos-center border rounded border-3">
      <h3 style={{textAlign:"center"}}>Вход</h3>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="form-floating" style={{margin:"0.25rem"}}>
          <input type="text" id="user" className="form-control"  placeholder="Логин" 
            {...register("login", {required:true})} aria-invalid={errors.login ? true : false}
          />
          <label htmlFor="user">Login</label>
        </div>
        {errors.name ? <p>This field is required</p> : <p></p>}
        <div className="form-floating" style={{margin:"0.25rem"}}>
          <input type="password" id="pass" className="form-control"  placeholder="Пароль" 
            {...register("password", {required:true})} aria-invalid={errors.password ? true : false}
          />
          <label htmlFor="pass">Password</label>
        </div>
        {errors.password? <p>This field is required</p> : <p></p>}
        <div style={{display: "flex", justifyContent: "space-between", margin: "1rem"}}>
          <button className="btn btn-primary">Войти</button>
          <NavLink to ="/Registration">Регистрация</NavLink>
        </div>
      </form>
    </div>
    
  );
}
