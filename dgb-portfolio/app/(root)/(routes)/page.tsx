import Image from "next/image"
import SkillPanel from "./_components/skill-panel";

export default function Homepage() {
    return (  
        <>
             <section id="introduction" className="w-wrapper">
                <div className="flex flex-col-reverse sm:flex-row items-center justify-center mx-auto px-10">
                    <div className="flex flex-1 item bg-center justify-center">
                        <text>
                            <h1 className="text-6xl font-bold">Hi, my name Najib</h1>
                            <h2 className="text-4xl font-bold">I`m an Developer from Malaysia</h2>
                        </text>
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <Image
                            className="rounded-xl"
                            src={"/profile.jpg"}
                            alt="Picture of the author"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </section>
            <section id="skill" className="w-wrapper">
                <SkillPanel/>
            </section>

        </>
       
     );
}
 