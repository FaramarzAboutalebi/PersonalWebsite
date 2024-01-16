import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaInstagram, FaLinkedin, FaGithub, FaTelegram} from 'react-icons/fa';


const Main = () => {
  return (
    <div id='main'>
      <img className="w-full h-screen object-cover left-cover" src="https://wallpapercave.com/wp/wp4063175.jpg" alt="" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/10 ">
      
        <div className='max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center'>

            <h1 className='text-white m-4 sm:text-5xl text-4xl '>
                I'am Faramarz Aboutalebi
            </h1>
            
            <h1 className='flex sm:text-3xl text-2xl text-black m-4 pl-6'>

            <TypeAnimation
        sequence={[
            // Same substring at the start will only be typed out once, initially
            'a full stack developer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            '',
            1000,
            'a computer science student at UCF',
            1000,
            'and also a {physics graduate}',
            1000,
        ]}
        wrapper="div"
        speed={50}
        style={{ fontSize: '1em', display: 'inline-block', color: 'black', fontWeight: 'bold', padding: '5px', margin: '0 5px 0 5px', backgroundColor: 'white' }}
        repeat={Infinity}
        
        />

            </h1>

            <div className='flex justify-between pt-6 max-w-[200px] w-full pl-16'>
            <FaInstagram size={20} className='text-white cursor-pointer hover:scale-125 ease-in duration-200'/>
            <FaLinkedin size={20} className='text-white cursor-pointer hover:scale-125 ease-in duration-200'/>
            <FaGithub size={20} className='text-white cursor-pointer hover:scale-125 ease-in duration-200'/>
            <FaTelegram size={20} className='text-white cursor-pointer hover:scale-125 ease-in duration-200'/>
            </div>

        </div>
        
      </div>
      
    </div>
  )
}

export default Main
