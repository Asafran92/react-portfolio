import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ec864726-2ede-48f1-861d-1c2b981f1f9f" classname='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-700 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Feel free to submit the form below, or send me an email at test@123.com</p>
            </div>
            <input className='bg-gray-300 p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-300 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-gray-300 border-2 hover:bg-purple-700 hover:border-purple-700 px-4 py-3 my-8 m-auto flex items-center'>Let's Connect!</button>
        </form>
    </div>
  )
}

export default Contact