const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4 w-[100%] md:w-[60%] mx-auto">
      <input
        placeholder="Email"
        type="text"
        className="bg-transparent border text-white p-2 outline-none placeholder:text-white"
      />
      <input
        placeholder="Password"
        type="text"
        className="bg-transparent border text-white p-2 outline-none placeholder:text-white"
      />
      <button className="border w-[100px] mx-auto text-white p-2 text-xl hover:font-bold transition-all delay-75">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;