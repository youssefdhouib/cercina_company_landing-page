import React ,{ useState}  from "react"
import "./cont.css"
import emailjs from "@emailjs/browser"
const Contactform = () => {
    
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
        showMessage("Your message has been submitted successfuly !!");
        emailjs.sendForm('service_ikgy3oe', 'template_shfmzgs' , e.target , 'yhpFoJZjGPCrfOg0q')
    
     }
    const [message, setMessage] = useState(""); // State for the message
    const [isMessageVisible, setIsMessageVisible] = useState(false); // State to control the visibility
    return (
    <>
      <section className='popular contbox'>
      
          <div className='heading'>
            <h1>Contact us </h1>
            <div className='line'></div>
          </div>

          
         
         

      
          
          <div className="boxs">
          <form className="for1 topp "  onSubmit={sendEmail} >
          <div className="cont-desc">
          <h2>Looking for any of our  Services ?</h2>
         </div>
          <div>
            <input type='text' name='company' placeholder='Vessel Name' />
          <input type='text' name='email_from' placeholder='Your email' />
          </div>
          <div><textarea className="placehold1" rows='10' name='message' placeholder=" Send us your order ..." ></textarea>
          
          <input type='Submit' value='Send' className='submit1'  />
          </div>
        </form>
        </div>
        {isMessageVisible && (
            <div className="message-div">
              <p>{message}</p>
            </div>
          )}
       
        <div  id="bout"></div>
      

          
       
      </section>
    </>
  )
}

export default Contactform
