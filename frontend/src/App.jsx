import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Main from './components/main';
import Admin from './components/admin';
import Home from './components/main/Home';
import User from './components/user';
import Profile from './components/user/Profile';
import SignUp from './components/main/SignUp';
import { AppProvider } from './Context/AppContext';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import Aboutus from './components/main/Aboutus';
import AudioClassifier from './components/user/AudioClassifier';
import TrainModel from './components/main/TrainModel';
import ImageClassifier from './components/user/ImageClassifier';
import TextClassifier from './components/user/TextClassifier';
import ManageModel from './components/user/ManageModel';
import ResetPassword from './components/main/ResetPassword';
import AdminDashboard from './components/admin/AdminDashboard';
import ManageUser from './components/admin/ManageUser';
import UserAuth from './UserAuth';
// import PoseClassifier from './components/user/PoseClassifier';
import Thankyou from './components/main/Thankyou';
import ContactUs from './components/main/ContactUs';

function App() {

  return (
    <>
      <BrowserRouter>
        <SnackbarProvider>
          <AppProvider>
            <Routes>
              <Route path='/' element={<Navigate to="/main/home" />} />
              <Route path='admin' element={<Admin />} >
              <Route path='dashboard' element={<UserAuth><AdminDashboard /></UserAuth>}/>
                <Route path='manageuser' element={<UserAuth><ManageUser /></UserAuth>} />
              </Route>
              <Route path='main' element={<Main />} >
                <Route path='home' element={<Home />} />
                <Route path='resetpassword' element={<ResetPassword />} />
                <Route path='train' element={<TrainModel />} />
                <Route path='aboutus' element={<Aboutus />} />
                <Route path='thankyou' element={<Thankyou />} />
                <Route path='contactus' element={<ContactUs />} />
                <Route path='signup' element={<SignUp />} />
              </Route>

              <Route path='user' element={<User />} >
                <Route path='profile' element={<Profile />} />
                <Route path='image' element={<UserAuth><ImageClassifier /></UserAuth>} />
                <Route path='audio' element={<UserAuth><AudioClassifier /></UserAuth>} />
                <Route path='text' element={<UserAuth><TextClassifier /></UserAuth>} />
                {/* <Route path='pose' element={<UserAuth><PoseClassifier /></UserAuth>} /> */}
                <Route path='managemodel' element={<UserAuth><ManageModel /></UserAuth>} />
              </Route>

            </Routes>
          </AppProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </>
  )
}

export default App
