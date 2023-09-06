import { useState } from "react";
import { FaUser,FaPhone } from "react-icons/fa6";

const Favorite = () => {
   const [form,setform]=useState();
   
   const showForm= () => setform(!form);

    return ( 
        <>
            <div className="div_btn">
                <button className="plus" onClick={showForm}>+</button>
            </div>
            <div className={form? 'open_form':'form_favorite'}>
                <h2 style={{}}>Add a favorite contact</h2>
                <form className="form">
                    <FaUser className="icon_name"/> <input type="text" placeholder="Name"  required/> 
                    <FaPhone className="icon_phone"/> <input type="number" placeholder="Phone number" required/><br/>
                    <button value="Valid" className="btn">Safeguard</button>
                </form>
            </div>
        </>
     );
}
 
export default Favorite;