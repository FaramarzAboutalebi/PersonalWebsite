import React from 'react'
const Contact = () => {
  return (
    <div id="contact" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action="https://getform.io/f/ebf4d834-6cd6-433f-b04d-95ba026e5ee8" method='POST' encType="multipart/form-data">
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" naame="name"/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone</label>
                    <input className="border-2 p-3 rounded-lg flex border-gray-300" type="text" name="phone"/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className="border-2 p-3 rounded-lg flex border-gray-300" type="email" name="email" />

                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className="border-2 p-3 rounded-lg flex border-gray-300" type="text" name="subject" />
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className="border-2 p-3 rounded-lg flex border-gray-300" name="message" rows="10"></textarea>
                </div>
                
            </div>
            <div className='flex items-center justify-center'>
                <button className='bg-[#56005e] py-2 mt-2 w-[50%] text-white font-bold rounded-lg '>
                    Send massage
                </button>
            </div>
            
        </form>
        
    </div>
  )
}

export default Contact
