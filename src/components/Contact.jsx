import { useState, useRef } from "react"
import { motion } from 'framer-motion';
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    _honey: '', // for honeypot
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    setError(null);
    setSubmitted(false);

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);
    formData.append('_honey', form._honey); // Honeypot for spam
    // Keep _captcha: false if you want to disable FormSubmit's reCAPTCHA for AJAX.
    // If issues persist, try removing it to see if FormSubmit's default handling works.
    formData.append('_captcha', 'false'); 


    try {
      const response = await fetch("https://formsubmit.co/mohamedb.555dr@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json' // Important for FormSubmit to know it's an AJAX request
        }
      });

      if (response.ok) {
        // const result = await response.json(); // You can inspect result if needed
        setSubmitted(true);
        setForm({ name: '', email: '', message: '', _honey: '' }); // Reset form
        setTimeout(() => setSubmitted(false), 4000); // Hide message after 4s
      } else {
        let errorData = { message: 'Form submission failed. Please try again.' };
        try {
          // Try to parse the error response from FormSubmit
          errorData = await response.json();
        } catch (parseError) {
          console.error("Could not parse error response:", parseError);
        }
        // setError(errorData.message || 'Form submission failed. Please try again.');
        // A common issue is the email not being confirmed with FormSubmit.
        if (response.status === 400 && errorData.message && errorData.message.toLowerCase().includes("confirm your email")) {
            setError("Failed: Please check your email (mohamedb.555dr@gmail.com) to confirm it with FormSubmit.");
        } else if (response.status === 403 && errorData.message && errorData.message.toLowerCase().includes("recaptcha")) {
            setError("Failed: reCAPTCHA validation failed. Please try again.");
        }
        else {
            setError(errorData.message || `Form submission failed with status: ${response.status}. Please try again.`);
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError('An error occurred while submitting the form. Please check your network connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div variants={slideIn('left','tween',0.2,1)} className="flex-[0.75]
       bg-black-100 p-5 rounded-2xl "   >
        <p className={styles.sectionSubText}>Get in touch</p>
        <p className={styles.sectionHeadText}>Contact.</p>
        
        {submitted && (
          <div className="mt-12 bg-green-500 text-white p-4 rounded-lg">
            <p className="font-medium">Thank you for your message! I will get back to you as soon as possible.</p>
          </div>
        )}
        {error && (
          <div className="mt-12 bg-red-500 text-white p-4 rounded-lg">
            <p className="font-medium">{error}</p>
          </div>
        )}
        {!submitted && (
          <form 
            ref={formRef}
            onSubmit={handleSubmit} // We handle submission with JavaScript
            className="mt-12 flex flex-col gap-8"
          >
            {/* This hidden input prevents spam */}
            <input type="text" name="_honey" style={{display: "none"}} value={form._honey} onChange={handleChange} />
            
            {/* These are not strictly needed for AJAX but good for non-JS fallback if action/method were present */}
            {/* <input type="hidden" name="_next" value={window.location.href} /> */}
            {/* <input type="hidden" name="_captcha" value="false" /> */}
            
            <label className="flex flex-col" >
              <span className="text-white font-medium mb-4">Your Name</span>
              <input 
                type="text" 
                name="name" 
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?" 
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required 
              />
            </label>
            <label className="flex flex-col" >
              <span className="text-white font-medium mb-4">Your Email</span>
              <input 
                type="email" 
                name="email" 
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?" 
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required 
              />
            </label>
            <label className="flex flex-col" >
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea 
                rows="7" 
                name="message" 
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?" 
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required 
              />
            </label>
            <button 
              type="submit" 
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              disabled={loading}
            >
              {loading? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </motion.div>
      <motion.div variants={slideIn('right','tween',0.2,1)} className="xl:flex-1
        xl:h-auto md:h-[550px] h-[350px]  ">
          <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")