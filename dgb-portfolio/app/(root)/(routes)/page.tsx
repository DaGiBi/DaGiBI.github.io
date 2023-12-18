'use client'
import Image from "next/image"
import {Button} from "@nextui-org/react";
import SkillPanel from "./_components/skill-panel";
import WorkExperience from "./_components/work-experience";
import MyWork from "./_components/my-works";

export default function Homepage() {
    return (  
        <>
            <section id="introduction" className="w-wrapper h-screen">
                <div className="flex items-center justify-center mx-auto h-[75%]">
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                        <text>
                            <h1 className="text-5xl font-bold">Hi, I`m 
                                <span className="font-bold text-primary-100">
                                &nbsp;Najib
                                </span>
                            </h1>
                            <h2 className="text-2xl  font-semibold">I`m Full-Stack Web Developer</h2>
                        </text>
                        <Button className="flex items-center justify-center p-6"
                        color="primary" variant="ghost">
                            <text className="text-2xl font-bold text-primary-100 ">
                                My Works...
                            </text>
                        </Button>
                    </div>
                </div>
            </section>

            <section id="introduction" className="w-wrapper bg-primary-100">
                <div className="flex items-center justify-center mx-auto h-[75%] py-20">
                    <div className="flex flex-col items-center justify-center h-full gap-5 w-[70%]">
                        <div className="">
                            <text className="text-black font-bold text-2xl">
                                About Me
                            </text>
                        </div>
                        <div className="">
                            <text className="text-black text-xl  font-normal">
                            Welcome to my portfolio. I`m Najib btw 👋🏻 ... Full Stack Developer. Graduated from University Technology MARA (UiTM) in Computer Science. 🎓My world revolves around crafting seamless experiences with Flutter for mobile and Next.js for web. 💻 Exploring the intersection of design and technology, I bring innovation to life. 
                            </text>
                        </div>
                        <div className="flex items-center  justify-centers gap-4">
                            <Button className="flex items-center justify-center text-black font-semibold" color="primary" variant="ghost">
                                    Resume
                            </Button>
                            <Button className="flex items-center justify-center text-black font-semibold" color="primary" variant="ghost">
                                    Github
                            </Button>
                            <Button className="flex items-center justify-center text-black font-semibold" color="primary" variant="ghost">
                                    LinkedIn
                            </Button>
                        </div>
                        
                       
                    </div>
                </div>
            </section>

            <section id="work-experience" className="w-wrapper w-full my-10">
                <div className="flex flex-col items-center justify-center px-10">
                    <div className="flex flex-col items-center justify-center py-5">
                        <h1 className="text-4xl font-bold">
                            Work 
                            <span className="font-bold text-primary-100">
                                &nbsp;Experience
                                </span>
                        </h1>
                        <p>
                            What I`ve done so far...
                        </p>
                    </div>
                    <div id="" className="flex-col items-center justify-center border-l-2 pl-4 
                    ">
                            <WorkExperience/>
                    </div>
                </div>
                
            </section>
            <section id="skill" className="w-wrapper w-full my-20 bg-primary-100">
                <div className="flex flex-col items-center justify-center px-10">
                    <div className="flex flex-col items-center justify-center py-5">
                        <h1 className="text-4xl font-bold text-black">
                            Skills
                        </h1>
                        <p className="text-black font-medium">
                            Some skills I`ve picked up along the way...
                        </p>
                    </div>
                </div>
                <SkillPanel/>
            </section>
            <section id="my-work" className="flex item-center justify-center w-full w-wrapper my-32">
                <MyWork/>
            </section>
            {/* <section id="contact-me" className="flex item-center justify-center w-full w-wrapper my-32">
                contact-me
            </section> */}

        </>
       
     );
}
 