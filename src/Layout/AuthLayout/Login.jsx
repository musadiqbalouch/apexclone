import React, { useState } from "react";
import Input from "../../Components/Common/Input";
import { useAuthContext } from "../../Context/AuthContext";
import Data from "../../Data.json";
import ApexLogo from "../../assets/LoginComponentImage/apexlogo.png";

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
    <div
      className="min-h-screen  w-full font[Outfit] relative bg-white overflow-hidden flex 
     flex-col items-center justify-center gap-6 text-center "
    >
      <div className="flex flex-col gap-5">
        <img
          className="h-20 w-30 object-cover mx-auto mb-6 "
          src={ApexLogo}
          alt=""
        />
        <h1 className="text-[#24748F] text-4xl font-bold">Welcome Back </h1>
        <h3 className="text-[#24748F] text-xl  font-semibold">
          Login to access your dashboard
        </h3>
      </div>
      <div className="w-120 ">
        <form className="flex flex-col gap-5">
          <Input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Email address"}
          />
          <Input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Password"}
          />
          <button
            className="bg-[#24748F] text-white text-lg font-bold py-3 rounded-lg  opacity-80"
            onClick={authincatation}
          >
            Sign In
          </button>
        </form>
        <div className="mt-7 flex flex-col gap-3">
          <hr />
          <h3 className="text-gray-400">
            Powered by <span className="text-[#24748F]">Apex web studios</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
