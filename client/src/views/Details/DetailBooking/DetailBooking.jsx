import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios"
import dayjs from "dayjs";
import React from "react";
import QRCode from "react-qr-code";
import Button from "react-bootstrap/Button";
import style from "./DetailBooking.module.css";
import UserData from "./MultiStepForm/UserData";
import RoomSelect from "./MultiStepForm/RoomSelect";
import BookingBuy from "./MultiStepForm/BookingBuy";
import NavBar from "../../../components/NavBar/NavBar";
import NavBar from "../../../components/NavBar/NavBar";
import SuccessfulReservation from "../../../components/SuccessfulReservation/SuccessfulReservation";

function validate(data, dateValue) {
  const errors = {};
  if (!data.name) errors.name = "El Nombre es requerido";
  if (!data.lastname) errors.lastname = "El Apellido es requerido";
  if (!data.email) errors.email = "El Correo es requerido";
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!data.email || regex.test(data.email) === false)
    errors.typeEmail = " / El tipo de Correo ingresado es invalido";
  if (!data.phone) errors.phone = "El numero de telefono es requerido";
  if (data.phone.length > 10 || isNaN(data.phone))
    errors.typePhone = "El formato de telefono ingresado es invalido";
  if (!data.id) errors.id = "El Dni / Pasaporte es requerido";
  if (isNaN(data.id) || data.id.length > 8)
    errors.idType = "El tipo de Dni es invalido";
  if (!data.rooms.length) errors.rooms = "Selecciona la habitacion a reservar";
  if (!dateValue[0]) errors.checkin = "La fecha de Check-In es requerida";
  return errors;
}

const DetailBooking = () => {
  const [successfulReservation, setSuccessfulReservation] = useState(false);
  const [reservationResponse  , setReservationResponse  ] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState({
    hotel: location.state.name,
    name: "",
    lastname: "",
    email: "",
    phone: 0,
    id: "",
    checkin: "",
    checkout: "",
    rooms: [],
    price: 0,
    image: [],
    datosRoom: location.state.rooms,
  });
  0;
  // const stripePromise = loadStripe(import.meta.env.VITE_KEY_STRIPE)
  const stripePromise = loadStripe(
    "pk_test_51MeUSYJo5kAZGuTWTiN6NsA5FRMyqId8smjQOgEObJw8rbCeHijt3N58dI0J5HfF48lROYvHLIzLE2QjAk8skODA00D3KU6iNb"
  );
  //Validacion
  const [error, setError] = useState({});
  const [botonActive, setActive] = useState(true);

  useEffect(() => {
    const validations = validate(data, dateValue);
    setError(validations);
    setActive(true)
  }, [data]);

  //formato de fecha
  const formatDate = (date) => {
    return dayjs(date).format("DD/MM/YYYY");
  };
  useEffect(() => {
    let checkInDate = dayjs(dateValue[0]).format("DD/MM/YYYY");
    let checkOutDate = dayjs(dateValue[1]).format("DD/MM/YYYY");
    setData({ ...data, checkin: checkInDate, checkout: checkOutDate });
  }, [dateValue]);

  //handler Functions
  const handlerInputName = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    setData({ ...data, [input]: value });
  };
  const handlerInputLastname = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    setData({ ...data, [input]: value });
  };
  const handlerInputEmail = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    setData({ ...data, [input]: value });
  };
  const handlerInputCity = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    setData({ ...data, [input]: value });
  };
  const handlerInputId = (event) => {
    const input = event.target.name;
    const value = event.target.value;
    setData({ ...data, [input]: value });
  };

  const datosRoom = location.state.rooms?.map((e) => {
    return { label: e.name, value: e.name };
  });

  const handlerOption = (event) => {
    const roomName = event.value;
    let newArray = data.rooms;
    let find = newArray?.filter((e) => e === roomName);
    if (find.length > 0) {
      setData({ ...data });
    } else {
      setData({ ...data, rooms: [...data.rooms, roomName]});
    }
  };
  
  //guardar precio en el estado //imagen en el estado
  useEffect(() => {
    let room = data.rooms
    let datos = data.datosRoom
    let total = 0
    let newArray = []
    const price = room?.forEach(element => {
      return datos?.find(e => {
        if(element === e.name){
          total = total + e.price          
        }
      })           
    })
    
    const imagenRoom = room?.forEach(element => {
      return datos?.find(e => {
        if(element === e.name){
          const obj = newArray.find(f => f.name === e.name)
          if(obj){
            console.log("el elemento ya existe")
          }else{
            newArray.push({name: e.name, image: e.image, description: e.description})
          }
        }
      })      
    })
    setData({...data, price: total, image: newArray})
    }, [data.rooms])   
  
  //Eliminar  
  const handleDelete = (event) => {
    setData({
      ...data,
      rooms: data.rooms.slice().filter((e) => e !== event),
      image: data.image.slice().filter((e) => e.name !== event)
    });
  };
 
  //MultiStepForms
  const [page, setPage] = useState(0);
  const FormTitle = [
    "Ingrese sus Datos",
    "Datos de la Habitacion",
    "Finalize su reserva",
  ];
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <UserData
          data={data}
          error={error}
          handlerInputName={handlerInputName}
          handlerInputLastname={handlerInputLastname}
          handlerInputEmail={handlerInputEmail}
          handlerInputCity={handlerInputCity}
          handlerInputId={handlerInputId}
          validate={validate}
        />
      );
    } else if (page === 1) {
      return (
        <RoomSelect
          page={page}
          setActive={setActive}
          location={location}
          error={error}
          data={data}
          datosRoom={datosRoom}
          handlerOption={handlerOption}
          handleDelete={handleDelete}
          formatDate={formatDate}
          setCheckIn={setCheckIn}
          dateValue={dateValue}
        />
      );
    } else {
      return (
        <BookingBuy
          error={error}
          stripePromise={stripePromise}
          handleClose={handleClose}
          handleShow={handleShow}
          amountHardCode={amountHardCode}
          descriptionHardCode={descriptionHardCode}
          show={show}
          setShow={setShow}
          location={location}
          data={data}
          handlerSummit={handlerSummit}
        />
      );
    }
  };
  useEffect(() => {
    setActive(true)
  }, [page]);

  const handlerSummit = async (event) => {
    event.preventDefault();
    if(Object.values(error).length > 0){
      alert("Por Favor complete los campos requeridos");
    } else {
      const info = await axios.post("http://localhost:3001/sendmail", data);
      navigate("/")
      alert(`Reserva creada con exito con Id ${info.data}`)
    }
  }

  return (
    successfulReservation ? <SuccessfulReservation res={reservationResponse}/> 
    :
    <div className={style.containerBookingGeneral}>
      <div className={style.detailBookingContainer}>
        <div className={style.titleBooking}>
          <h2>{FormTitle[page]}</h2>
        </div>
        <div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className={style.titleBooking}>
                  First Name
                </Form.Label>
                <Form.Control
                  onChange={(e) => handlerInputName(e)}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                />
              </Form.Group>
              {error.name && <span className={style.fail}>{error.name}</span>}

              <Form.Group as={Col}>
                <Form.Label className={style.titleBooking}>
                  Last Name
                </Form.Label>
                <Form.Control
                  onChange={(e) => handlerInputLastname(e)}
                  name="lastname"
                  type="text"
                  placeholder="Your Last Name"
                />
                {error.lastname && (
                  <span className={style.fail}>{error.lastname}</span>
                )}
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label className={style.titleBooking}>Your Email</Form.Label>
              <Form.Control
                onChange={(e) => handlerInputEmail(e)}
                name="email"
                placeholder="user@email"
              />
              {error.email && <span className={style.fail}>{error.email}</span>}
              {error.typeEmail && (
                <span className={style.fail}>{error.typeEmail}</span>
              )}
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label className={style.titleBooking}>Phone</Form.Label>
                <Form.Control
                  placeholder="Input Only Numbers Max: 10"
                  onChange={(e) => handlerInputCity(e)}
                  name="phone"
                />
                {error.phone && (
                  <span className={style.fail}>{error.phone}</span>
                )}
                {error.typePhone && (
                  <span className={style.fail}>{error.typePhone}</span>
                )}
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className={style.titleBooking}>ID</Form.Label>
                <Form.Control onChange={(e) => handlerInputId(e)} name="id" />
                {error.id && <span className={style.fail}>{error.id}</span>}
                {error.idType && (
                  <span className={style.fail}>{error.idType}</span>
                )}
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className={style.titleBooking}>Rooms</Form.Label>
              <Select
                options={datosRoom}
                placeholder="Choice Room"
                onChange={handlerOption}
              />
              {error.rooms && <span className={style.fail}>{error.rooms}</span>}
            </Form.Group>

            <Form.Label className={style.titleBooking}>
              Check-In / Check-Out
            </Form.Label>
            <div>
              <Calendar
                minDate={new Date()}
                selectRange={true}
                onChange={(e) => setCheckIn(e)}
                value={dateValue}
              />
              {error.checkin && <span className={style.fail}>{error.checkin}</span>}
              {error.checkout && <span className={style.fail}>{error.checkout}</span>}
            </div>
            <div>
              <div>
                {dateValue[0] && dateValue[1] > 1 && (
                  <>
                    <Form.Label className={style.titleBooking}>
                      <p>Check In: {formatDate(dateValue[0])}</p>
                      <p>Check Out: {formatDate(dateValue[1])}</p>
                    </Form.Label>
                  </>
                )}
              </div>
            </div>
            <div className={style.modal}>
              <>
                <Link to={`/`}>
                  <Button className={style.button} variant="primary">
                    Cancel
                  </Button>
                </Link>
                <Button
                  id="btn-Summit"
                  disabled={!botonActive}
                  variant="primary"
                  onClick={handleShow}
                  className={style.button}
                >
                  Finalize Reservation
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Booking Summary</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ul className={style.titleBooking}>
                      <p className={style.titleBooking}>
                        Hotel: {location.state.name}
                      </p>
                      <p className={style.titleBooking}>Name: {data.name}</p>
                      <p className={style.titleBooking}>
                        Last Name: {data.lastname}
                      </p>
                      <p className={style.titleBooking}>ID: {data.id}</p>
                      <p className={style.titleBooking}>
                        Rooms:{" "}
                        {data.rooms?.map((e) => {
                          return <p key={e}>{e}</p>;
                        })}
                      </p>
                      <p className={style.titleBooking}>
                        Total Price: ${data.price}
                      </p>
                    </ul>
                    <div className={style.stripe}>
                      <Form.Group className="mb-3" controlId="formGridEmail">
                        <Elements stripe={stripePromise}>
                          <CheckoutForm
                            totalPayment={amountHardCode}
                            descriptionPayment={descriptionHardCode}
                          />
                        </Elements>
                      </Form.Group>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
            {/* <Button className={style.button} variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </div>
        <div className={style.hotel}>
          <div className={style.image}>
            <h2 className={style.title1}>{location.state.name}</h2>

          <Button
            className={style.button}
            disabled={!botonActive}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          >
            Siguiente
          </Button>
        </div>
        <div className="footer"></div>
      </div>
      </form>
    </div>
  );
};
export default DetailBooking;
