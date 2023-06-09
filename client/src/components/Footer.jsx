import cup_coffee from "../assets/cup_coffee.gif";

const Footer = () => {
  return (
    <div className="bg-primary h-[50vh] w-[100%] items-center flex justify-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <img
          src={cup_coffee}
          alt=""
          className="h-[200px] w-[200px] object-cover"
        />
        <p className="text-white text-xl">
          All content ©{" "}
          <span className="text-xl font-semibold underline">
            {" "}
            Sohag Hossain
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
