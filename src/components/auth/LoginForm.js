import classes from "../../pages/Login.module.css";
import { useState } from "react";
import { connect } from 'react-redux'
import { loginUser } from "../../redux/actions/usersActions";
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'


function LoginForm({loginUser}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()


    function submitLoginForm() {
        
        const loginData = {
            email,
            password
        }
        loginUser(loginData)
        history.push('/allOrders')


    }
    return(
        <div>
            <main className={classes.main}>
                <h1 className={classes.signInHeader}>Please Login</h1>

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
                <button onClick={submitLoginForm} className="w-100 btn btn-lg btn-primary" type="click">
                    Login
                </button>
                <div className={classes.switchToRegisterHeader}>
                    <span>If you don't have an account please <Link to="/register">SignUp</Link></span>
                </div>
            </main>
        </div>
    )
}

export default  connect(null,{loginUser})(LoginForm)
