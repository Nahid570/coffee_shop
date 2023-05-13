import { useState } from "react";
import { Header } from "../components";
import Tab from "../components/FormTab/Tab";
import TabItem from "../components/FormTab/TabItem";
import styles from "../helper/style";
import TabContent from "../components/FormTab/TabContent";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div
      className={`bg-coffeeBg h-[100vh] w-[100%] bg-cover bg-no-repeat bg-center relative`}
    >
      <Header hide={true} />
      <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-60"></div>
      {/* Login and Register Tab  */}
      <div
        className={`relative z-20 ${styles.paddingX} flex justify-center flex-col items-center`}
      >
        <Tab>
          <TabItem
            active={activeTab == "login"}
            onClick={() => setActiveTab("login")}
          >
            Login
          </TabItem>
          <TabItem
            active={activeTab == "register"}
            onClick={() => setActiveTab("register")}
          >
            Register
          </TabItem>
        </Tab>
        <div className="p-4 w-[100%]">
          <TabContent active={activeTab == "login"}>
            <LoginForm />
          </TabContent>
          <TabContent active={activeTab == "register"}>
            <RegisterForm />
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default Auth;
