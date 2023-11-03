import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authorizeUser } from "../features/users/users-slice";
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
      console.log(isUserAuth)
      navigate("/Orders")
  }}, [isUserAuth, navigate])

  return (
    <div className="preloader">
      <h3 style={{textAlign:"center"}}>Вход</h3>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="form-floating" style={{margin:"0.25rem"}}>
          <input type="text" id="user" className="form-control"  placeholder="Логин" 
            {...register("name", {required:true})} aria-invalid={errors.name ? true : false}
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
        <NavLink to ="/Registration">Регистрация</NavLink>
        <button className="btn btn-primary">Войти</button>
      </form>
    </div>
    
  );
}
