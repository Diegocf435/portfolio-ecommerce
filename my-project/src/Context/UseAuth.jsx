import { createContext } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/FirebaseConf";
export const authContext = createContext();

const AuthContext = ({ children }) => {
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <authContext.Provider value={{ signInWithGoogle }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthContext;
