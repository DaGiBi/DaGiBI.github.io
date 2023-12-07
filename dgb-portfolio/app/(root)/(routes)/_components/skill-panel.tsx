import Image from "next/image"
function SkillPanel() {
    return ( 
        <div className="flex flex-wrap justify-center mx-auto px-5">
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
      <Image src="/icons/flutter.svg" alt="Dart Flutter" width={60} height={60} className="skill-icon " />
    </div>
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
      <Image src="/icons/react-native.svg" alt="React Native" width={60} height={60} className="skill-icon" />
    </div>
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-160 transition-transform duration-300 ease-in-out">
      <Image src="/icons/js.svg" alt="JavaScript" width={60} height={60} className="skill-icon" />
    </div>
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
      <Image src="/icons/nodejs.svg" alt="Node.js" width={60} height={60} className="skill-icon" />
    </div>
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
      <div className="rounded-sm bg-white">
        <Image src="/icons/nextjs.svg" alt="Next.js" width={60} height={60} className="skill-icon" />
      </div>
    </div>
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
      <Image src="/icons/python.svg" alt="Python" width={60} height={60} className="skill-icon" />
    </div>
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
      <div className="rounded-sm bg-white">
        <Image src="/icons/laravel.svg" alt="PHP Laravel" width={60} height={60} className="skill-icon" />
      </div>
    </div>
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
      <Image src="/icons/mysql.svg" alt="MySQL" width={60} height={60} className="skill-icon" />
    </div>
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
      <Image src="/icons/mongo.svg" alt="MongoDB" width={60} height={60} className="skill-icon" />
    </div>
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
      <Image src="/icons/tailwind.svg" alt="Tailwind" width={60} height={60} className="skill-icon" />
    </div>
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
      <Image src="/icons/html5.svg" alt="HTML" width={60} height={60} className="skill-icon" />
    </div>
    <div className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
      <Image src="/icons/css.svg" alt="CSS" width={60} height={60} className="skill-icon" />
    </div>
  </div>
     );
}

export default SkillPanel;