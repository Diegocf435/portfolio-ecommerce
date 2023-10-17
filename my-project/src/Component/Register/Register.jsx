import { useEffect, useState } from "react";
import userIcon from "../../../images/login/user.png";
import phoneIcon from "../../../images/login/phone.png";
import { IoIosArrowForward } from "react-icons/io";
import "./Register.css";
import { Link } from "react-router-dom";
import { UseFetch } from "../../CustomHooks/UseFetch";
const Register = () => {
  const [userData, setUser] = useState({
    user: "",
    email: "",
    password: "",
  });
  const [userFetched, setUserFetched] = useState([]);
  const handleChange = (e) => {
    setUser({ ...userData, [e.target.name]: e.target.value });
  };
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState({ message: "" });
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchingProducts();
    console.log(userData);
  };
  async function fetchingProducts() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5173/",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      },
      body: JSON.stringify(userData),
      mode: "cors",
    };
    try {
      const result = await UseFetch(
        "http://localhost:3000/api/v1/auth2/register-user",
        options
      );
      if (!result.ok) {
        setError({ message: result.message });
        setSuccess(false);
      } else {
        setError({ message: "" });
        setSuccess(true);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    // Simulamos un retraso de medio segundo antes de mostrar el componente
    const timer = setTimeout(() => {
      setMostrar(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  console.log(error);

  return (
    <div className={`register ${mostrar ? "visible" : ""}`}>
      <div className="register__container">
        <form onSubmit={handleSubmit}>
          <h2>
            ¡Hola! Ingresa tus datos,
            <br /> por favor.
          </h2>

          {error.message.length > 0 && (
            <p className="register__error__message">Error: {error.message}</p>
          )}
          {success && (
            <p className="register__success__message">Registro exitoso</p>
          )}
          <label htmlFor="phone">Ingresa tu correo electronico</label>
          <input
            className="register__input"
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <label htmlFor="user">Ingresa tu nombre de usuario</label>
          <input
            className="register__input"
            type="text"
            name="user"
            value={userData.user}
            onChange={handleChange}
          />
          <label htmlFor="phone">Ingresa tu contraseña</label>
          <input
            className="register__input"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <button type="submit" className="register__continue__button">
            Registrar
          </button>
          <span className="register__login__link__button">
            <Link to="/login">Ya tengo cuenta</Link>
          </span>
        </form>
        <div className="register__container__report_problem">
          <h4 className="report__problem__title">Reportar un problema</h4>
          <div className="register__report__a__problem__top">
            <div>
              <img className="register__icon" src={phoneIcon} alt="" />
              <span>Robo o perdida de telefono</span>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
          <div className="register__divider"></div>
          <div className="register__report__a__problema__bottom">
            <div>
              <img className="register__icon" src={userIcon} alt="" />
              <span>Robo de cuenta</span>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="register__bottom__container">
          <span>Protegido por reCAPTCHA.</span>
          <span className="register__privacity__link">Privacidad</span>
          <span className="register__terms__link">Condiciones</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
