import React from 'react'
import { createContext,useContext,useState,useEffect } from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/src/config/Firebase';

const userAuthContext = createContext<any>(null);


export  function UserAuthContextProvider({children}:{children:any}) {

const [user,setUser] = useState({});

function Login(Email :string,Password :string ){
   
   
    return signInWithEmailAndPassword(auth,Email,Password);
}

function signUp(Email :string,Password :string){
    return createUserWithEmailAndPassword(auth,Email,Password);
}
function logOut(){
    return signOut(auth);
}

function resetPass(Email:string){
    return sendPasswordResetEmail(auth,Email);
}

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser :any)=>{
            console.log("Auth",currentUser)
            setUser(currentUser);
            
        })
        return ()=>{
            unsubscribe();
        }
    },[auth])


  return (
   <userAuthContext.Provider value={{user,Login,signUp,logOut,resetPass}}>{children}</userAuthContext.Provider>
  )
}
export function useUserAuth(){
    return useContext(userAuthContext)
}