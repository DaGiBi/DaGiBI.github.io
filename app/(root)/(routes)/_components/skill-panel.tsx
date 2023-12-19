import Image from "next/image"
import {skills} from "@/helpers/constant";
function SkillPanel() {
    return ( 
        <div className="flex flex-wrap justify-center mx-auto px-5">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center justify-between p-5 ">
                <div  className="flex items-center justify-center  hover:translate-y-[-10px] hover:scale-150 transition-transform duration-300 ease-in-out">
                    <Image src={"/icons/" + skill.icon} alt={skill.name} width={60} height={60} className="skill-icon" />
                </div>
                    <text className="text-black font-semibold ">
                        {skill.name}
                    </text>
              </div>
            )
            )}
        </div>
     );
}

export default SkillPanel;