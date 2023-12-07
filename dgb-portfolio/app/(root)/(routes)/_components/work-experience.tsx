import Image from "next/image";


function WorkExperience() {
    return ( 
        <div id="" className="flex-col items-center justify-center px-5 space-y-4">
            <div className="relative bg-primary-50 rounded-xl p-5">
                <div className="rounded-full bg-white p-1 absolute top-3 left-[-67px] z-10">
                    <Image
                        src="/sophic.png"
                        alt="Company Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </div>
               
                <div className="">
                    <h3 className="text-2xl font-bold">
                       Software Developer Intern
                    </h3>
                    <p className="text-md">
                        Veecotech
                    </p>
                </div>
                <ul className="list-inside px-2">
                    <li className="before:content-['\2022'] before:mr-2">
                        Developing and maintaining company mobile application using Flutter for android and iOS devices.
                    </li>
                    <li className="before:content-['\2022'] before:mr-2">
                        Develop and maintain client website using Laravel, vue.js and next.js
                    </li>
                    <li className="before:content-['\2022'] before:mr-2">
                        Participate in company scrum meeting and provide feedback on the current project.
                    </li>
                    <li className="before:content-['\2022'] before:mr-2">
                        collaborate with other team member to
                        achieve the best result.
                    </li>
                </ul>
            

            </div>
            <div className="relative bg-primary-50 rounded-xl p-5">
            <div className="rounded-full bg-white p-1 absolute top-3 left-[-67px] z-10">
                    <Image
                        src="/veecotech.jpeg"
                        alt="Company Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">
                        Lab Technician
                    </h3>
                    <p className="text-md">
                        Sophic Automation Sdn. Bhd.
                    </p>
                </div>
                <ul className="list-inside px-2">
                    <li className="before:content-['\2022']">
                        Developing and maintaining company mobile application using Flutter for android and iOS devices.
                    </li>
                    <li className="before:content-['\2022']">
                        Develop and maintain client website using Laravel, vue.js and next.js
                    </li>
                    <li className="before:content-['\2022']">
                        Participate in company scrum meeting and provide feedback on the current project.
                    </li>
                    <li className="before:content-['\2022']">
                        collaborate with other team member to
                        achieve the best result.
                    </li>
                </ul>


            </div>
            
        </div>
     );
}

export default WorkExperience;
