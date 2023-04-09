import React from "react";

function Layout( {children}) {
    return ( 
        <section className="bg-gray-800 min-h-screen py-10">
            {children}
        </section>
     );
}

export default Layout;