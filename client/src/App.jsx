import UserAuthContextProvider from "./Context/UserAuthContext";
import Router from "./helper/Router";

function App() {
  return (
    <UserAuthContextProvider>
      <Router />
    </UserAuthContextProvider>
  );
}

export default App;
