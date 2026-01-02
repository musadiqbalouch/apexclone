import React, { useState } from "react";
import Input from "../../Components/Common/Input";
import { useAuthContext } from "../../Context/AuthContext";
import Data from "../../Data.json";

const Login = () => {
  const { handleLogin } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    userEmail: email,
    userPassword: password,
  };
  const authincatation = () => {
    const auth = Data.find(
      (dta) =>
        dta.email === user.userEmail && dta.password === user.userPassword
    );
    console.log(auth);
    if (auth) {
      handleLogin(auth);
    } else {
      console.log("not valid");
    }
  };

  return (
    <div>
      <Input
        type={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={authincatation}>Login</button>
    </div>
  );
};

export default Login;
