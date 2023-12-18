import Image from "next/image"
import {skills} from "@/helpers/constant";
function SkillPanel() {
    return ( 
        <div className="flex flex-wrap justify-center mx-auto px-5">
            {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center justify-center p-5 hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
                    <Image src="`{skill.icon}`" alt={skill.name} width={60} height={60} className="skill-icon" />
                </div>
            )
            )}
        </div>
     );
}

export default SkillPanel;