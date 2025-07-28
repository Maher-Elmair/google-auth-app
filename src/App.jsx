import "./App.css";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  function handleLogout() {
    googleLogout();
    setUser(null);
  }

  return (
    <>
      {user ? (
        <>
          <div>
            <img src={user.picture} alt="User" />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </>
      ) : (
        <GoogleLogin
          onSuccess={(CredentialResponse) => {
            const decoded = jwtDecode(CredentialResponse.credential);
            console.log(decoded);
            setUser(decoded);
          }}
          onError={() => console.log("Login failed")}
          auto_select={true}
        />
      )}
    </>
  );
}



export default App;
