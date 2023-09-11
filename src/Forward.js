import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";

const Forward = () => {
    const [phone,setPhone]=useState();
    // const [Todos,setTodos]=useState([]);
    const [amount,setAmount]=useState();
    const [isPending,setIsPending]=useState(false);   
 

    function handleSubmit(e){
       e.preventDefault()
       const infos={phone,amount};
       
       setIsPending(true);

       fetch('http://localhost:8000/Forward/',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(infos)
       }).then(()=>{
        setIsPending(false);
       })

       setPhone("");
       setAmount("");
    }

    
    const handleChangePhone = (event) => {
        setPhone(event.target.value);        
    } 
    const handleChangeAmount = (event) => {
        setAmount(event.target.value);        
    }

    return ( 
        <>
            <div className="div_form" onSubmit={handleSubmit}>
                <form className="form_send">
                    <input type="number" placeholder="Phone number" value={phone} onChange={handleChangePhone} required/> <FaCircleUser className="icon_user"/>
                    <input type="text" placeholder="Amount" value={amount} onChange={handleChangeAmount} required/><br/>
                    {!isPending && <button value="Valid" className="btn"> Send</button>}
                </form>
            </div>
        </>
     );
}
 
export default Forward;