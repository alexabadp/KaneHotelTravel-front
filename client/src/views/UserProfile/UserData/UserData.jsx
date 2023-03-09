import React, { useState } from "react";
import styles from "./UserData.module.css"
// import NavBar from "../../../components/NavBar/NavBar";
import OptionsUser from "../optionsUser/optionsUser";
import { Formik, Form, Field } from "formik";
import { useAuth0 } from "@auth0/auth0-react";
import * as Yup from "yup";
import Footer from "../../Landing/Footer/Footer";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "El nombre debe contener 3 carácteres como mínimo")
        .required("El nombre es requerido"),
    lastName: Yup.string()
        .min(3, "El apellido debe contener 3 caracteres como mínimo")
        .required("El apellido es requerido"),
    email: Yup.string().email("Debe ser un correo válido")
        .required("El correo es requerido"),
    phoneNumber: Yup.string().matches(phoneRegExp, "El numero de celular es invalido")
        .required("El número de celular es requerido")
})

function UserData (){

    const { user, isAuthenticated, isLoading } = useAuth0();

    const [editData, setEditData] = useState(true)

    function editUserData (e){
        e.preventDefault()
        setEditData(editData === true ? false : true)
        return editData
    }

    return(<div className={styles.container}>
        <OptionsUser/>
        {isAuthenticated ? (
            <Formik
            initialValues={{
                name: user.name,
                email: user.email,
                phoneNumber: "3156306686",
                genero: "masculino",
                adress: "casa 10",
                contactName: "Juan Carlos",
                contactLastName: "Diaz",
                phoneNumberContact: "3175254910",
                emailContact: "juancarlos@gmail.com",
            }}
            validationSchema={SignupSchema}
            >

            {({ errors, touched }) => (
                    <div className={styles.containerData}>
                        <h3 className={styles.titleUserData}>Datos de usuario</h3>
                        <Form className={styles.formData}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="name">Nombre</label>
                            <Field name="name" type="text" placeholder="Nombres" disabled={editData} className={styles.input}/>
                            {errors.name && touched.name ? (
                                <div className={styles.errors}>{errors.name}</div>
                            ) : null}
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" placeholder="example@mail.com" disabled="true" className={styles.input}/>
                            {errors.email && touched.email ? (
                                <div className={styles.errors}>{errors.email}</div>
                            ) : null}
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="phoneNumber">Celular</label>
                            <Field name="phoneNumber" type="text" placeholder="Numero de celular" disabled={editData} className={styles.input}/>
                            {errors.phoneNumber && touched.phoneNumber ? (
                                <div className={styles.errors}>{errors.phoneNumber}</div>
                            ) : null}
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Genero</label>
                            <Field type="text" name="genero" disabled={editData} className={styles.input}/>
                                {/* <option>Masculino</option>
                                <option>Femenino</option>
                                <option>Otro</option>
                            </Field> */}
                            {/* <Field type="text" name="genero" disabled={editData} className={styles.input}/> */}
                        </div>
                        <div className={styles.inputContainer}>
                            <label>Dirección</label>
                            <Field type="text" name="adress" disabled={editData} className={styles.input} placeholder="Dirección"/>
                        </div>
                        
                        {/* <div>
                            <h4>Contacto de emergencia</h4>
                            <div className={styles.inputContainer}>
                                <label htmlFor="contactName">Nombres</label>
                                <Field name="contactName" type="text" placeholder="Nombre" disabled={editData} className={styles.input}/>
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="contactLastName">Apellidos</label>
                                <Field name="contactLastName" type="text" placeholder="Apellidos" disabled={editData} className={styles.input}/>
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="phoneNumberContact">Celular</label>
                                <Field name="phoneNumberContact" type="text" placeholder="Celular" disabled={editData} className={styles.input}/>
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="emailContact">Correo</label>
                                <Field name="emailContact" type="text" placeholder="example@mail.com" disabled={editData} className={styles.input}/>
                            </div>
                        </div> */}
                        {/* <div className={styles.containerButtons}>
                            <button onClick={(e) => editUserData(e)} className={styles.button}>Editar</button>
                            <button type="submit" disabled={editData} className={styles.update}>Actualizar</button>
                        </div> */}
                    </Form>
                </div>
            )}
            </Formik>
        ):
        (<h3>No has iniciado sesión</h3>)

        }

    <div>
    <Footer/>
    </div>  
       
    </div>
    )
}

export default UserData;
