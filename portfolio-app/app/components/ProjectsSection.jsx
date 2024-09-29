import { IconBrandGithub } from '@tabler/icons-react';
import React from 'react'
import { Carousel, Card } from './ui/apple-cards-carousel'


const data = [
    {
        category:"Mobile App",
        title: "Dumbull",
        src: '',
        content: 
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <p className="text-center text-xl font-semibold text-gray-800">
            A fun twist to finding study groups for your class
        </p>
        
        <div className="flex justify-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
                Github
            </button>
            </a>
            <a href="https://yourlivedemo.com" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition ease-in-out duration-300">
                Live Demo
            </button>
            </a>
        </div>
        </div>
        
    },

    {
        category:"Generative AI",
        title: "Neural Style Transfer",
        src: '',
        content: 
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <p className="text-center text-xl font-semibold text-gray-800">
            A fun twist to finding study groups for your class
        </p>
        
        <div className="flex justify-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
                Github
            </button>
            </a>
            <a href="https://yourlivedemo.com" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition ease-in-out duration-300">
                Live Demo
            </button>
            </a>
        </div>
        </div>
    },

    {
        category:"Mobile App",
        title: "Dumbull",
        src: '',
        content: 
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <p className="text-center text-xl font-semibold text-gray-800">
            A fun twist to finding study groups for your class
        </p>
        
        <div className="flex justify-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
                Github
            </button>
            </a>
            <a href="https://yourlivedemo.com" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition ease-in-out duration-300">
                Live Demo
            </button>
            </a>
        </div>
        </div>
        
    },
]

const ProjectsSection = () => {
    const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
      ));

  return (
    <section>
    <p className='text-pink-400 mt-[200px] w-[500px] p-1 flex items-center justify-center mx-auto font-semibold'>
        WHAT I HAVE WORKED ON
    </p>

    <div className="w-full py-20 bg-grid-pattern bg-[] bg-[length:20px_20px]">
    <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold font-sans 
    text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400">
        Projects
      </h2>
        <Carousel items={cards} itemClassName="w-[300px] h-[400px] flex-shrink-0" />
    </div>
    </section>
  )
}

export default ProjectsSection
