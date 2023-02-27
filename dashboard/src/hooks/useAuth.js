import { useContext } from "react";
import AuthContext from "../contex/AuthProvider";

const useAuth = () =>{
    return useContext(AuthContext)
}

export default useAuth