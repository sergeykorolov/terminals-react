import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth-reducer";
import styles from "./Login.module.scss"
import {Redirect} from "react-router";

const Login = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isValidUsername, setIsValidUsername] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [tryLogin, setTryLogin] = useState(false);

    useEffect(() => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        setIsValidPassword(passwordRegex.test(password));
    }, [password, tryLogin]);

    useEffect(() => {
        setIsValidUsername(true);
    },[username]);

    const submitHandler = async () => {

        setTryLogin(true);

        if (isValidPassword && username) {
            const profile = await fetch(`https://api.github.com/users/${username}`);
            const profileData = await profile.json();

            if (profileData.login) {
                if (username.toLowerCase() === profileData.login.toLowerCase()) {
                    props.loginUser(profileData);
                    setIsValidUsername(true);
                }
            } else {
                setIsValidUsername(false);
            }
        } else {
            setIsValidUsername(!!username);
        }
    }

    if (props.isAuth) {
        return <Redirect to={"/terminals"}/>
    }

    return (
        <div className={styles.loginPage}>
            <h3>Авторизация</h3>
            <div className={styles.loginForm}>
                <div className="form-group">
                    <label htmlFor="login">Логин (пользователь GitHub)</label>
                    <input type="text"
                           className="form-control"
                           id="login"
                           value={username}
                           onChange={e => setUsername(e.target.value)}
                    />
                    {!isValidUsername && tryLogin
                        ? <small id="login" className="form-text text-danger">Введите имя пользователя c GitHub</small>
                        : ""
                    }

                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input type="text"
                           className="form-control"
                           id="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                    />
                    {!isValidPassword && tryLogin
                        ? <small
                            id="password"
                            className="form-text text-danger"
                        >Пароль должен быть не менее 8 символов и содержать 1 прописную латинскую букву и 1 цифру</small>
                        : ""
                    }
                </div>
            </div>
            <button className="btn btn-primary" onClick={submitHandler}>Войти</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    avatar: state.auth.avatar
})

export default connect(mapStateToProps, {loginUser})(Login);