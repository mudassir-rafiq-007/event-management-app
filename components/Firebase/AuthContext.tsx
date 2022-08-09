import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token: string)=>{},
    logOut: ()=>{}
})

interface propsToAuthCtx{
    children: JSX.Element
}

export default function AuthContextProvider (props: propsToAuthCtx){
    const [authToken, setAuthToken] = useState<string>('')

    function authenticate(token: string){
        setAuthToken(token)
    }

    function logOut (){
        setAuthToken('')
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logOut: logOut
    }
    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}