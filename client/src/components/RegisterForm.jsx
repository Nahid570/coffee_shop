import { useNavigate } from "react-router-dom";
import useUserAuth from "../Context/useUserAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import Toast from "./Toast";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const notify = (message) => toast(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      notify("Input field should not be empty");
      return;
    }
    try {
      await signUp(email, password);
      notify("Account Created Successfully");
      navigate("/");
    } catch (error) {
      notify(error.message);
    }
  };

  return (
    <>
      <Toast />
      <form
        className="flex flex-col gap-4 w-[100%] md:w-[60%] mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Email"
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
        <button
          type="submit"
          className="border w-[100px] mx-auto text-white p-2 text-xl hover:font-bold transition-all delay-75"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
