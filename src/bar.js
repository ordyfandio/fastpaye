import { Link } from "react-router-dom";

const Bar = () => {
    return ( 
        <>
        <div className="divbar">
                <button value="send" className="forward" style={{backgroundColor:'white'}}>Forward</button>
                <Link to="/Balance"><button value="sold" className="balance">Balance</button></Link>
        </div>
        </>
     );
}
 
export default Bar;