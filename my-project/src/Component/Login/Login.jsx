import "./Login.css";
import userIcon from "../../../images/login/user.png";
import phoneIcon from "../../../images/login/phone.png";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    if (e.target.value.trim()) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const isFormCompleted = !userData.email.trim();
  console.log(isFormCompleted);
  const handleStep1Change = () => {
    const state = isFormCompleted ? 1 : 2;
    setCurrentStep(state);
  };
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!userData.email.trim()) {
      setError(true);
    }
    console.log(`el valor de user es : ${userData.email}`);
  };
  useEffect(() => {
    // Simulamos un retraso de medio segundo antes de mostrar el componente
    const timer = setTimeout(() => {
      setMostrar(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`login ${mostrar ? 'visible' : ''}`}>
      <div className="login__container">
        <form onSubmit={handleEmailSubmit}>
          <h2>
            ¡Hola! Ingresa tu teléfono,
            <br /> e-mail o usuario
          </h2>

          {currentStep === 1 && (
            <>
              {error && <p className="login__error__message">Campo Vacio</p>}
              <label htmlFor="phone">Teléfono, e-mail o usuario</label>
              <input
                className="login__input"
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="login__continue__button"
                onClick={handleStep1Change}
              >
                Continuar
              </button>
            </>
          )}
          {currentStep === 2 && (
            <>
              <label htmlFor="password">Password</label>
              <input
                className="login__input"
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
              <button type="submit" className="login__continue__button">
                Continuar
              </button>
              <span
                className="login__return__button"
                type="submit"
                onClick={() => setCurrentStep(1)}
              >
                volver
              </span>
            </>
          )}
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
