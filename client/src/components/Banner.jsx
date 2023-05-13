import coffeeShop from "../assets/coffee_shop.mp4";

const Banner = () => {
  return (
    <div className="-mt-[60px] w-[100%]">
      <video autoPlay loop muted className="h-[100vh] w-[100%] object-cover">
        <source src={coffeeShop} type="video/mp4" />
        Your browser does not support the video
      </video>
    </div>
  );
};

export default Banner;
