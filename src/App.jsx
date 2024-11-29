import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import WorkFlow from "./components/WorkFlow"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"  
import Footer from "./components/Footer"
function App() {
  
  
  return(
    <>
       <Navbar />
      <div className="max-w-7xl mx-auto px-6"><Hero /></div>
      <Features />
      <WorkFlow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
