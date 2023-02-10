import React from 'react';
import { useLocation } from 'react-router-dom';

function Bookmarks (){
    const {state} = useLocation();
    return (
        <div>
            <h1>Bookmarks</h1>
            <div id='container'>
                {state.map((pic)=>(
                <img src={pic} alt="reloadbookmarks"/>
                ))}
            </div>
        </div>
    );
};

export default Bookmarks;