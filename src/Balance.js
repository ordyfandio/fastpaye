import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const Balance = ({info}) => {


    return (  
        <div className="blog-list">
          {info.map((info) =>(
              <div className="blog-preview" key={info.id}>
                  <Link to={`/data:info/${info.id}`}>
                    <h2>{info.phone}</h2>
                    <p>{info.amount}</p>
                  </Link>
              </div>
          ))}
        </div>
    );
}
export default Balance;
 
