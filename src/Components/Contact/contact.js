import './contact.scss';
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser"
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);

  const nameRef = useRef(null);
  const tonameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const [ message, setMessage ] = useState('');

  useEffect(() => {
    emailjs.init("1W4EXmFPPBSzil6Ai");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail();
  }
  const sendEmail = async () => {
    const serviceId = "service_2f9guna"; // Set your email service ID here
    const templateId = "template_mp1dhab"; // Set your email template ID here

    try {
      setLoading(true); // Set loading state to true
      const emailValue = emailRef.current ? emailRef.current.value : "";
      await emailjs.send(serviceId, templateId, {
        from_name: nameRef.current?.value,
        message: message,
        email: emailValue,
      });

      alert("Email successfully sent. Check your inbox."); // Show success message
    } catch (error) {
      console.log(error); // Log any errors that occur during sending
    } finally {
      setLoading(false); // Set loading state back to false, regardless
    }
  };

  return (
    <div id='contact' className="App">
        <div className='contact-container'>
        <div className='contact-otsikko-container'><h1 className='contact-otsikko'>Contact Me</h1></div>
        <div className='div-50-container'>
            <div className='div-50'>
                <div className='contact-text-container'><p className='contact-text'>You can contact me through my socials or through the contact form on this site.</p></div>
                <div className='contact-icons-container'>
                <a href='https://www.linkedin.com/in/viljami-leskel%C3%A4-23432b292/'><FaLinkedin className='contact-icons'/></a>
                <a href='https://github.com/WaterProofComputer/'><FaGithubSquare className='contact-icons'/></a>
                </div>
                <div className='contact-text-container'><p className='contact-text'>Phone: +358442358825</p></div>
                <div className='contact-text-container'><p className='contact-text'>Gmail: leskelaviljami@gmail.com</p></div>
            </div>
            <div className='div-50'>
            <form className="form" onSubmit={handleSubmit}>
                <h1 className='form-otsikko'>Contact Me!</h1>
                <div className="form_group">
                  <label className='form-text' htmlFor="">Name</label>
                  <input className='form-placeholder-text' ref={nameRef} placeholder="Enter your name" />
                </div>
                <div className="form_group">
                  <label className='form-text' htmlFor="">Email</label>
                  <input className='form-placeholder-text' ref={emailRef} type="email" placeholder="Enter your email" />
                </div>
                <div className="form_group">
                  <label className='form-text' htmlFor="">Message</label>
                  <textarea className='form-placeholder-text' value={message} onChange={e=> setMessage(e.target.value)} placeholder="Enter your message" />
                </div>
                <button className="contactbutton" disabled={loading}>
                  Submit
                </button>
            </form>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Contact