import React from 'react'
import './css/login-page.css';

export default function LoginPage({user_name, user_pass, submited, second_screen}) {


    setTimeout(() => {
        second_screen.current.style = 'display: block;';
      }, 3000)

    

    return (
        <div className='login-box' ref={second_screen}>


            <div className="heading-image">
                <img src="insta-text.png" alt="Instagram" className='insta-image' />
            </div> 

            <div className="user-input-fields">
                <div className="username-inp parent-inp">
                    <input type="text" id="username" className='inp-fields' placeholder='null' ref={user_name}/>
                    <span className='s-name go-up-user'>Phone number, username or email address</span>
                </div>


                <div className="password-inp parent-inp">
                    <input type="password" id="password" className='inp-fields' placeholder='null' ref={user_pass}/>
                    <span className='s-pass go-up-pass'>Password</span>
                </div>
            </div>


            <div className="login">
                <button className='login-btn' onClick={() => { submited() }}>Log in</button>
            </div>

            <div className="hor-line">
                <hr />
                or
                <hr />
            </div>

            <div className="face-book">
                <button className='facebook-btn'>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <div> login with facebook </div>
                </button>
            </div>


            <div className="from-meta">
                <div className="from">from</div>
                <div className="meta-img"><img src="meta.png" alt="meta.png not found" className='meta' /></div>
            </div>
        </div>
    )
}
