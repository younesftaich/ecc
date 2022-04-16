import React, { useEffect } from "react";
import { Inertia } from '@inertiajs/inertia'



function Navigation() {

 
    useEffect(() => {
        localStorage.removeItem("customerid")
       
        Inertia.get('/', {  }, { replace: true })



      });
      
    return (
        <div>
            
        </div>
    );
}

export default Navigation;
