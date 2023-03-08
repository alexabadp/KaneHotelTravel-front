import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./DetailBuy.module.css";
import Modal from "react-bootstrap/Modal";
import CheckoutForm from "../../../../components/CheckoutForm/CheckoutForm";

const BookingBuy = ({
  location,
  data,
  show,
  stripePromise,
  handleClose,
  amountHardCode,
  descriptionHardCode,
  setSuccessfulReservation,
  setReservationResponse,
}) => {
  return (
    <div className={style.detailBookingContainer}>
      <div>
        <div>
          <Form>
            <Modal show={show} onHide={handleClose} className={style.modal}>
              <Modal.Header closeButton>
                <Modal.Title>Detalle de la Reserva</Modal.Title>
              </Modal.Header>
              <Modal.Body className={style.body}>
                <ul className={style.titleBooking}>
                  <p className={style.titleBooking}>
                    Hotel: {location.state.name}
                  </p>
                  <p className={style.titleBooking}>Nombre: {data.name}</p>
                  <p className={style.titleBooking}>
                    Apellido: {data.lastname}
                  </p>
                  <p className={style.titleBooking}>ID: {data.id}</p>
                  <p className={style.titleBooking}>
                    Habitaciones:{" "}
                    {data.rooms.map((e) => {
                      return <p key={e}>{e}</p>;
                    })}
                  </p>
                  <p className={style.titleBooking}>
                    Precio Total: ${data.price}
                  </p>
                </ul>
                <div className={style.stripe}>
                  <Form.Group className="mb-3" controlId="formGridEmail">
                    <Elements stripe={stripePromise}>
                      <CheckoutForm
                        totalPayment={amountHardCode}
                        descriptionPayment={descriptionHardCode}
                        formData={data}
                        successfulReservation={setSuccessfulReservation}
                        reservationResponse={setReservationResponse}
                      />
                    </Elements>
                  </Form.Group>
                </div>
              </Modal.Body>
              <Modal.Footer className={style.footer}>
                <Link to={`/`}>
                  <Button className={style.button} variant="primary">
                    Cancelar
                  </Button>
                </Link>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default BookingBuy;
