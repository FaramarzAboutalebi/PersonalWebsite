import React from 'react'
import WorkItem from './WorkItem'
import cImg from '../assets/c.png'
import vImg from '../assets/v.png'
import ProjectItems from './ProjectItems'

const Projects = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sint similique ipsam minus quasi provident ipsum totam nesciunt, dolores sapiente obcaecati, rem esse accusantium amet nemo fugiat consequatur! Voluptatibus, vero.</p>


      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItems img={cImg} 
        title='SoftwareSystem-CompilerProject'
        description='Impelementing a PL/0 compiler with C language'
        viewLink='https://github.com/FaramarzAboutalebi/SoftwareSystem-CompilerProject.git'
        />
        <ProjectItems img={vImg} 
        title='Vigenere Cipher Encryption'
        description='Impelemented with python'
        viewLink='https://github.com/FaramarzAboutalebi/VigenereCipherEncryption.git'
        />
      </div>

    </div>
  )
}

export default Projects
