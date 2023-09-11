import { Link } from "react-router-dom";


const Balance = ({infos}) => {
    return (  
        <div className="blog-list">
            {infos.map((infos) =>(
              <div className="blog-preview" key={infos.id}>
                  <Link to={`/Balance/${infos.id}`}>
                    <h2>{infos.phone}</h2>
                    <p>{infos.amount}</p>
                  </Link>
              </div>
            ))}
        </div>
    );
}
 
export default Balance;
 
