import { Route, Switch } from "react-router-dom";
import AllOrders from "./pages/AllOrders";
import CreateNewOrder from "./pages/CreateNewOrder";
import HeaderLayout from "./components/layout/HeaderLayout";
import Register from "./pages/register";
import { useSelector } from "react-redux";
import UpdatePage from "./pages/UpdatePage";
import Login from "./pages/Login";
// import Home from "./pages/Home";

import "./components/FontAwsomeIcons";

function App() {
  let user = useSelector((store) => store.allUsers.logedUsers);

  if (localStorage.getItem("userProfile")) {
    user = JSON.parse(localStorage.getItem("userProfile"));
  }

  const token = localStorage.getItem("userProfile")
    ? JSON.parse(localStorage.getItem("userProfile")).token
    : user.token;
  console.log("token", token);

  return (
    <HeaderLayout >
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register" >
          <Register />
        </Route>
        <Route path="/allOrders" >
          <AllOrders />
        </Route>
        <Route path="/new-order">
          <CreateNewOrder />
        </Route>
        <Route path="/update-page/:id">
          <UpdatePage />
        </Route>
        
      </Switch>
    </HeaderLayout>
  );
}

export default App;
