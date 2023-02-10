import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "../Components/imagesearch.css";


function Imgsearch () {
    const [pics, setPics] = useState([]);
    let nav = useNavigate();
    let arr = [];

    const [search, setSearch] = useState("");

    const client_id = "JtrqYqsinXVMthUKyyP29eOQYtnmr0c2xErpB-PLDmg";
    //  const client_id =  "UicQ2fw06HYX4acGix6zzzSSJ46tLCs6ZwKxfutfcXA";

 function loadImg() {
    let url = `https://api.unsplash.com/search/photos/?query=${search}&client_id=${client_id}`;
    console.log(url);
     axios.get(url)
     .then((res)=>{
        setPics(res.data.results);
     })
     .catch((e)=>{
        console.log(e);
     })
 }
  function bookmark(e) {
       if(window.confirm("Your image added to bookmark")){
         arr.push(e.target.src);

       }else{
        alert("Image not added");
       }
  }


    return (

        <div id='box'>
            <div className='h'>
                <h1 id='h1'>React Image Search</h1>
                <button id='bookmark' 
                onClick={()=>(
                    nav("/bookmark",{
                        state:arr,
                    })
                )}
                >
                   BOOKMARKS
                </button>

            </div>

            <div id='items'>
                <input type="text" onChange={(e)=> setSearch(e.target.value)} placeholder=" search free HD Images"/>
                <button id='btn' onClick={(e)=> loadImg(e)}>
                  Search
                </button>

            </div>

            <div id='container'>
                {pics.map((pic, i)=>(
                 <>
                  <img onClick={(e) => bookmark(e)} key={i}
                  src={pic.urls.small}
                  alt="loading your images"
                  />

                 </>
                ))}
            

            </div>
            
        </div>
        
    );
};

export default Imgsearch;