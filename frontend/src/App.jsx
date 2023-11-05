import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Main from './components/main';
import Home from './components/main/Home';
import User from './components/user';
import Profile from './components/user/Profile';
import SignUp from './components/main/SignUp';
import { AppProvider } from './Context/AppContext';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

function App() {

  return (
    <>
      <BrowserRouter>
      <SnackbarProvider>
      <AppProvider>
        <Routes>
            <Route path='main' element={<Main />} >
              <Route path='home' element={<Home />} /> 
              <Route path='signup' element={<SignUp />} /> 
            </Route>

            <Route path='user' element={<User />} >
              <Route path='profile' element={<Profile />} />
            </Route>
            
        </Routes>
        </AppProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </>
  )
}

export default App
