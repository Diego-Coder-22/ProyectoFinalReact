import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="container">
        <h1 className="main-title">Ponete en contacto con nosotros</h1>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
            <textarea rows={10} placeholder="Dejanos tu comentario" {...register("comentario")} />
            <button className="enviar" type="submit">Enviar</button>
        </form>
    </div>

  )
}

export default Contacto
