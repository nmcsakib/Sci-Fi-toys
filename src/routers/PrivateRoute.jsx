import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { BallTriangle } from "react-loader-spinner";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="w-full h-full flex justify-center items-center">
            <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperclassName={{}}
        wrapperStyle=""
        visible={true}
      />
        </div>
    }
    else if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    } 
    
    return children;
};

export default PrivateRoute;