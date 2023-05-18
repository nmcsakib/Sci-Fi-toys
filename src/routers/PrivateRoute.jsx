import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { BallTriangle } from "react-loader-spinner";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className="w-full h-full flex justify-center items-center">
            <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
        </div>
    }
    else if(!user){
        return <Navigate to='/login'></Navigate>
    } 
    
    return children;
};

export default PrivateRoute;