import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import { toast } from "react-toastify";


const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
      try{ const result = await authService.login(values.email, values.username, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate("/");
        toast.success('Login Successful')
      } catch(error) {
        toast.error(`${error.message}`)
      }
    };

    const registerSubmitHandler = async (values) => {
        try{
        const result = await authService.register(values.email, values.username, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate("/");
        toast.success('Register Successful')
    }catch(error){
        toast.error(`${error.message}`)
    }
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;