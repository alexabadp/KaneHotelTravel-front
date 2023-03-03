import React from "react";
import NavBar from "../../components/NavBar/NavBar"
import styles from "./Landing.module.css"
import VIP1 from "./img/VIP-1.jpeg"
import VIP2 from "./img/VIP-2.jpeg"
import VIP3 from "./img/VIP-3.jpeg"
import Actividad1 from "./img/Actividad1.jpeg"
import Actividad2 from "./img/Actividad2.jpeg"
import Actividad3 from "./img/Actividad3.jpeg"
import { Link } from "react-router-dom";
import NavBarFooter from "./NavBarFooter/NavBarFooter";

const Landing = () => {
    return (
        <div>
           <header>
                <section id="Arriba">
                    <NavBar/>
                </section>
           </header>

           <main>
                <div className={styles.containerMain}>
                    <section>
                            <div className={styles.containerHeo}>
                                <div className={styles.containerContent}>
                                    <h1 className={styles.title}>Kane Travels</h1>
                                    <p className={styles.parrafo}>
                                        Reserva ahora y vive una experiencia única.
                                    </p>
                                    <Link to="/">
                                    <button 
                                        className={styles.homeButton}>
                                        Home
                                    </button>
                            </Link>
                                </div>
                            </div>
                            <div className={styles.containerLinks}>
                                
                                <p className={styles.pLinks}>
                                <a className={styles.links} href="#Recomendados">Recomendados</a></p>

                                <p className={styles.pLinks}>
                                <a className={styles.links} href="#MejoresPrecios">Mejores Precios</a></p>

                                <p className={styles.pLinks}>
                                <a className={styles.links} href="#Actividades">Actividades</a></p>

                                <p className={styles.pLinks}>
                                <a className={styles.links} href="#Abajo">Abajo</a></p>
                            </div>
                    </section>

                    <section>
                            <div className={styles.containerDivs}>
                               <section id="AlojamientosVIP">
                                    <h2>Alojamientos VIP</h2>
                                    <div className={styles.containerDivsVip}>
                                        <div className={styles.divsCarrusel}>
                                            <img src={VIP1} alt=""/> 
                                            <div className={styles.containerDescription}>
                                                <h4>Title</h4>
                                                <p>
                                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            <img src={VIP2} alt=""/>
                                            <div className={styles.containerDescription}>
                                                <h4>Title</h4>
                                                <p>
                                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            <img src={VIP3} alt=""/>
                                            <div className={styles.containerDescription}>
                                                <h4>Title</h4>
                                                <p>
                                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                               </section>

                                <section id="Recomendados">
                                <h2>Recomendados</h2>
                                    <div className={styles.containerDivsRecomendados}>
                                        <div className={styles.divsCarrusel}>
                                        <img src={VIP1} alt="" /> 
                                            <div className={styles.containerDescription}>
                                                <h4>Title</h4>
                                                <p>
                                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            <img src={VIP2} alt="" />
                                            <div className={styles.containerDescription}>
                                                <h4>Title</h4>
                                                <p>
                                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            <img src={VIP3} alt=""/>
                                            <div className={styles.containerDescription}>
                                                <h4>Title</h4>
                                                <p>
                                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="MejoresPrecios">
                                    <h2>Mejores Precios</h2>
                                    <div className={styles.containerDivsMejoresPrecios}>
                                        <div className={styles.divsCarrusel}>
                                        <img src={VIP1} alt=""/> 
                                        <div className={styles.containerDescription}>
                                            <h4>Title</h4>
                                                <p>
                                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                                </p>
                                        </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            <img src={VIP2} alt="" />
                                            <div className={styles.containerDescription}>
                                                <h4>Title</h4>
                                                <p>
                                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.divsCarrusel}>
                                            <img src={VIP3} alt=""/>
                                            <div className={styles.containerDescription}>
                                                <h4>Title</h4>
                                                <p>
                                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                    </section>

                    <section id="Actividades">
                        <div className={styles.containerDivsActividades}>
                            <h3 className={styles.actividadesTitle}>Actividades Sugeridas</h3>
                            
                            <div className={styles.containerDivsActividades}>
                                
                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad1} alt=""/>
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4>Title</h4>
                                         <p>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad2} />
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4>Title</h4>
                                         <p>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad3} alt=""/>
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4>Title</h4>
                                         <p>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad1} alt=""/>
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4>Title</h4>
                                         <p>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad2} />
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4>Title</h4>
                                         <p>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.divsImgActividad}>
                                    <img src={Actividad3} alt=""/>
                                    <div className={styles.containerDescriptionActividad}>
                                        <h4>Title</h4>
                                         <p>
                                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <Link to="/">
                                <button 
                                className={styles.homeButton2}>
                                    Home
                                </button>
                            </Link>
                        </div>
                    </section>

                </div>
           </main>

           <footer>
                <section id="Abajo">
                    <NavBarFooter /> 
                </section>
           </footer>   

        </div>
    )
}

export default Landing