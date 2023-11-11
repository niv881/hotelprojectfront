
import { ReactNode, createContext, useEffect, useState } from "react";

interface AuthContextState{
    isLoggedIn:boolean
    token?:string
    username?:string
    isManager:boolean
    isAdmin:boolean
    login : (username:string, token : string,manager:boolean,admin:boolean)=>void
    logout: ()=>void
}

const initialState = {
  isLoggedIn: false,
  isManager :false,
  isAdmin :false,
  login: (username: string, token: string,manager:boolean,admin:boolean) => {},
  logout: () => {}
}
const AuthContext = createContext<AuthContextState>(initialState);

export const AuthContextProvider = ({children} : {children:ReactNode}) => {

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [username,setUsername] = useState<string>()
    const [token,setToke] = useState<string>()
    const [isManager,setIsManager] = useState(false)
    const [isAdmin,setIsAdmin] = useState(false)

    useEffect(() => {
      const data = localStorage.getItem("user")
      if(data){
        const user = JSON.parse(data)
        setIsLoggedIn(true)
        setToke(user.token)
        setUsername(user.username)
        setIsManager(user.role.some((role: { authority: string; })=> role.authority === 'ROLE_MANAGER'))
        setIsAdmin(user.role.some((role: { authority: string; })=> role.authority === 'ROLE_ADMIN'))
      }
    }, [])
    
const auth = {
    isLoggedIn,
    token,
    username,
    isManager,
    isAdmin,
    login: (username: string, token: string,manager : boolean,admin : boolean) => {
        setUsername(username)
        setToke(token)
        setIsLoggedIn(true)
        setIsManager(manager)
        setIsAdmin(admin)
    },
    logout: () => {
        setUsername(undefined)
        setToke(undefined)
        setIsLoggedIn(false)
        setIsManager(false)
        setIsAdmin(false)
        localStorage.removeItem('user')
    }
}

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContext;

