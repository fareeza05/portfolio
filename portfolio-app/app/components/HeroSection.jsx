"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FloatingDock } from './ui/floating-dock';
import { IconHome, IconUser, IconCode, IconBriefcase2, IconBulb, IconMailSpark, IconDownload, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { EvervaultCard } from './ui/evervault-card';

const Items = [
    {
        title: "Home",
        href:"/",
        icon: <IconHome/>
    },

    {
        title: "About",
        href: "#about",
        icon: <IconUser/>

    },

    {
        title: "Skills",
        href: "/skills",
        icon: <IconCode/>
    },

    {
        title: "Experience",
        href: "/exp",
        icon: <IconBriefcase2/>
    },

    {
        title: "Projects",
        href:"/projects",
        icon: <IconBulb/>
    },

    {
        title: "Contact",
        href:"/contact",
        icon: <IconMailSpark/>
    }


]
const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12 mt-[100px]'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4  text-4xl sm:text-5xl lg:text-6xl font-bold'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400'>Hello, I'm Fareeza!</span>
                <br></br>
                </h1>
                <p className='text-[#ADB7BE] mb-6 text-2xl sm:text-3xl lg:text-4xl'>
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Software Engineer',
                    1000,
                    'Student',
                    1000,
                    'ML/AI Dev',
                    1000,
                    'Full Stack Dev',
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
                </p>
                <div className='flex items-center'>
                    <button className='flex items-center px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400 hover:bg-slate-800 text-white mt-3 mr-5'>
                        <span className='flex items-center bg-[#121212] hover:bg-slate-100 hover:opacity-40 hover:text-black rounded-full px-5 py-2'>
                          Let's Connect!
                        </span>
                        </button>
                    <button className='flex items-center px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400 hover:bg-slate-800 text-white mt-3'>
                    <span className='flex items-center bg-[#121212] hover:bg-slate-100 hover:opacity-40 hover:text-black rounded-full px-5 py-2'>
                        Resume
                        <IconDownload className='w-4 h-4 ml-2' />
                    </span>
                    </button>

                </div>
                <div className='flex ml-2 flex-row mt-[50px] gap-8 place-self-center text-white'>
                    <IconBrandLinkedin className='text-white h-[50px] w-[50px] rounded-full p-2 bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400'/>
                    <IconBrandGithub className='text-white h-[50px] w-[50px] rounded-full p-2 bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400'/>
                </div>
            </div>

            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#121212] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative mt-5'>
                    <EvervaultCard imageSrc='/images/Retro Computer6.png'>
                        <Image src='/images/Retro Computer6.png'
                        height={500}
                        width={500}
                        />
                    </EvervaultCard>
                </div>
            </div>
        </div>
        <FloatingDock items={Items}   
        desktopClassName="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-full w-[360px] mx-auto z-20" 
        mobileClassName="fixed bottom-4 right-4 mx-w-[300px] mx-auto" />
    </section>
  )
}

export default HeroSection;
