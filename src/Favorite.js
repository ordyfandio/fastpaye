import { useState } from "react";
import { FaUser,FaPhone } from "react-icons/fa6";

const Favorite = () => {
   const [form,setform]=useState();
   const [name,setName]=useState('');
   const [phone,setPhone]=useState();
   const [isPending,setIsPending]=useState(false);
   const showForm= () => setform(!form);

   const handleSubmit=(e)=>{
        e.preventDefault();

        const person={phone,name};
    
        setIsPending(true);

        fetch('http://localhost:8000/personal',{
         method:'POST',
         headers:{"Content-Type":"application/json"},
         body:JSON.stringify(person)
        })
        .then(()=>{
         console.log('New Contact added');
         setIsPending(false);
        })
        setPhone('');
        setName('');
    }

    const handleChangePhone = (event) => {
        setPhone(event.target.value);        
    } 
    const handleChangeName = (event) => {
        setName(event.target.value);        
    }

    return ( 
        <>
            <div className="div_btn">
                <button className="plus" onClick={showForm}>+</button>
            </div>
            <div className={form? 'open_form':'form_favorite'}>
                <h2>Add a favorite contact</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <FaUser className="icon_name"/> <input type="text" value={name} placeholder="Name" onChange={handleChangeName} required/> 
                    <FaPhone className="icon_phone"/> <input type="number" value={phone} placeholder="Phone number" onChange={handleChangePhone} required/><br/>
                    {!isPending &&<button value="Valid" className="btn">Safeguard</button>}
                </form>
            </div>
        </>
     );
}
 
export default Favorite;