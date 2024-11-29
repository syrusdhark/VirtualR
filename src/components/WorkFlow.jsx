import codeImg from "../assets/code.jpg";
import {checklistItems} from "../constants";
import {CheckCircle} from "lucide-react";
function WorkFlow(){
    return(
        <div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mt-20">Accelrate your <span className="bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent">coding workflow</span></h2>

            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="w-1/2 md:w-1/3">
                    <img src={codeImg} alt="code"/>
                </div>
                <div className="w-full md:w-1/3 p-6">
                    <ul className="space-y-6">
                    {checklistItems.map((item)=>(
                        <li key={item.id} className="space-y-2">
                            <div className="flex items-center gap-3 mt-20"><CheckCircle className="text-green-500 w-6 h-6"/>{item.title}</div>
                            <p className="text-neutral-600 ml-9">{item.description}</p>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
                  
        </div>
    )
}
export default WorkFlow