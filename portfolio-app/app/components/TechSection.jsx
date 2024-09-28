"use client"
import React from 'react'
import TechCard from './TechCard'
import { GlareCard } from './ui/glare-card'


const TechSection = () => {
  return (
    <section>
        <p className='text-pink-400 mt-[100px]  w-[300px] p-1 flex items-center justify-center mx-auto font-semibold'>
        MY TECHNICAL EXPERIENCE</p>
    
    <div className='mt-[50px] grid grid-cols-4 gap-[200px] place-items-center'>
        <GlareCard className="z-[0] ml-0 items-center justify-center text-center p-2 text-white ">
            <h2 className='font-semibold mt-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400'>LANGUAGES</h2>
            <ul className='mt-4 text-lg space-y-2'>
                <li>Python</li>
                <li>C, C++</li>
                <li>C# (.NET + Unity)</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
                <li>RISC-V, Verilog</li>
            </ul> 
        </GlareCard>

        <GlareCard className="items-center justify-center text-center p-2 text-white ">
            <h2 className='font-semibold mt-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400'>CI/CD</h2>
            <ul className='mt-4 text-lg space-y-2'>
            <li>Git/Github</li>
            <li>Pytest</li>
            <li>Linting</li>
            <li>Docstrings</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Rancher</li>
            <li>Heroku</li>
        </ul>
        </GlareCard>

        <GlareCard className="items-center justify-center text-center p-2 text-white ">
            <h2 className='font-semibold mt-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400'>AI/ML</h2>
            <ul className='mt-4 text-lg space-y-2'>
            <li>Tensorflow</li>
            <li>Scikit-learn</li>
            <li>PyTorch</li>
            <li>
                Pandas
            </li>
            <li>Numpy</li>
            <li>Matplotlip</li>
            <li>OpenCV</li>
        </ul>
        </GlareCard>

        <GlareCard className="items-center justify-center text-center p-2 text-white ">
            <h2 className='font-semibold mt-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400'>FULL STACK</h2>
            <ul className='mt-4 text-lg space-y-2'>
            <li>
                    React.js
            </li>
            <li>Tailwind CSS</li>
                <li>
                    Express.JS, Node.JS, Next.JS
                </li>
                <li>
                    MongoDB
                </li>
                <li>PostgreSQL</li>
                <li>RESTful API, GraphQL, FastAPI</li>
                <li>React Native</li>
                <li>Scrapy</li>
            </ul>
        </GlareCard>




    </div>


 </section>
)}

export default TechSection
