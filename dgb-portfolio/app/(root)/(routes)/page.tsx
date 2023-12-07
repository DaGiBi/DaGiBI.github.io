import Image from "next/image"

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
                <div className="flex flex-col-reverse sm:flex-row items-center justify-center mx-auto px-10">
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/flutter.svg" alt="Dart Flutter" className="skill-icon" />
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/react-native.svg" alt="React Native" className="skill-icon" />
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/js.svg" alt="JavaScript" className="skill-icon" />
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/nodejs.svg" alt="Node.js" className="skill-icon" />
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/nextjs.svg" alt="Next.js" className="skill-icon" />
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/python.svg" alt="Python" className="skill-icon" />
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/laravel.svg" alt="PHP Laravel" className="skill-icon" />
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/mysql.svg" alt="MySQL" className="skill-icon" />
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/mongo.svg" alt="MongoDB" className="skill-icon" />
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/tailwind.svg" alt="Tailwind" className="skill-icon" />
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/html5.svg" alt="html" className="skill-icon" />
                    </div>
                    <div className="flex flex-1 item bg-center justify-center">
                        <img src="/icons/css.svg" alt="CSS" className="skill-icon" />
                    </div>
                </div>
            </section>
        </>
       
     );
}
 