import { createContext, useState } from 'react';
import { cardsData } from './cardsData';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [myData, setMyData] = useState(cardsData);

  return <Context.Provider value={{ myData, setMyData }}>{children}</Context.Provider>;
};
