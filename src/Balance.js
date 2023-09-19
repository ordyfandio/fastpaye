import { Link } from "react-router-dom";
import React from 'react'
/* eslint-disable react/prop-types */

const Balance = ({info}) => {


    return (  
        <div>
          {info.map((info) =>(
              <div className="blog-preview" key={info.id}>
                  <Link to={`/info/${info.id}`}>
                    <h2>{info.phone}</h2>
                    <p>{info.amount}</p>
                  </Link>
              </div>
          ))}
        </div>
    );
}
export default Balance;
 
