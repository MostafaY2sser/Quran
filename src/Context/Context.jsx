
import  { createContext } from 'react';


export const Store = createContext()


const  StoreProvider = ({ children }) => {

    

    return (
        <UserContext.Provider value={{ }}>
          {children}
        </UserContext.Provider>
      );
}


export default  UserProvider ;


