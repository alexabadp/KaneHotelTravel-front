import React, {useState, useEffect} from "react";
import styles from "./FormActividad.module.css"
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailActivity } from "../../redux/actions";


export function FormActividad(){

    const arrayCompras = []

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((state) => state.detailActivity)
    const price = state.price
    const [input, setInput] = useState({
        nombres: "",
        apellidos: "",
        email: "",
        direccion: "",
        entradas: 1,
        fecha: "",
        celular: "",
        finalPrice: price * 1
    })


    useEffect(() => {
        dispatch(getDetailActivity(params.activity))
    },[dispatch])
    

    function handleChange(e){
        e.preventDefault()
        setInput({...input,
                [e.target.name]: e.target.value,
                finalPrice: input.entradas * state.price
            })
        // console.log(state.price)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!input.nombres, !input.apellidos, !input.celular, !input.direccion, !input.fecha){
            alert("Complete todos los campos")
        }else{
            alert(JSON.stringify(input))
            arrayCompras.push(input)
            // console.log(arrayCompras);
    
            setInput({
                nombres: "",
                apellidos: "",
                email: "",
                direccion: "",
                entradas: 1,
                fecha: "",
                celular: "",
                finalPrice: state.price
            })
        }
    }

    return(<div className={styles.container}>
        <div className={styles.containerForm}>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.formulario}>
                <div className={styles.names}>
                    <div className={styles.inputContainer}>
                        <label>First Name</label>
                        <input 
                            onChange={(e) => handleChange(e)}
                            type="text" 
                            placeholder="Nombres" 
                            name="nombres" 
                            value={input.nombres}
                            className={styles.nameInput}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Last Name</label>
                        <input 
                            onChange={(e) => handleChange(e)}
                            type="text" 
                            placeholder="Apellidos"
                            name="apellidos"
                            value={input.apellidos}
                            className={styles.nameInput}
                        />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label>Your Email</label>
                    <input 
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder="exaple@email.com"
                        name="email"
                        value={input.email}
                        className={styles.textInput}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Phone Number</label>
                    <input 
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder="Celular"
                        name="celular"
                        value={input.celular}
                        className={styles.textInput}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Adress</label>
                    <input 
                        onChange={(e) => handleChange(e)}
                        type="text" 
                        placeholder="Dirección"
                        name="direccion"
                        value={input.direccion}
                        className={styles.textInput}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Tickets</label>
                    <input 
                        onChange={(e) => handleChange(e)}
                        type="number" 
                        placeholder="Cantidad de entradas"
                        name="entradas"
                        min="1"
                        value={input.entradas}
                        className={styles.textInput}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="">Booking</label>
                    <input
                        onChange={(e) => handleChange(e)} 
                        type="date" 
                        name="fecha" 
                        value={input.fecha}
                        className={styles.textInput}
                    />
                </div>
                <div>
                    <p><strong>Single Price: </strong> ${state.price}</p>
                    <p><strong>Final Price: </strong>${input.entradas * state.price}</p>
                    <button type="submit" className={styles.buttons}>Comprar</button>
                </div>
            </form>
            <div className={styles.imageContainer}>
                <h1>{params.activity}</h1>
                <img src={state.image} className={styles.image}/>
            </div>  
        </div>      
        <button onClick={() => navigate(-1)} className={styles.buttons}>Volver</button>
    </div>)
}