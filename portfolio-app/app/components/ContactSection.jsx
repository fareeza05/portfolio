"use client"
import React, {useState} from 'react'
import {IconBrandGithub, IconBrandLinkedin} from '@tabler/icons-react';

const ContactSection = () => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };


  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>


      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let's Connect!
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>I am currently looking for new opportunities and my inbox is always open. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

        <div className='flex ml-2 flex-row mt-[50px] gap-8 place-self-center text-white'>
                    <a href="https://www.linkedin.com/in/fareeza-rahman/"  target="_blank" rel="noopener noreferrer">
                        <IconBrandLinkedin className='text-white h-[50px] w-[50px] rounded-full p-2 bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400'/>
                    </a>
                    <a href="https://github.com/fareeza05" target="_blank" rel="noopener noreferrer" >
                        <IconBrandGithub className='text-white h-[50px] w-[50px] rounded-full p-2 bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400'/>
                    </a>
        </div>
      </div>

      <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='mb-6'>
            <label htmlFor='email' className='text-white block text-sm font-medium mb-2 '>Your Email</label>
            <input name='email' type='email' id='email' required placeholder='fareezarahman123@gmail.com'
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
        </div>

          <div className='mb-6'>
            <label htmlFor='subject' className='text-white block text-sm font-medium  mb-2'>Subject</label>
            <input name='subject' type='subject' id='subject' required placeholder='Just saying hi!'
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
          </div>

          <div className='mb-6'>
            <label htmlFor='message' className='text-white block text-sm font-medium mb-2'>Message</label>
            <input name='message' type='message' id='message' required placeholder="Let's talk about..."
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
          </div>

          <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
          {
            emailSubmitted && (
              <p className='text-green-300 text-sm mt-2'>Email sent successfully!</p>
            )
          }
        </form>
      </div>


    </section>
  )
  }

export default ContactSection
