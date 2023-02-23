import styles from "./DetailCity.module.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const DetailCity = () => {
  const allHotel = useSelector(state => state.allHotels)
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getAllHotels(dispatch));
  }, [dispatch]);

  // const data = [
  //   {
  //     id: 456,
  //     image:
  //       "https://www.worldatlas.com/upload/94/49/83/cancun-mexico-jdross75.jpg",
  //     name: "Cancun",
  //     popularity: 5,
  //     hotels: [
  //       {
  //         id: "038371de-d230-4a21-9def-ed718dc48d22",
  //         image:
  //           "https://thegetitdonerealtor.com/wp-content/uploads/2021/06/BH_Condominios.jpeg",
  //         name: "Blue Horizon Residences",
  //         services:
  //           "Area Exclusiva, Vistas Panoramicas, Piscinas y Jacuzzis, Area de Asadores, Snack Bar, Gimnacio, Area de Loby WIFI, Accesibilidad, Seguridad 24/7, Estacionamiento y Bodegas Amueblado, Amigable con el Medio Ambiente",
  //         description:
  //           "Hotel resort exclusivo. Si te hospedas en Blue Horizon Residences, podrás disfrutar de la vista desde la terraza en la azotea. Los huéspedes pueden relajarse en una de las 2 piscinas al aire libre.",
  //         rating: 4.6,
  //         category: "Regular",
  //       },
  //       {
  //         id: "2bb78085-932e-4489-b370-d952ea171952",
  //         image:
  //           "https://destify.com/wp-content/uploads/2022/07/Dreams-Villamagna1gal-scaled.jpg",
  //         name: "Wyndham Alltra Riviera Nayarit All-Inclusive Resort",
  //         services:
  //           "Chapoteadero, Servicio a la habitación, Cafetería, Bar junto a la alberca, Alimentos y bebidas, Desayuno buffet incluido todos los días",
  //         description:
  //           "Desde comidas emocionantes y cócteles refrescantes hasta entretenimiento en vivo y actividades sin parar, tenemos algo para todos. Pase el día descansando junto a la piscina, tome una clase de entrenamiento vigorizante.",
  //         rating: 4.7,
  //         category: "Economic",
  //       },
  //       {
  //         id: "d35400ba-41dd-4d76-9197-f176be021c34",
  //         image:
  //           "https://media-cdn.tripadvisor.com/media/photo-s/0a/df/fc/86/getlstd-property-photo.jpg",
  //         name: "Luna Líquida Hotel Boutique",
  //         services:
  //           "Aire acondicionado, Ventiladores de techo, TV de pantalla plana , Cable, Caja de seguridad, Cocina totalmente equipada, Internet inalámbrico de banda ancha, Servicio de limpieza (Ama de casa), Servicio de Concierge, Desayuno continental.",
  //         description:
  //           "Luna Líquida se encuentra a sólo unos pasos de las mejores playas de México, del tradicional Malecón, la zona turística y otras atracciones de renombre en Puerto Vallarta y la Riviera Nayarit. Arte, música, gastronomía, romance.",
  //         rating: 4.8,
  //         category: "VIP",
  //       },
  //     ],
  //   },
  //   {
  //     id: 123,
  //     image:
  //       "https://global-uploads.webflow.com/5cf16f74881a650c03c2f354/5ea5efe3dddc5f628e90f9e8_313993_2400x1600.jpg",
  //     name: "Puerto Vallarta",
  //     popularity: 5,
  //     hotels: [
  //       {
  //         id: "0e0097f5-1759-40c8-91e9-a81e76767233",
  //         image:
  //           "https://images.trvl-media.com/lodging/25000000/24940000/24930700/24930665/dd9bb45d.jpg?impolicy=resizecrop&rw=455&ra=fit",
  //         name: "The Hacienda at Krystal Altitude Vallarta",
  //         services:
  //           "Alto estándar de limpieza, Área para niños,Caja de seguridad,Camas extra, Cambio de divisas, Chapoteadero, Concierge, Cunas, Gimnasio, Habitaciones conectadas, Habitaciones para personas con discapacidad, Wifi, Jacuzzi, Picinas.",
  //         description:
  //           "Krystal Vallarta Hotel & Resort es un complejo familiar que ofrece planes con todo incluido, ubicado en una playa de la zona hotelera de Puerto Vallarta, a 4 kilómetros del Aeropuerto Internacional Licenciado Gustavo Díaz Ordaz.",
  //         rating: 4.9,
  //         category: "VIP",
  //       },
  //       {
  //         id: "be551584-146b-443d-ad5a-737688b4cad1",
  //         image:
  //           "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/64000000/63860000/63854800/63854757/7999752c_b.jpg",
  //         name: "Secrets Bahia Mita Surf & Spa - Adults Only - All Inclusive",
  //         services:
  //           "Servicio de habitaciones, Recepción 24 horas, Gimnasio, Restaurante, Bañera de hidromasaje o spa, Acceso para sillas de ruedas, Desayuno continental gratuito, Sala de juegos, Vigilante de seguridad, Divisas, Transporte al aeropuerto.",
  //         description:
  //           "Secrets Bahia Mita Surf & SPA perfectamente ubicado en la exclusiva zona de Bahía de Banderas cerca de Punta Mita, y Marina Cruz de Huanacaxtle en las playas de arena dorada de la Bahía de Banderas, fusiona elegante y original.",
  //         rating: 4.5,
  //         category: "Regular",
  //       },
  //       {
  //         id: "78f57c96-d17c-4d9f-a8f0-967427c5a8a8",
  //         image:
  //           "https://images.trvl-media.com/lodging/1000000/530000/528800/528713/fc80b392.jpg?impolicy=resizecrop&rw=455&ra=fit",
  //         name: "Villa del Palmar Beach Resort and Spa, Puerto Vallarta",
  //         services:
  //           " Cambiode divisas, Servicio de limpieza diario, Catering para eventos, Tienda de regalos, Suite de hospitalidad (para llegadas tempranas y salidas tardías), Servicio de aparcacoches, Centro de actividades para niños, Servicios de bodas",
  //         description:
  //           "El latido del alma mexicana vive dentro de Villa del Palmar Puerto Vallarta, donde la tradicional hospitalidad mexicana y una vista mágica y majestuosa crean recuerdos inolvidables. Cuando los huéspedes pongan un pie en la propiedad.",
  //         rating: 4.8,
  //         category: "Economic",
  //       },
  //     ],
  //   },
  //   {
  //     id: 789,
  //     image:
  //       "https://i1.wp.com/www.viajeroazul.com/wp-content/uploads/2018/09/playa-paraiso-viajero-azul.jpg?fit=1024%2C614&ssl=1",
  //     name: "Playa Paraíso, Tulum",
  //     popularity: 5,
  //     hotels: [
  //       {
  //         id: "3bebf657-cc44-4b9b-8e13-3952f301cd50",
  //         image:
  //           "https://storage.googleapis.com/cloudaio/images/hotel/7258ec5c-dc8f-4df8-a2a9-095d42efea87/36818/DRPMI-EXT-PC-Beach-Club-Roof2-RNDR-458x305.jpg",
  //         name: "Dreams Bahia Mita Surf & Spa - All Inclusive",
  //         services:
  //           "Chapoteadero, Servicio a la habitación, Cafetería, Bar junto a la alberca, Alimentos y bebidas, Desayuno buffet incluido todos los días, Gimnasio, Recepción 24 horas, Conserje, Sala de juegos, Estacionamiento - Auto, Lavandería.",
  //         description:
  //           "Dreams Bahia Mita Surf & Spa - All Inclusive te permite disfrutar de una ubicación estupenda en Punta de Mita, en la playa, a menos de 15 minutos en coche de Playa Punta De Mita y Playa Bucerías. Este establecimiento de 4,5 estrellas.",
  //         rating: 4,
  //         category: "Regular",
  //       },
  //       {
  //         id: "708d7352-5b07-4a6d-9524-d2d2d0cf31ab",
  //         image:
  //           "https://images.trvl-media.com/hotels/38000000/37810000/37804900/37804877/b9978bc0_z.jpg",
  //         name: "The Paramar Beachfront Boutique Hotel With Breakfast Included - Downtown Malecon",
  //         services:
  //           "Servicio a la habitación, Clases de fitness, Alimentos y bebidas, Cafetería, Servicio de guardería en la habitación (con cargo), Desayuno buffet incluido todos los días, Área de juegos infantiles",
  //         description:
  //           "Somos The Paramar, un hotel boutique en Puerto Vallarta que combina la tradición mexicana con un estilo relajado y el mejor y cálido servicio.",
  //         rating: 5,
  //         category: "VIP",
  //       },
  //       {
  //         id: "1c24287e-1246-4137-bf3a-cfcdf5ca9de4",
  //         image:
  //           "https://th.bing.com/th/id/OIP.ycqWfv8O2Zcj2IH4EHpK3AHaE8?pid=ImgDet&rs=1",
  //         name: "Villa La Estancia Beach Resort & Spa Riviera Nayarit - All Inclusive",
  //         services:
  //           "Los mejores precios garantizados (1), Sin cargos ocultos, Reserva flexible, Reservaciones flexibles, Comprobación anticipada, Check in temprano y Salida tardía, Wifi gratuito, WIFI Gratuito (4), Agua, café, té y amenidades de bienvenida.",
  //         description:
  //           "Hay muchas razones por las que reservar directamente con nosotros en Villa La Estancia Riviera Nayarit Beach Resort & Spa es la mejor opción para tus vacaciones en Riviera Nayarit. Cuando reserves a través de nuestro sitio web.",
  //         rating: 4.5,
  //         category: "Economic",
  //       },
  //     ],
  //   },
  // ];
  
  const hotel = data.filter((e) => e.name === params.city);
  return (
    <div>
      {hotel.map((e) => {
        let data = e.hotels.silce(3).filter((e) => e.rating >= 4.8);
        return data.map((e) => {
          return (
            <div key={e.id}>
              <img className={styles.image} src={e.image} />
              <div className={styles.cardInfo}>
                <h2 className={styles.cityName}>{e.name}</h2>
                <div className={styles.popularity}>
                  <div className={styles.container}>
                    <p>{e.description}</p>
                  </div>
                  <div className={styles.container}>
                    <p>{e.services}</p>
                  </div>
                  <div className={styles.container}>
                    <p>Rating {e.rating}</p>
                  </div>
                  <div className={styles.container}>
                    <p>{e.category}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      })}
      <div>
        <Link to="/" className={styles.button}>
          Home
        </Link>
      </div>
    </div>
  );
};
export default DetailCity;
