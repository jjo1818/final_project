import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { userInfo } from './services/userService';

import './index.css';

import EditCharacter from './pages/characters/Edit';
import IndexCharacter from './pages/characters/Index';
import NewCharacter from './pages/characters/New';
import ShowCharacter from './pages/characters/Show';
import ShowUser from './pages/users/Show';

import Register from './pages/users/Register';
import Login from './pages/users/Login';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      
      let token = localStorage.getItem("token")

      if (token) {
          getLoggedInUser()
      } else {
          setIsLoading(false)
      }

      async function getLoggedInUser() {
          const userData = await userInfo()
          setUser(userData)
          setIsLoading(false)
      }

  }, [])
  console.log(user)

  let loggedIn = user.username
  let userId = user._id
  

  console.log(loggedIn)

  console.log(userId)

  return (
    <div className="App">
      <Navbar user={loggedIn} setUser={setUser} />
      <Routes>
        
          <Route path='/characters' element={<IndexCharacter user={loggedIn} />} />
          <Route path='/characters/:id' element={<ShowCharacter user={userId} />} />
          {loggedIn ?
            <>
              <Route path='/users/:id' element={<ShowUser user={userId} />} />
              {/* <Route path='/characters/:id' element={<ShowCharacter user={userId} />} /> */}
              <Route path='/characters/new' element={<NewCharacter user={loggedIn} />} />
              <Route path='/characters/:id/edit' element={<EditCharacter />} />
              {!isLoading && <Route path='*' element={<Navigate to='/characters' />} />}
            </>
            :
            <>
              <Route path='/register' element={<Register setUser={setUser} />} />
              <Route path='/login' element={<Login setUser={setUser} />} />
              {!isLoading && <Route path='*' element={<Navigate to='/login' />} />}
            </>
          }
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
