import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    const [avatar, setAvatar] = useState('');

    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('user');
        setLoggedIn(false);
        navigate('/signup');
    }

    const [loggedIn, setLoggedIn] = useState(currentUser!==null);

    return <AppContext.Provider value={{ loggedIn, setLoggedIn, logout, avatar, setAvatar }}>
        {children}
    </AppContext.Provider>
};

const UseAppContext = () => useContext(AppContext);

export default UseAppContext;