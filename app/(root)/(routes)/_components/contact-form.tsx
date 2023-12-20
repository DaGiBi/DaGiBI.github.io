import React, { useState } from 'react';
import {Button} from "@nextui-org/react";
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    

  return (
    <div className="flex flex-col items-center justify-center w-auto h-full bg-primary-50 rounded-xl mx-auto p-10">
        <p className='text-lg sm:text-2xl font-semibold text-white pb-2'>
            Get in touch with me  📱
        </p>
        <form
        action="https://formspree.io/f/mleqrlqn"
        method="POST"
        className='flex flex-col items-center justify-center w-full h-full gap-1'
      >
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='your name...' className='w-64 rounded-md p-1' />
        
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='your email...' className='w-64 rounded-md p-1'/>

          <textarea name="message" value={formData.message} onChange={handleChange} placeholder='message...'  className='w-64 rounded-md p-1'/>
     
          <Button className="flex items-center justify-center text-black font-semibold bg-primary-100" color="secondary" variant="ghost" type='submit'>

                Submit
  
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;