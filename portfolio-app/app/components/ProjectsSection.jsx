import { IconBrandGithub } from '@tabler/icons-react';
import React from 'react';
import { Carousel, Card } from './ui/apple-cards-carousel';

const data = [
        {
          category: "Mobile App",
          title: "Dumbull",
          src: "",  // Add your image source
          content: (
            <div className="w-[300px] h-[200px] bg-[#181818] rounded-xl shadow-md p-9 space-y-4">
              <p className="text-center text-lg font-semibold text-white mb-[12]">
                A fun twist to finding study groups for your class
              </p>
              <div className="flex justify-center space-x-4 mt-0">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
                    Github
                  </button>
                </a>
                <a href="https://yourlivedemo.com" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          ),
        },
        {
          category: "Web Application",
          title: "Project 2",
          src: "",
          content: (
            <div className="w-[300px] h-[200px] bg-[#181818] rounded-xl shadow-md p-9 space-y-4">
              <p className="text-center text-lg font-semibold text-white">
                A powerful platform to manage your projects
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/project2" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
                    Github
                  </button>
                </a>
                <a href="https://project2-demo.com" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          ),
        },
        
        {
            category: "Web Application",
            title: "Project 2",
            src: "",
            content: (
              <div className="w-[300px] h-[200px] bg-[#181818] rounded-xl shadow-md p-4 space-y-4">
                <p className="text-center text-lg font-semibold text-white">
                  A powerful platform to manage your projects
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/project2" target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
                      Github
                    </button>
                  </a>
                  <a href="https://project2-demo.com" target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition ease-in-out duration-300">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            ),
          },
      ];


const ProjectsSection = () => {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <section>
      <p className='text-pink-400 mt-[200px] w-[500px] p-1 flex items-center justify-center mx-auto font-semibold'>
        WHAT I HAVE WORKED ON
      </p>

      <div className="w-full py-20 bg-grid-pattern bg-[length:20px_20px]">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400">
          Projects
        </h2>
        <Carousel items={cards} itemClassName="w-[300px] h-[400px] flex-shrink-0" />
      </div>
    </section>
  );
};

export default ProjectsSection;
