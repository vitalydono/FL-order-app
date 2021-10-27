import { Link, useHistory } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useSelector } from "react-redux";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

function MainNavigation() {
  let user = useSelector((store) => store.allUsers.logedUsers);
  const history = useHistory();
  const token = localStorage.getItem("userProfile")
    ? JSON.parse(localStorage.getItem("userProfile")).token
    : user.token;

  

  function logOutHandler(e) {
    localStorage.removeItem("userProfile")
    history.push("/");
    window.location.reload()

  }

  return (
    <div className={classes.header}>
      <div className={classes.navHeader}>Orchedia</div>
        {token ? (
          <div className={classes.navOptions}>
            <ul>
              <li>
                <Link to="/allOrders"><HomeIcon/></Link>
              </li>
              <li>
                <Link to="/new-order"><BorderColorIcon/></Link>
              </li>
              <li>
                <button className={classes.logoutButton} type="submit" onClick={logOutHandler}>
                  <LogoutIcon/>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
    </div>
  );
}

export default MainNavigation;
