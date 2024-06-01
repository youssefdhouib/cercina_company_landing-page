import React, { useState } from "react"
import "./Contact.css"
import emailjs from "@emailjs/browser"
const ContactFrom = () => {
  const [message, setMessage] = useState(""); // State for the message
  const [isMessageVisible, setIsMessageVisible] = useState(false); // State to control the visibility



  const showMessage = (msg) => {
    setMessage(msg);
    setIsMessageVisible(true);

    // Hide the message after 3 seconds (adjust the duration as needed)
    setTimeout(() => {
      setIsMessageVisible(false);
      setMessage("");
    }, 4000); // 3 seconds
  };
 const sendEmail = (e) =>{
    e.preventDefault()
    showMessage("Your order has been submitted successfuly !!");
    emailjs.sendForm('service_lf3beqd', 'template_beenife' , e.target , 'yhpFoJZjGPCrfOg0q')

 }
  return (
    <>
      
   
      <form className="for1 topp "  onSubmit={sendEmail} >
          
          <div>
            <input type='text' name='company' placeholder='Company Name' />
          <input type='text' name='email_from' placeholder='Your email' />
          </div>
          <div><textarea className="placehold1" rows='10' name='message' placeholder=" Send us your order ..." ></textarea>
          
          <input type='Submit' value='Send' className='submit1'  />
          </div>
        </form>
        
        {isMessageVisible && (
            <div className="message-div">
              <p>{message}</p>
            </div>
          )}
        
    </>
  )
}

export default ContactFrom
