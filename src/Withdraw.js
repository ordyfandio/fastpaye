import { useState } from "react";
import { FaUser} from "react-icons/fa6";
import React from 'react';
import axios from 'axios';

const Withdraw = () => {
    const [form,setform]=useState();
    const [phone,setPhone]=useState();
    const [amount,setAmount]=useState();
    const showForm= () => setform(!form);

    
        // useEffect(() => {
          const fetchData = async (e) => {
            e.preventDefault();
            const withdraw={phone,amount};

            try {
              const response = await axios.post(
                'https://cors-anywhere.herokuapp.com/https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttowithdraw'
                ,
                {
                  headers: {
                    'X-Reference-Id': '1d66e71d-61d0-4e27-838e-efd575cbee4c',
                    'X-Target-Environment': 'Sandbox',
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': '82a82bcc08d8419aa800a11ac9bcf61f',
                  },
                  body:JSON.stringify(withdraw)
                }
              );
              console.log(response.data);
            } catch (error) {
              console.log(error);
            }
            setAmount('');
            setPhone('');
          };
      
        //   fetchData();
        // }, []);
      
        const handleChangePhone = (event) => {
          setPhone(event.target.value);        
        } 
        const handleChangeAmount = (event) => {
            setAmount(event.target.value);        
        }


    return (  
        <>
            <div className="div_btn">
                <button className="plus" onClick={showForm}>+</button>
            </div>
            <div className={form? 'open_form':'form_favorite'}>
                <h2>Withdraw Your Money</h2>
                <form className="form">
                    <input type="number" placeholder="Phone number" value={phone} onChange={handleChangePhone} required/><br/>
                    <FaUser className="icon_name"/> <input type="number" placeholder="Amount" value={amount} onChange={handleChangeAmount} required/> 
                    <button value="Valid" className="btn" onClick={(e) => fetchData(e)}>Safeguard</button>
                </form>
            </div>
        </>
    );
}
 
export default Withdraw;