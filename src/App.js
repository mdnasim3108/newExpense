import Login from "./components/authentication/Auth";
import MyApp from "./Myapp";
import { useCookies, CookiesProvider } from "react-cookie";
function App() {
  const [cookies, setCookie] = useCookies(["name"]);
  var today=new Date()
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const loginHandler = (name) => {
    setCookie("name", name, { path: "/", expires: tomorrow });
  };
  return (
    <div>
      {!cookies.name ? (
        <CookiesProvider>
          <Login onConfirmUser={loginHandler} />
        </CookiesProvider>
      ) : (
        <MyApp />
      )}
    </div>
  );
}

export default App;
