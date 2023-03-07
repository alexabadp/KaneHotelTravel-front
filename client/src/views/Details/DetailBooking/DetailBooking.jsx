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
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const amountHardCode = data.price; //10usd
  const descriptionHardCode = "Descripcion del pago"; //10usd
  const [dateValue, setCheckIn] = useState(new Date());

  const stripePromise = loadStripe(
    "pk_test_51MeUSYJo5kAZGuTWTiN6NsA5FRMyqId8smjQOgEObJw8rbCeHijt3N58dI0J5HfF48lROYvHLIzLE2QjAk8skODA00D3KU6iNb"
  );
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
    <div className={style.containerBookingGeneral}>
      <NavBar />
      <div className={style.progressbar}>
        <div
          style={{ width: page == 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <form onSubmit={handlerSummit}>
      <div className={style.detailBookingContainer}>
        <div className={style.titleBooking}>
          <h2>{FormTitle[page]}</h2>
        </div>
        <div>
          {PageDisplay()}
          <Button
            className={style.button}
            disabled={page == 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            Anterior
          </Button>

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
