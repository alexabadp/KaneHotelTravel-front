import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";
import Select from "react-select";
import Calendar from "react-calendar";
import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import style from "./Detail.module.css";
import Row from "react-bootstrap/esm/Row";

const RoomSelect = ({
  setActive,
  location,
  data,
  error,
  datosRoom,
  handlerOption,
  handleDelete,
  formatDate,
  setCheckIn,
  dateValue,
}) => {
  useEffect(() => {
    if (
      !error.name &&
      !error.lastname &&
      !error.email &&
      !error.typeEmail &&
      !error.phone &&
      !error.typePhone &&
      !error.id &&
      !error.idType &&
      !error.rooms &&
      !error.checkin
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [error]);
  return (
    <div className={style.genelaContainer}>
      <div className={style.calendarContainer}>
        <Form>
          <Row>
            <Form.Group as={Col} class="w-50">
              <Form.Label className={style.titleBooking}>
                Habitaciones
              </Form.Label>
              <Select
                value={data.rooms[0] ? data.rooms[0] : ""}
                options={datosRoom}
                placeholder="Seleccione la Habitacion"
                onChange={handlerOption}
              />
              {error.rooms && <span className={style.fail}>{error.rooms}</span>}
            </Form.Group>

            <Form.Label className={style.titleBooking}>
              Fechas de Check-In / Check-Out
            </Form.Label>
            <Form.Group as={Col}>
              <div className={style.alinItem}>
                <Calendar
                  minDate={new Date()}
                  selectRange={true}
                  onChange={(e) => setCheckIn(e)}
                  value={dateValue}
                />
                {error.checkin && (
                  <span className={style.fail}>{error.checkin}</span>
                )}
                {error.checkout && (
                  <span className={style.fail}>{error.checkout}</span>
                )}
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
            </Form.Group>
              <Form.Group as={Col} class="form-horizontal">
            </Form.Group>
          </Row>
        </Form>
      </div>
      <div className={style.detalle}>
        <img
          class={style.detalleImage}
          src={location.state.image}
          alt="Imagen"
        />
        <div class=" align-items-end">
          <h2 className={style.detalleTitulo}>Hotel: {location.state.name}</h2>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div>
            <h3 className={style.title1}>Habitaciones selecionadas</h3>
            <div>
                {data.rooms?.map((element) => {
                  return data.image?.map((f) => {
                    if (element === f.name) {
                      return (
                        <>
                          <div key={f.name} className={style.roomDetail}>
                            <div>
                              <button
                                type="button"
                                onClick={() => handleDelete(f.name)}
                                className={style.btnDelete}
                              >
                                X
                              </button>
                              <h2>{f.name}</h2>
                              <img className={style.detalleImage} key={f.image} src={f.image} alt="Image" />
                            </div>
                          </div>
                        </>
                      );
                    }
                  });
                })}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomSelect;
