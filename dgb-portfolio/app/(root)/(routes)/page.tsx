'use client'
import Image from "next/image"
import SkillPanel from "./_components/skill-panel";
import WorkExperience from "./_components/work-experience";
import MyWork from "./_components/my-works";

export default function Homepage() {
    return (  
        <>
             <section id="introduction" className="w-wrapper mt-5 mb-10">
                <div className="flex flex-col-reverse sm:flex-row items-center justify-center mx-auto px-10 gap-5">
                    <div className="flex flex-1 items-center justify-center rounded-md">
                        <text>
                            <h1 className="text-5xl font-bold">Hi, my name Najib</h1>
                            <h2 className="text-2xl  font-semibold">I`m an Developer from Malaysia</h2>
                        </text>
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <Image
                            className=" rounded-lg"
                            src={"/profile.jpg"}
                            alt="Picture of the author"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </section>
            <section id="work-experience" className="w-wrapper w-full my-10">
                <div className="flex flex-col items-center justify-center px-10">
                    <div className="flex flex-col items-center justify-center py-5">
                        <h1 className="text-4xl font-bold">
                            Work Experience
                        </h1>
                        <p>
                            What I`ve done so far`
                        </p>
                    </div>
                    
                    <div id="" className="flex-col items-center justify-center border-l-2 pl-4 
                    ">
                      
                            <WorkExperience/>
                      

                    </div>
                </div>
                
            </section>
            <section id="skill" className="w-wrapper my-10">
                <SkillPanel/>
            </section>

            <section id="my-work" className="w-full w-wrapper my-10">
                <MyWork/>
            </section>

        </>
       
     );
}
 