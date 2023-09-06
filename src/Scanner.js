import { useState } from "react";
import { FaUser,FaPhone } from "react-icons/fa6";


const Scanner = () => {
    const [form,setform]=useState();
   
    const showForm= () => setform(!form);


    return ( 
        <>
            <div className="div_msg">
                <h1>Camera authorization</h1>
                <p>We need the camera to be able to scan QR codes</p>
                <button className="ok" onClick={showForm}>Ok</button>   
                <button className="cancel">Annuler</button>
            </div>
            <div className={form? 'open_form':'form_favorite'}>
                <h2>Add a new MoMo number</h2>
                <form className="form">
                    <FaUser className="icon_name"/> <input type="text" placeholder="Name"  required/> 
                    <FaPhone className="icon_phone"/> <input type="number" placeholder="Phone number" required/><br/>
                    <button value="Valid" className="btn">Safeguard</button>
                </form>
            </div>
        </>
     );
}
 
export default Scanner;