import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

function Logout(){
    
    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    return(
        <div>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Logout