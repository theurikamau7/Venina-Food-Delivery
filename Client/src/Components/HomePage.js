
import React, {useState} from 'react';
import NavBar from './navbar';
import Searchbar from './Searchbar';
function HomePage(){

    return(<div>
      <div className="navbar">
        <NavBar />
        <Searchbar />
      </div>
    </div>
         
    )
}
export default HomePage;