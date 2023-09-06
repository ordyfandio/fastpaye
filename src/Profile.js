import { useState } from "react";
import { FaUser,FaPhone} from "react-icons/fa6";
import {HiPencil} from "react-icons/hi2";


const Profile = () => {
    const [form,setform]=useState();
   
    const showForm= () => setform(!form);


    return ( 
        <>
            <div className="div_btn">
                <button className="plus" onClick={showForm}><HiPencil/></button>
            </div>
            <div className={form? 'open_form':'form_favorite'}>
                <form className="form">
                    <FaUser className="icon_name"/> <input type="text" placeholder="Name"  required/> 
                    <FaPhone className="icon_phone"/> <input type="number" placeholder="Phone number" required/><br/>
                    <button value="Valid" className="btn">Safeguard</button>
                </form>
            </div>
        </>
     );
}
 
export default Profile;