import {features} from "../constants"


export default function Features(){
    return(
        <div className="relative mt-20 flex flex-col justify-center items-center">
            
            <div className="text-center">
            <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">FEATURE</span>
               <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mt-20">Easily build 
               <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent"> your code</span>
            </h2>
            </div>
        
        
            <div className="flex flex-wrap mt-10 lg:mt-20 justify-center gap-8 max-w-6xl mx-auto">
                {features.map((feature,index)=>(
                    <div key={index} className="w-full sm:w-[45%] lg:w-[30%] px-4 mb-8">
                         <div className="flex justify-center">
                            <div className="flex mx-6 h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                              {feature.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-6 text-xl font-semibold">{feature.text}</h5>
                                <p className="text-neutral-600">{feature.description}</p>
                            </div>
                         </div>
                    </div>
                ))}
                  
            </div>






        </div>
    )
}