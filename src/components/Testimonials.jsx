import {testimonials} from "../constants"

function Testimonials(){
    return(
        <div className="flex flex-col justify-center items-center mt-20 mb-32">
            <h3 className="text-6xl">What People are saying</h3>
            <div className="flex flex-col gap-6 w-full max-w-7xl px-4 md:px-6">
                <ul className="flex flex-col md:flex-row gap-6">
                    {testimonials.slice(0, 3).map((item) => (
                        <li key={item.user} className="flex-1">
                            <div className="flex flex-col gap-2 text-sm text-neutral-500 border border-neutral-800 rounded-lg p-4 mt-10 h-full bg-neutral-900">
                                   {item.text}
                                   <div className="flex flex-row gap-2 mt-4">
                                         <img src={item.image} alt={item.user} className="w-12 h-12 rounded-full" />
                                         <div className="flex flex-col p-2">
                                             <span className="text-neutral-100 font-light">{item.user}</span>
                                             <span className="text-neutral-500 italic">{item.company}</span>
                                         </div>
                                   </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col md:flex-row gap-6">
                    {testimonials.slice(3, 6).map((item) => (
                        <li key={item.user} className="flex-1">
                            <div className="flex flex-col gap-2 text-sm text-neutral-500 border border-neutral-800 rounded-lg p-4 mt-10 h-full bg-neutral-900">
                                   {item.text}
                                   <div className="flex flex-row gap-2 mt-4">
                                         <img src={item.image} alt={item.user} className="w-12 h-12 rounded-full" />
                                         <div className="flex flex-col p-2">
                                             <span className="text-neutral-100 font-light">{item.user}</span>
                                             <span className="text-neutral-500 italic">{item.company}</span>
                                         </div>
                                   </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default Testimonials