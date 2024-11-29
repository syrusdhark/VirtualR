import { pricingOptions } from "../constants"
import {CheckCircle} from "lucide-react"

function PricingCards(){

    return(
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">

                {pricingOptions.map((item)=>(
                    <li key={item.title} className="w-1/2 md:w-1/5 p-8 border border-neutral-500 rounded-lg mt-20 list-none">
                        <h3 className="text-4xl">{item.title}{item.title === "Pro" && <span className="text-xl bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent">(most popular)</span>}</h3>
                        <span className="text-4xl">{item.price}<span className="text-sm text-neutral-400 mt-4">/month</span></span>
                        <ul>
                            {item.features.map((feature)=>(
                                <li key={feature} className="text-sm flex items-center gap-2 mt-8"><CheckCircle/>{feature}</li>
                            ))}
                        </ul>
                        <button className="border border-orange-900 bg-neutral-1000 hover:bg-orange-900 transition-colors duration-300 text-white px-4 py-2 rounded-md mt-10 w-full">
                            Subscribe
                        </button>
                    </li>
                ))}
           
        </div>
    )
}
export default PricingCards