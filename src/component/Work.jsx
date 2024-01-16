import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2023,
        title: 'Information Technology Instructor - Intern',
        location: 'Valencia College',
        duration: '2 months',
        details: 'Delivered an 8-week IT program focused on JavaScript, HTML, and CSS. Conducted interactive classes, designed self-paced activities, and supported students in final projects.'
    },
    {
        year: 2023,
        title: 'Computer Science I undergraduate teaching assistant',
        location: 'UCF',
        duration: '1 semester',
        details: 'Responsible for conducting lab exams, teaching, and solving problems as the lab instructor. Grading codes, quizzes, and exams submitted by students. Holding office hours to respond to students questions and help them with code debugging.'
    },
    {
        year: 2022,
        title: 'Introduction to Programming with C undergraduate teaching assistant',
        location: 'UCF',
        duration: '1 semester',
        details: 'Responsible for conducting lab exams, teaching, and solving problems as the lab instructor. Grading codes, quizzes, and exams submitted by students. Holding office hours to respond to students questions and help them with code debugging.'
    },

]
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (

        <WorkItem 
            key={idx}
            year={item.year} 
            title={item.title}
            location={item.location} 
            duration={item.duration} 
            details={item.details}/>

      ))
      }
    </div>
  )
}

export default Work
