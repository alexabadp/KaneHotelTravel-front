import styles from "./NavBarfooter.module.css";
import Logo from "../img/logo.jpg"
import { Link } from "react-router-dom";

const NavBarFooter = () => {

  return (
    <div className={styles.navBarFooterContainer}>
        <nav>
            <div className={styles.navBarFooterContainer2}>
                <Link to="/">
                    <div className={styles.navBarLogo}>
                        <img src={Logo} alt="logo" />
                        <h2>KANE TRAVELS</h2>
                    </div>
                </Link>

                <div className={styles.containerLinks}>
                    <a className={styles.links} href="#Arriba">Arriba</a>
                    <a className={styles.links} href="#AlojamientosVIP">Alojamientos VIP</a>
                </div>

                <div className={styles.containerLinks}>
                    <a className={styles.links} href="#Recomendados">Recomendados</a>
                    <a className={styles.links} href="#MejoresPrecios">Mejores Precios</a>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default NavBarFooter;
