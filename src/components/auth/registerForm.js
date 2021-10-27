import classes from "../../pages/register.module.css";
import { useState } from "react";
import { connect } from 'react-redux'
import { registerUser } from "../../redux/actions/usersActions";
import {useHistory} from 'react-router-dom'




function Registerform({registerUser}) {
  const history = useHistory()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitRegisterForm() {
      const registerData = {
          email,
          password
      }

      registerUser(registerData)
      history.push('/')

  }
  

  return (
    <div>
      <main className={classes.main}>
          <h1 className={classes.signInHeader}>Please sign up</h1>

          <div className="form-floating">
            <input
              type="email"
              className={classes.emailIput}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-floating">
            <input
              type="password"
              className={classes.passwordInput}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={submitRegisterForm} className="w-100 btn btn-lg btn-primary" type="click">
            Register
          </button>
      </main>
    </div>
  );
}

export default connect(null,{registerUser})(Registerform);
