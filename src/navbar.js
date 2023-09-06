import { FaUserGroup,FaRegUser,FaQrcode} from "react-icons/fa6";
import{BsQrCodeScan} from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <>
         <nav className="navbar">
            <div className="menu">
                <Link to="/Forward"><FaQrcode className="icon"/><br/> Forward</Link>
                <Link to="/Favorite"><FaUserGroup className="icon"/><br/> Favorite</Link>
                <Link to="/Receive"><FaQrcode className="icon"/><br/> Receive</Link>
                <Link to="/Scanner"><BsQrCodeScan className="icon"/><br/> Scanner</Link>
                <Link to="/Profile"><FaRegUser className="icon"/><br/>Profile</Link>
            </div>
         </nav>
        </>
    );
}
 
export default Navbar;