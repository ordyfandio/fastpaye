import { FaCircleUser } from "react-icons/fa6";

const Forward = () => {
    return ( 
        <>
            <div className="div_form">
                <form className="form_send">
                    <input type="number" placeholder="Phone number" required/> <FaCircleUser className="icon_user"/>
                    <input type="text" placeholder="Amount" required/><br/>
                    <input type="checkbox" className="check"/><label>Include withdrawal fees? </label><br/>
                    <button value="Valid" className="btn"> Send</button>
                </form>
            </div>
        </>
     );
}
 
export default Forward;