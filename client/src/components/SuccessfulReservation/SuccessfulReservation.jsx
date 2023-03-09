import { useSelector } from "react-redux";
import { Link, useNavigate  } from "react-router-dom";
import React from "react";
import style from "./ActivityContainer.module.css";
import NavBar from "../NavBar/NavBar";
import ActivityCard from "../Activity/ActivityCard/ActivityCard";

const SuccessfulReservation = ({ res, city }) => {
  const detailCity = useSelector((state) => state.detailCity);
  const navigate = useNavigate()
  const activities = detailCity.activities;
  const conteo = function () {
    setTimeout(function () {
      navigate("/home")
    }, 5000)
  }
  conteo();
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={style.main}>
        <div className={style.div}>
          <section>
            <h1>Reservación creada con exito!!!</h1>
            <p className={style.letra}>              
              Estimado <span>{res.user.name}</span> al correo{" "}
              <span><strong>{res.user.email}</strong></span> fue enviada la información detallada
              de la reservación, en 5 segundos sera Re-direccionado...
            </p>
          </section>
          </div>
        <div>
          <div className={style.activityContainer}>
            <h1>Actividades Sugeridas para sus vacaciones!!!</h1>
            <div className={style.activityContainerCards}>
              {activities?.length ? (
                activities.map((c) => {
                  return (
                    <div key={c.id} className={style.activityContainer}>
                      <Link
                        to={`/home/${city ? city : cityHotel}/activity/${
                          c.name
                        }`}
                      >
                        <ActivityCard
                          id={c.id}
                          name={c.name}
                          image={c.image}
                          category={c.category}
                          price={c.price}
                          description={c.description}
                          duration={c.duration}
                        />
                      </Link>
                    </div>
                  );
                })
              ) : (
                <h4>No se encontraron Actividades</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessfulReservation;
