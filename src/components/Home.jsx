import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { motion,AnimatePresence } from "framer-motion";


function Home() {
   const [open,setOpen] = useState(false);
  
  return(
    <div>
      <nav className="bg-[#020817] text-white">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <div className="text-lg font-semibold">SASS</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <a href="#" className="hover:text-white">Features</a>
        <a href="#" className="hover:text-white">Pricing</a>
        <a href="#" className="hover:text-white">Download</a>
        <a href="#" className="hover:text-white">Support</a>
      </div>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-4">
        <button className="text-gray-300 hover:text-white text-sm">Log in</button>
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm">Start Free Trial</button>
      </div>

      {/* Mobile Menu Button */}
    <div className="md:hidden ">
      <button 
         onClick={()=>setOpen(!open)}
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10"
         >  <HiMenu size={24} /> </button>
    </div>
    </div>
      {/*Mobile Menu*/}
      <AnimatePresence>
        {open && (
           <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: "auto" }}
           exit={{ opacity: 0, height: 0 }}
           transition={{ duration: 0.3 }}
           className="md:hidden px-6 pb-1 flex flex-col gap-4 text-gray-300"
         >
           <a href="#" >Features</a>
           <a href="#">Pricing</a>
           <a href="#">Download</a>
           <a href="#">Support</a>
           <button className="text-left">Log in</button>
           
         </motion.div>
        )}
      </AnimatePresence>

</nav>  
    <section className="bg-[#020817] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">

        {/* Heading */}
        <motion.h1
         initial={{ opacity: 0, y: 40 }}
         animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
       Simple Accounting <br />
       for Modern Businesses
      </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.3, duration: 0.8 }}
         className="mt-6 text-gray-400 max-w-2xl mx-auto"
        >
         Manage invoices, track expenses, and generate reports — all in one place.
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg">
            Start Free Trial
          </button>

          <button className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg text-lg">
            Download for Windows
          </button>
        </div>

      </div>
    </section>

    <section className="bg-[#020817] text-white border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-6 py-13">

    {/* Title */}
    <div className="text-center mb-10">
      <p className="text-blue-500 text-sm mb-2">DOWNLOAD ACCOUNTEX</p>
      <h2 className="text-3xl md:text-4xl font-bold">
        Available for all major platforms
      </h2>
      <p className="text-gray-400 mt-3">
        Choose your operating system and get started in minutes.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-4 gap-6">

      {/* Windows */}
      <div className="bg-[#0B1220] p-6 rounded-xl border border-gray-800 text-center">
        <h3 className="text-lg font-semibold">Windows</h3>
        <p className="text-gray-400 text-sm mt-1">Windows 10 or later</p>
        <button className="mt-4 w-full border border-gray-700 py-2 rounded-lg hover:bg-white/10">
          Download for Windows
        </button>
      </div>

      {/* macOS */}
      <div className="bg-[#0B1220] p-6 rounded-xl border border-gray-800 text-center">
        <h3 className="text-lg font-semibold">macOS</h3>
        <p className="text-gray-400 text-sm mt-1">macOS 11 or later</p>
        <button className="mt-4 w-full border border-gray-700 py-2 rounded-lg hover:bg-white/10">
          Download for macOS
        </button>
      </div>

      {/* Linux */}
      <div className="bg-[#0B1220] p-6 rounded-xl border border-gray-800 text-center">
        <h3 className="text-lg font-semibold">Linux</h3>
        <p className="text-gray-400 text-sm mt-1">Ubuntu 20.04 or later</p>
        <button className="mt-4 w-full border border-gray-700 py-2 rounded-lg hover:bg-white/10">
          Download for Linux
        </button>
      </div>

      {/* Web */}
      <div className="bg-[#0B1220] p-6 rounded-xl border border-gray-800 text-center">
        <h3 className="text-lg font-semibold">Web App</h3>
        <p className="text-gray-400 text-sm mt-1">Access from any browser</p>
        <button className="mt-4 w-full border border-gray-700 py-2 rounded-lg hover:bg-white/10">
          Open Web App
        </button>
      </div>

    </div>

    {/* Bottom Info */}
    <div className="mt-10 flex flex-col md:flex-row justify-center gap-6 text-gray-400 text-sm text-center">
      <p>No credit card required</p>
      <p>Secure downloads</p>
      <p>Regular updates</p>
    </div>

  </div>
</section>
</div>
 )
}

export default Home;