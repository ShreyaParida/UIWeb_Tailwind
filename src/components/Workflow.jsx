import { CheckCircle2 } from "lucide-react";
import codeImg from "/Users/shreya/Desktop/UIWeb/virtualr-main/src/assets/code.jpg";
import { checklistItems } from "../../virtualr-main/src/constants";
const Workflow = () => {
  return (
    <div id= "wf" className="mt-20 text-center">
        <div className="mb-20">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6
        font-medium px-2 py-1 uppercase text-3xl">
            Work Flow
        </span></div>
        <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center mt-6
        tracking-wide underline decoration-dotted underline-offset-10"> Redefine Your <span className="text-transparent bg-clip-text bg-gradient-to-r 
        from-blue-500 to-orange-500 underline-offset-10">Career Path</span></h2>
        <div className="flex flex-wrap justify-center mt-10">
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt="Code" />
            </div>  
        
        <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) =>(
                <div key={index} className="flex mb-12">
                    <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 
                    p-2 justify-cemter items-center rounded-full">
                        <CheckCircle2/>
                    </div>
                    <div>
                        <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                        <p className="text-md text-neutral-500">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Workflow
