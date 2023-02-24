import "react-datepicker/dist/react-datepicker.css";
import {  useState } from "react";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import style from "./DetailBooking.module.css";
import { Link } from "react-router-dom";


const DetailBooking = () => {
  const location = useLocation();
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  
  

  return (
    <div className={style.containerForm}>
      <div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className={style.title}>First Name</Form.Label>
              <Form.Control type="FirstName" placeholder="Your Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className={style.title}>Last Name</Form.Label>
              <Form.Control type="LastName" placeholder="Your Last Name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label className={style.title}>Your Email</Form.Label>
            <Form.Control placeholder="user@email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label className={style.title}>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className={style.title}>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className={style.title}>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className={style.title}>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Label className={style.title}>Check In</Form.Label>
          <div>
            <DatePicker
              selected={checkIn}
              value={checkIn}
              onChange={setCheckIn}
            />
          </div>

          <Form.Label className={style.title}>Check Out</Form.Label>
          <div>
            <DatePicker
              selected={checkOut}
              value={checkOut}
              onChange={setCheckOut}
            />
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
        <h2 className={style.title1}>{location.state.name}</h2>
        <div className={style.image}>
          {" "}
          <img src={location.state.image} alt="Imagen" />
        </div>
      </div>
    </div>
  );
};
export default DetailBooking;
