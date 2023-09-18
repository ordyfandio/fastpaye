import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";
import  QRCode  from "qrcode";

const Forward = () => {
    const [phone,setPhone]=useState();
    const [amount,setAmount]=useState();
    const [qrcode,setQrcode]=useState('');
    const [isPending,setIsPending]=useState(false);

    const GenerateQRCode=()=>{
        QRCode.toDataURL(phone,(err,phone)=>{
            if (err) return console.error(err);
            setQrcode(phone);
        })
        QRCode.toDataURL(amount,(err,amount)=>{
            if (err) return console.error(err);
            setQrcode(amount);
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const info={phone,amount};
       
        setIsPending(true);
 
        fetch('http://localhost:8000/infos',{
         method:'POST',
         headers:{"Content-Type":"application/json"},
         body:JSON.stringify(info)
        })
        .then(()=>{
         console.log('New ELement added');
         setIsPending(false);
        })

        
        setPhone('');
        setAmount('');
    }


    const handleChangePhone = (event) => {
        setPhone(event.target.value);        
    } 
    const handleChangeAmount = (event) => {
        setAmount(event.target.value);        
    }

    return ( 
        <>
           <div className="div_form" >
                <form className="form_send" onClick={handleSubmit}>
                    <input type="number" placeholder="Phone number" value={phone} onChange={handleChangePhone} required/> <FaCircleUser className="icon_user"/>
                    <input type="text" placeholder="Amount" value={amount} onChange={handleChangeAmount} required/><br/>
                    {!isPending &&<button  className="btn" onClick={GenerateQRCode}> Send</button>}
                </form> 
                {qrcode && <>
                <img src={qrcode} alt=""/>
                <a href={qrcode} download='qrcode.png' style={{color:'green',cursor:'pointer'}}>Download</a>
                </>}
            </div>
            
        </>
     );
}
export default Forward;