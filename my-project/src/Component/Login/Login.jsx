import "./Login.css";
import userIcon from "../../../images/login/user.png";
import phoneIcon from "../../../images/login/phone.png";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../Context/UseAuth";
const Login = () => {
  const { signInWithGoogle } = useContext(authContext);
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
      setMostrar(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  const handleLoginWithGoogle = (e) => {
    signInWithGoogle();
  };

  return (
    <div className={`login ${mostrar ? "visible" : ""}`}>
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

              <button
                className="g-signin-button"
                onClick={(e) => handleLoginWithGoogle(e)}
              >
                Iniciar sesión con Google
                <svg
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="google__svg__icon"
                >
                  <path
                    d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    fill="#ffc107"
                  />
                  <path
                    d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z"
                    fill="#ff3d00"
                  />
                  <path
                    d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z"
                    fill="#4caf50"
                  />
                  <path
                    d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z"
                    fill="#1976d2"
                  />
                </svg>
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
          <span className="login__create__account__button">
            <Link to="/register" className="create__account__link">
              Crear cuenta
            </Link>
          </span>
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
