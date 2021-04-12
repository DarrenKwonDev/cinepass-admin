import React, { createContext, useState } from 'react';
import { CINEPASSAUTH } from '../Components/type/cinepassAuth';

interface IProps {
  children: JSX.Element | Array<JSX.Element>;
}

interface ILoginData {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContextData = {
  isLoggedIn: false,
  setIsLoggedIn: null,
};

export const LoginContext = createContext<ILoginData>(LoginContextData);

function LoginContextProvider({ children }: IProps): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(JSON.parse(localStorage.getItem(CINEPASSAUTH)) ? true : false);

  const initData = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return <LoginContext.Provider value={initData}>{children}</LoginContext.Provider>;
}

export default LoginContextProvider;
