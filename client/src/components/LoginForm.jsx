import { useNavigate } from "react-router-dom";
import useUserAuth from "../Context/useUserAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import Toast from "./Toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const notify = (message) => toast(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      notify("Input field should not be empty");
      return;
    }
    try {
      await login(email, password);
      notify("Account Created Successfully");
      navigate("/");
    } catch (error) {
      notify("Check your email or password");
    }
  };

  return (
    <>
      <Toast />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[100%] md:w-[60%] mx-auto"
      >
        <input
          placeholder="Email"
          type="text"
          className="bg-transparent border text-white p-2 outline-none placeholder:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="bg-transparent border text-white p-2 outline-none placeholder:text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="border w-[100px] mx-auto text-white p-2 text-xl hover:font-bold transition-all delay-75">
          Sign In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
