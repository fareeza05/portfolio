"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Education",
        id:"education",
        content:
         (
            <div>
                <p className='font-bold'>B.S. Computer Science</p>
                <p className='font-bold'>University of South Florida</p>
                <p>Minor: Applied Mathematics</p>
                <p>GPA: 3.89</p>
                <p className='font-semibold'>Expected: May 2026</p>
                <br></br>

                <p>Honors: USF Green and Gold Scholarship</p>
            </div>
         )
        
    },

    {
        title:"Skills",
        id: "skills",
        content: (
            <ul>
                <li>Full Stack Development</li>
                <li>AI/ML Development</li>
                <li>AR Development</li>
                <li>CI/CD, DevOps and Infrastructure</li>
                <li>Research in Human-Computer Interactions</li>
                <li>OOP and DSA</li>
            </ul>
        )

    },

    {
        title: "Certifications",
        id:"certifications",
        content: (
            <ul>
                <li>
                    <p>CodePath - Intermediate Technical Interview Prep [TIP102]</p>
                </li>
            </ul>
        )

    }

]

const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(()=> {
            setTab(id);
        });
    };

    return (
      <section className='text-white'>

    <p className='text-pink-400 mt-[100px]  w-[180px] p-1 flex items-center justify-center mx-auto font-semibold'>
  GET TO KNOW ME
    </p>



        <div className=' md:grid md:grid-cols-2 gap-4 items-center py-4 px-2 xl:gap-8 sm:py-16 xl:px-12'>
          <Image 
            src='/images/c765433d7a77bc87a8002b578d004e62.jpeg' 
            width={250} 
            height={250} 
            alt='Profile image'
          />
        
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 mb-4 font-mono'>About Me</h2>
            <p className='text-base lg:text-lg'> 
              My academic coursework has given me a solid foundation in object-oriented 
              programming, data structures, and algorithms. 
              I'm well-versed in Python and C++, and have hands-on experience 
              with machine learning libraries such as PyTorch and TensorFlow. 
              I'm eager to expand on this knowledge and explore the integration of optics,
              medical imaging, and AI under expert guidance.
            </p>

            <div className='mt-8'>
              {/* Tab Buttons */}
              <div className='flex space-x-4'>
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> 
                  Education
                </TabButton>
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> 
                  Skills
                </TabButton>
                <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> 
                  Certifications
                </TabButton>
              </div>
              
              {/* Tab Content */}
              <div className='mt-6'>
                <div className='bg-gray-900 p-6 rounded-lg shadow-lg'>
                  {TAB_DATA.find((t) => t.id === tab).content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutSection
