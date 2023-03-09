import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getBookingsUser, getHotels } from "../../../redux/actions";
import Footer from "../../Landing/Footer/Footer";
import OptionsUser from "../optionsUser/optionsUser";
import styles from "./Booking.module.css"


// const dataBookings = [{id: 1, city: "Pyerto Vallarta", name: "Arkansas", state: "reservado"}, 
//                     {id: 2, city: "Cancun", name: "Atwood", state: "reservado"}, 
//                     {id: 3, city: "Cancun", name: "Birchwood", state: "expirado"}, 
//                     {id: 4, city: "Playa Paraíso, Tulum", name: "Buell", state: "expirado"}]

function Bookings(){

    const dispatch = useDispatch()
    const bookings = useSelector((state) => state.bookings)
    const hoteles = useSelector((state) => state.hotels)
    const params = useParams()
    const fecha = new Date()
    const fechaActual = fecha.toLocaleDateString()

    useEffect(() => {
        dispatch(getBookingsUser(params.email))
        console.log(fechaActual)
    }, [])

    return(<div>
        <OptionsUser/>
        <h3 className={styles.titleBookings}>Bookings</h3>
        <div className={styles.bookings}>
            {bookings.length?
                bookings.map((b) => (
                // <Link to={`/${b.city}/hotel/${b.hotel.name}`}>
                <div className={styles.bookingContainer}>
                    <div className={styles.dato}>
                        <p><strong>Hotel:</strong> {b.hotel.name}</p>
                    </div>
                    <div className={styles.dato}>
                        <p><strong>Checkin: </strong> {b.checkin}</p>
                    </div>
                    <div className={styles.dato}>
                        <p><strong>Checkout: </strong> {b.checkout}</p>
                    </div>
                    <div className={styles.dato}>
                        <p><strong>id: </strong> {b.id}</p>
                    </div>
                    <div className={styles.dato}>
                        <p><strong>state:</strong> {fechaActual <= b.checkout ? "expirada" : "activa"}</p>
                    </div>
                </div>
                // </Link>
                )):
                <h5>No hay reservas</h5>
            }
        </div>

        <div>
            <Footer/>
        </div>
        
    </div>)
}

export default Bookings;