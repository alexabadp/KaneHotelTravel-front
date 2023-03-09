import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import styles from "./optionsUser.module.css";
import {Container ,FormGroup, Input} from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";


function OptionsUser() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  const [image, setImage] = useState(user.picture);
  const [loading, setLoading] = useState(false)

  const cloud_name = "dbnq7uy73"
  const preset = "bsedwizu"

  const uploadImage = async(e) => {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", `${preset}`)
      setLoading(true)
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "POST",
        body: data
      })

      const file = await res.json();
      setImage(file.secure_url)
      setLoading(false)
      // console.log(file)
      console.log(file.secure_url)
  }

  return (
    <div>
        <NavBar/>
        {isAuthenticated ? (
          <div className={styles.containerOptions}>
          <h1>Perfil de usuario</h1>
            <div className={styles.profilePicture}>
              <img src={image} alt="profileImage" className={styles.profileImage}/>
              {/* {loading ? (<h3>Cargando imagen...</h3>) : (<img src={image}/>)} */}
              <input
                id="inputFile"
                type="file"
                name="file"
                onChange={uploadImage}
                className={styles.inputFile}
              />
              {/* <button onClick={document.getElementById("inputFile").click()}>Actualizar</button> */}
            </div>
            <h2 className={styles.name}>{user.name}</h2>

          <div className={styles.NavProfile}>
              <Link 
                to="/profile/userData"
                className={styles.link}
              >
                  Mis datos
              </Link>
              <Link 
                to={`/profile/bookings/${user.email}`}
                className={styles.link}
              >
                  Reservas
              </Link>
          </div>
          </div>
        ):
        (<div>
          <h3>No has iniciado sesión</h3>
        </div>)
        }
        
        
    </div>
  );
}

export default OptionsUser;