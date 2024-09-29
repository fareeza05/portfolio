import React from 'react';
import { CardSpotlight } from './ui/card-spotlight';

const ExpSection = () => {
  return (
    <section>
      <p className='text-pink-400 mt-[200px] w-[500px] p-1 flex items-center justify-center mx-auto font-semibold
      '>
        PROFESSIONAL & PERSONAL GROWTH
      </p>

      <h2 className='text-2xl font-bold size-2xl mt-8 place-self-center p-1 flex items-center justify-center mx-auto 
      text-transparent bg-clip-text bg-gradient-to-t font-sans from-blue-400 to-pink-500'>
        Professional
      </h2>

      <div className="flex items-center justify-center flex-col gap-6 mt-4">
        <CardSpotlight radius={100} color="#262626" className="w-[700px] h-[300px] text-white p-8 rounded-[20px]">
        <h2 className='place-self-center text-xl mb-2 font-semibold z-20 relative'>Vertex Inc.</h2>
        <p className='font-extralight mb-2 z-20 relative'>Software Engineering Intern | June 2024 - August 2024</p>
        <ul className='list-disc list-inside ml-4 z-20 relative'>
            <li>Developed a high-performance API using Python and FastAPI to validate and verify <span className="font-bold">60,000+</span> URLs, 
                supporting a website monitoring system crucial for tax law updates and data quality for LLMs </li>
            <li>
            Implemented web scraping functionality with Scrapy & optimized database
             management using SQL to reduce redundancy in the database 
            </li>

            <li>
            Contributed to production-ready code by incorporating unit testing, linting, docstrings & containerization 
            </li>
        </ul>
        </CardSpotlight>

        <CardSpotlight radius={100} color="#262626" className="w-[700px] h-[350px] text-white p-8 rounded-[20px z-20 relative]">
        <h2 className='place-self-center text-xl mb-2 font-semibold z-20 relative'>EnCoDe Research Lab, USF</h2>
        <p className='font-extralight mb-2 z-20 relative'>Research Assistant | January 2024 - Present</p>
        <ul className='list-disc list-inside ml-4 z-20 relative'>
        <li>
            Conducted research in Human-Computer Interaction (HCI), specializing in Augmented Reality (AR) to enhance situational
            awareness and task performance across age groups; investigated optimal visual information presentation in AR headsets for children.
        </li>

        <li>Performed literature reviews on gesture elicitation studies</li>
        
        <li>Developed AR headset referents using C# and Unity </li>

        <li>Gained experience in experimental design, data acquisition, and analysis of user-study data </li>
        </ul>
        </CardSpotlight>
      </div>

      <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 
      text-2xl font-bold size-xl mt-12 place-self-center p-1 flex items-center justify-center mx-auto'>
        LEADERSHIP
      </h2>

      <div className="flex items-center justify-center flex-col gap-6 mt-4">
        <CardSpotlight radius={100} color="#262626" className="w-[700px] h-[350px] text-white p-8 rounded-[20px]">
        <h2 className='place-self-center text-xl mb-2 font-semibold z-20 relative'>Association for Computing Machinery (ACM), USF</h2>
        <p className='font-extralight mb-2 z-20 relative'>Vice President | May 2024 - Present</p>
        <ul className='list-disc list-inside ml-4 z-20 relative'>

        </ul>
        </CardSpotlight>

        <CardSpotlight radius={100} color="#262626" className="w-[700px] h-[350px] text-white p-8 rounded-[20px]">
        <h2 className='place-self-center text-xl mb-2 font-semibold z-20 relative'>Association for Computing Machinery (ACM), USF</h2>
        <p className='font-extralight mb-2 z-20 relative'>Outreach Chair | May 2023 - May 2024</p>
        <ul className='list-disc list-inside ml-4 z-20 relative'>
  
        </ul>
        </CardSpotlight>

        <CardSpotlight radius={100} color="#262626" className="w-[700px] h-[350px] text-white p-8 rounded-[20px]">
        <h2 className='place-self-center text-xl mb-2 font-semibold z-20 relative'>Association for Computing Machinery (ACM), USF</h2>
        <p className='font-extralight mb-2 z-20 relative'>Graphic Design Shadow | October 2022 - May 2023</p>
        <ul className='list-disc list-inside ml-4 z-20 relative'>
      
        </ul>
        </CardSpotlight>

        <CardSpotlight radius={100} color="#262626" className="w-[700px] h-[350px] text-white p-8 rounded-[20px]">
        <h2 className='place-self-center text-xl mb-2 font-semibold z-20 relative'>Bulls LEAD, USF College of Engineering</h2>
        <p className='font-extralight mb-2 z-20 relative'>Cohort 5 Member | August 2023 - Present</p>
        <ul className='list-disc list-inside ml-4 z-20 relative'>
      
        </ul>
        </CardSpotlight>
      </div>

  
    </section>
  );
};

export default ExpSection;
