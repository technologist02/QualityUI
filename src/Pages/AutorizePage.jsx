import { useForm } from "react-hook-form";

export const AutorizePage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm({
        defaultValues: {
          example: "",
          exampleRequired: ""
        }
      });

      console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}
    >
      <label>Firstname</label>
      <input {...register("firstname")} defaultValue="test" />
      <label>LastName</label>
      <input
        {...register("exampleRequired", { required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
}
