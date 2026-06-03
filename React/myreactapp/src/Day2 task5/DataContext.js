import React from 'react';
export const DataContext = React.createContext();
export const useDataContext = () => React.useContext(DataContext);

export function DataContextProvider({ children }) 
{
  const [isLoggedIn, toggleLogin] = React.useState(true);

  const [userName, setUserName] = React.useState('Varsha');
  
  return (
    <DataContext.Provider value={{ isLoggedIn, userName, toggleLogin, setUserName }}>
      {children}
    </DataContext.Provider>
  );
}