import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Select from "react-select"
import Calendar from "react-calendar";
import dayjs from "dayjs";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import style from "./DetailBooking.module.css";
import Modal from "react-bootstrap/Modal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/CheckoutForm/CheckoutForm";

const DetailBooking = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const amountHardCode = 10; //10usd
  const descriptionHardCode = "Descripcion del pago"; //10usd
  const [dateValue, setCheckIn] = useState(new Date());
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    id: "",
    checkin: "",
    checkout: "",
    rooms: [],
    price: 0,
  });
  // const stripePromise = loadStripe(import.meta.env.VITE_KEY_STRIPE)
  const stripePromise = loadStripe(
    "pk_test_51MeUSYJo5kAZGuTWTiN6NsA5FRMyqId8smjQOgEObJw8rbCeHijt3N58dI0J5HfF48lROYvHLIzLE2QjAk8skODA00D3KU6iNb"
  );
  const formatDate = (date) => {
    return dayjs(date).format("DD/MM/YYYY");
  };
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
  const handlerInputAddress = (event) => {
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
  const handlerInputCheckIn = () => {
    setData({ ...data, checkin: formatDate(dateValue[0]) });
  };
  const handlerInputCheckOut = () => {
    setData({ ...data, checkout: formatDate(dateValue[1]) });
  };
  let totalPrice = 0

  const datosRoom = location.state.rooms.map((e) => {
    return {label: e.name, value: e.name}
  })
  const handlerOption = (event) => {
    const roomName = event.value;    
    let newArray = data.rooms;
    let find = newArray?.filter(e => e === roomName)
    if(find.length > 0){
      setData({...data})
    } else {
      setData({...data, rooms: [...data.rooms, roomName]})
    }
    
  };
//   function priceTotal(){
//     const array = location.state.rooms
//     const nameRoom = data.rooms
//     for(let i = 0; i < nameRoom.length; i++){
//       for(let obj of array){        
//        if(obj.name == nameRoom[i]){
//         return totalPrice = totalPrice + obj.price
//        }     
//     }
//   }
  
// }
// priceTotal()
 
  
  
 
  const handleDelete = (event) => {
    setData({
      ...data,
      rooms: data.rooms.slice().filter((e) => e !== event),
    });
  };
  
  return (
    <div className={style.containerBookingGeneral}>
      <div className={style.detailBookingContainer}>
        <div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
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

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className={style.titleBooking}>
                  Last Name
                </Form.Label>
                <Form.Control
                  onChange={(e) => handlerInputLastname(e)}
                  name="lastname"
                  type="text"
                  placeholder="Your Last Name"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className={style.titleBooking}>Your Email</Form.Label>
              <Form.Control
                onChange={(e) => handlerInputEmail(e)}
                name="email"
                placeholder="user@email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label className={style.titleBooking}>Address</Form.Label>
              <Form.Control
                onChange={(e) => handlerInputAddress(e)}
                name="address"
                placeholder="Apartment, studio, or floor"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className={style.titleBooking}>City</Form.Label>
                <Form.Control
                  onChange={(e) => handlerInputCity(e)}
                  name="city"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label className={style.titleBooking}>ID</Form.Label>
                <Form.Control onChange={(e) => handlerInputId(e)} name="id" />
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className={style.titleBooking}>Rooms</Form.Label>
              <Select 
                options={datosRoom}
                placeholder="Choice Room"
                onChange={handlerOption}              
              />
            </Form.Group>

            <Form.Label className={style.titleBooking}>Booking</Form.Label>
            <div>
              <Calendar
                minDate={new Date()}
                selectRange={true}
                onChange={(e) => setCheckIn(e)}
                value={dateValue}
              />
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
                  <Button
                    className={style.button}
                    variant="primary"
                    type="submit">
                    Cancel
                  </Button>
                </Link>
                <Button variant="primary" onClick={handleShow} className={style.button}>
                  Detail Total
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
                        {data.rooms.map((e) => {
                          return <p key={e}>{e}</p>;
                        })}
                      </p>
                      <p className={style.titleBooking}>
                        Total Price: ${data.price}
                      </p>
                    </ul>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
            <div>
              <Form className={style.stripe}>
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  totalPayment={amountHardCode}
                  descriptionPayment={descriptionHardCode}
                />
              </Elements>
              </Form>
            </div>
            {/* <Button className={style.button} variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </div>
        <div className={style.hotel}>
          <div className={style.image}>
            <h2 className={style.title1}>{location.state.name}</h2>

            <img src={location.state.image} alt="Imagen" />
          </div>
          <div className={style.hotel}>
            {data.rooms?.map((e) => {
              return (
                <div key={e}>
                  <div className={style.title1}>
                  <button
                  type="button"
                  onClick={() => handleDelete(e)}
                  className={style.btnDelete}
                >
                  X
                </button>
                    <h2>{e}</h2>
                  </div>
                  {/* <div className={style.image}>
                    <img src={e[0]?.image} alt="Imagen" />
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBooking;
