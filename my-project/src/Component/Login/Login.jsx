import "./Login.css";
import userIcon from "../../../images/login/user.png";
import phoneIcon from "../../../images/login/phone.png";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
const Login = () => {
  const [userData, setUserData] = useState([
    {
      email: "",
    },
  ]);
  return (
    <div className="login">
      <div className="login__container">
        <form action="">
          <h2>
            ¡Hola! Ingresa tu teléfono,
            <br /> e-mail o usuario
          </h2>
          <label htmlFor="phone">Teléfono, e-mail o usuario</label>
          <input className="login__input" type="text" />
          <button className="login__continue__button">Continuar</button>
          <span className="login__create__account__button">Crear cuenta</span>
        </form>
        <div className="login__container__report_problem">
          <h4 className="report__problem__title">Reportar un problema</h4>
          <div className="login__report__a__problem__top">
            <div>
              <img className="login__icon" src={phoneIcon} alt="" />
              <span>Robo o perdida de telefono</span>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
          <div className="login__divider"></div>
          <div className="login__report__a__problema__bottom">
            <div>
              <img className="login__icon" src={userIcon} alt="" />
              <span>Robo de cuenta</span>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="login__bottom__container">
          <span>Protegido por reCAPTCHA.</span>
          <span className="login__privacity__link">Privacidad</span>
          <span className="login__terms__link">Condiciones</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
