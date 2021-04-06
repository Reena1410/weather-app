import React,{useEffect, useState} from "react";
import './css/style.css';

const Tempapp=()=>{
    const [city,setcity]=useState(null);
    const [searchs,setsearch]=useState("pune");

   useEffect(()=>{
    
    const fetchApi=async()=>{
        try{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${searchs}&units=metric&appid=93911aea61ba3c2fb72eb0f2c2bac0df`;
        const response=await fetch(url);
        const resjson=await response.json();
        //console.log(resjson.main);
        setcity(resjson.main);
        }
        catch (err) {
            console.log(err);
        }
    };


       fetchApi();
   },[searchs]);    //will run only when value of searchs changes

    const change=(obj)=>
    {
       const val=obj.target.value;
       setsearch(val);
    }

    return(
        <>
    <div className="box">
        <div className="title">Weather App 🤍</div>
        <div className="inputData">
            <input type="search" value={searchs} onChange={change} className="inputField"/>
        </div>
        
{!city?(<p className="notification">No data found</p>):(

    <div>

        <div className="info">
            <h2 className="location">
                {searchs}</h2> 
                <br/>

            <h1 className="tempp">
             {city.temp}cel
            </h1>
            <h3 className="tempmin_max">
                Min:{city.temp_min}cel  |  Max:{city.temp_max}cel
            </h3>
        </div>
       
    </div>
        )}
    </div>
        </>

    );
};

export default Tempapp;