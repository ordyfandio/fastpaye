import React, { useState } from "react";
import { FaUser,FaPhone} from "react-icons/fa6";
import {HiPencil} from "react-icons/hi2";
import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */

const Profile = ({person}) => {
    const [form,setform]=useState();
   
    const showForm= () => setform(!form);


    return ( 
        <>  
            <div>
                {person.map((person) =>(
                  <div className="blog-preview" key={person.id}>
                      <Link to={`/person/${person.id}`}>
                        <h2>{person.phone}</h2>
                        <p>{person.amount}</p>
                      </Link>
                  </div>
                ))}
            </div>
            <div className="" >
                <div className="div_btn">
                    <button className="plus" onClick={showForm}><HiPencil/></button>
                </div>
                <div className={form? 'open_form':'form_favorite'} style={{position:'absolute',zIndex:'1000',bottom:'65px'}}>
                    <form className="form">
                        <FaUser className="icon_name"/> <input type="text" placeholder="Name"  required/> 
                        <FaPhone className="icon_phone"/> <input type="number" placeholder="Phone number" required/><br/>
                        <button value="Valid" className="btn">Safeguard</button>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default Profile;