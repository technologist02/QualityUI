import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { validateInput } from "../validate-forms";


export const AddFilm = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        mode: "onBlur"
      });
    
    //const message  
    const onSubmit = (data) => {
        alert(data)
        // const inp = document.querySelectorAll(".form-control")
        // console.log(inp)
        // inp.forEach(i => {
        //     const message = validateInput(i.type, i.value);
        //     if (message) {
        //         i.parentElement.nextSibling.innerText = message
        //     }
        // })
    }
    const onError = (data) => console.log(data)

    
    return (
            <div className="pos-center border rounded border-3">
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h5 >Добавить пленку</h5>
                    <button
                        type="button"
                        className="btn-close"
                        // onClick={() => dispatch(resetModal())}
                    ></button>
                </div>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="form-floating">
                        <input type="text" id="mark" className="form-control"  placeholder="Введите марку пленки" 
                        {...register("mark", {required:"Поле обязательно для заполнения", pattern: /^[a-zA-Z][a-zA-Z0-9_]{1,20}$/})} aria-invalid={errors.mark ? true : false}
                        />
                        <label htmlFor="mark" className="form-label">Марка</label>
                    </div>
                    <div style={{height:30, margin:0}}>
                        {errors?.mark ? <p>{errors?.mark?.message || "Error"}</p> : <p></p>}
                    </div>
                    
                    <div className="form-floating">
                        <input type="number" id="thickness" className="form-control"  placeholder="Введите толщину" 
                        {...register("thickness", {required:true})} aria-invalid={errors.thickness ? true : false}
                        />
                        <label htmlFor="thickness" className="form-label">Толщина</label>
                    </div>
                    <div style={{height:30, margin:0}}>
                        {errors?.thickness ? <p>{errors?.thickness?.message || "Error"}</p> : <p></p>}
                    </div>
                    {/* {errors.thickness? <p>This field is required</p> : <p></p>} */}
                    <div className="form-floating">
                        <input type="text" id="color" className="form-control"  placeholder="Введите цвет" 
                        {...register("color", {required:true})} aria-invalid={errors.color ? true : false}
                        />
                        <label htmlFor="color" className="form-label">Цвет</label>
                    </div>
                    <div style={{height:30, margin:0}}>
                        {errors?.color ? <p>{errors?.color?.message || "Error"}</p> : <p></p>}
                    </div>
                    <div className="form-floating">
                        <input type="text" id="density" className="form-control"  placeholder="Введите плотность" 
                        {...register("density", {required:"Поле обязательно для заполнения", pattern: /[0-9]*[.,]?[0-9]+/})} aria-invalid={errors.density ? true : false}
                        />
                        <label htmlFor="density" className="form-label">Плотность, г/см3</label>
                    </div>
                    <div style={{height:30, margin:0}}>
                        {errors?.density ? <p>{errors?.density?.message || "Error"}</p> : <p></p>}
                    </div>
                    {/* {errors.density? <p>This field is required</p> : <p></p>} */}
                    <div style={{display: "flex", justifyContent: "end"}}>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            style={{marginRight: "0.5rem"}}
                            // onClick={() => dispatch(resetModal())}
                            >
                                Закрыть
                            </button>
                        <button className="btn btn-primary">Сохранить</button>
                    </div>
                </form>
            </div>
        
    )
}