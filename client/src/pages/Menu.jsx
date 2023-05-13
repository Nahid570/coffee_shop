import { Footer, Header, HomeMenu } from "../components";

const Menu = () => {
  return (
    <div>
      <Header background={true} hide={true} />
      <HomeMenu max={5} />
      <Footer />
    </div>
  );
};

export default Menu;
