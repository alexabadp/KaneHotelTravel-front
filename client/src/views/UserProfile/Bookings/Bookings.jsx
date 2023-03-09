import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getBookingsUser } from "../../../redux/actions";
import OptionsUser from "../optionsUser/optionsUser";
import styles from "./Booking.module.css"


// const dataBookings = [{id: 1, city: "Pyerto Vallarta", name: "Arkansas", state: "reservado"}, 
//                     {id: 2, city: "Cancun", name: "Atwood", state: "reservado"}, 
//                     {id: 3, city: "Cancun", name: "Birchwood", state: "expirado"}, 
//                     {id: 4, city: "Playa Paraíso, Tulum", name: "Buell", state: "expirado"}]

function Bookings(){

    const dispatch = useDispatch()
    const state = useSelector((state) => state.bookings)
    const params = useParams()

    useEffect(() => {
        getBookingsUser()
    }, [])

    return(<div>
        <OptionsUser/>
        <h3>Bookings</h3>
        {state.length?
            state.map((b) => (
            <Link to={`/${b.city}/hotel/${b.name}`}>
            <div className={styles.bookingContainer}>
                <strong><p>{b.name}</p></strong>
                <p>id: {b.id}</p>
                <p><strong>state:</strong> {b.state}</p>
            </div>
            </Link>
            )):
            <h5>No hay reservas</h5>
        }
        
    </div>)
}

export default Bookings;