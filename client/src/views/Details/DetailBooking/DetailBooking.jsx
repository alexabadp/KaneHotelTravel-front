import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import style from "./DetailBooking.module.css";
import Modal from "react-bootstrap/Modal";

const DetailBooking = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    price: "$150",
  });
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

  const handlerOption = (event) => {
    const roomName = event.target.value;
    const datos = location.state.rooms;
    const infoRoom = datos.flat(3);
    const info = infoRoom?.filter((e) => e.name === roomName);
    const copia = info?.filter((e) => {
      let element = [...data.rooms];
      if (element.length) {
        for (let obj of element) {
          if (e.name !== obj.name) return obj;
        }
      } else return e;
    });
    setData({ ...data, rooms: [...data.rooms, copia] });
  };
  console.log(data.rooms, "rooms");

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
              <Form.Select
                onChange={(e) => {
                  handlerOption(e);
                }}
              >
                <option value="Choice Room" key="1"></option>
                {location.state.rooms.map((e) => {
                  return <option key={e.id}>{e.name}</option>;
                })}
              </Form.Select>
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
                <Button variant="primary" onClick={handleShow}>
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
                          return <p key={e[0].id}>{e[0].name}</p>;
                        })}
                      </p>
                      <p className={style.titleBooking}>
                        Total Price: {data.price}
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
            <Link to={`/`}>
              <Button className={style.button} variant="primary" type="submit">
                Cancel
              </Button>
            </Link>
            <Button className={style.button} variant="primary" type="submit">
              Submit
            </Button>
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
                <div key={e[0]?.id}>
                  <div className={style.title1}>
                    <h2>{e[0]?.name}</h2>
                  </div>
                  <div className={style.image}>
                    <img src={e[0]?.image} alt="Imagen" />
                  </div>
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
