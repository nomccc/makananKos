import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const notifySuccess = () =>
    toast.success("Login berhasil!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Input tidak boleh kosong");
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) {
        notifySuccess();
        navigate("/dashboard");
      }
      console.log(session);
      const token = session.access_token;
      sessionStorage.setItem("token", token);
    } catch (error) {
      setErrorMsg("Email atau password salah");
    }
    setLoading(false);
  };

  return (
    <div className="container w-2/5 h-4/5 text-center border-2 rounded-lg border-solid my-10 p-20 shadow-lg mx-auto">
      <h1 className="font-semibold text-4xl  mb-5">LOGIN</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          id="emailLogin"
          ref={emailRef}
          placeholder="email"
          className="border-b-2 w-full p-3"
        />
        <input
          type="password"
          id="passwordLogin"
          ref={passwordRef}
          placeholder="password"
          className="border-b-2 w-full p-3 mb-8 "
        />
        <p className="mb-5 text-red-600">{errorMsg}</p>
        <Button text="Login" className="my-5" />
      </form>
    </div>
  );
};

export default Login;
