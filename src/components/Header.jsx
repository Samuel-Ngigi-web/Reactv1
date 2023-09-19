import React from "react";
 function Header(){
    const customStyle={
        color: "blue"
    }
    return(
        <div className="header">
            <h2 style={customStyle}>Quote Keeper App</h2>
        </div>
    )
 }

 export default Header;