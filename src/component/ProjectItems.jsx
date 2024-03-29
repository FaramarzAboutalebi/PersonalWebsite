import React from 'react'
const ProjectItems = ({img, title, description, viewLink}) => {
  return (
    <div className='relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#02194f]'>
      <img src={img} alt="" className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center' >
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center text-white">{description}</p>
        <a href={viewLink} target="_blank" rel="noreferrer">
            <p className='text-center p-3 bg-white rounded-lg font-bold text-gray-700 cursor-pointer text-lg '>View</p>
        </a>
      </div>
    </div>
  )
}

export default ProjectItems
