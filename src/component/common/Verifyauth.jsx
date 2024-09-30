import React, { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function Verifyauth({isAuthenticated,user,Children}) {



    const location = useLocation();
    console.log(location)
    

    if(!isAuthenticated && !(location.pathname.includes('login'))){
        return <Navigate to="/login"/>
    }

    if (isAuthenticated && (location.pathname.includes('login'))){
        if(user?.role === 'admin'){
            return <Navigate to="/admin/dash" />
        }else{
            return <Navigate to="/" />
        }

    }
    // if (isAuthenticated && user?. role !== 'admin' )
    return <>
    {Children}
    </>

}

 


export default Verifyauth