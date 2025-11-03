import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { type ReactNode } from "react";



interface GuestLayoutProps{
  children: ReactNode
}

export default({children, ...props}:GuestLayoutProps)=>(
  <div {...props}>
    <Navbar/>
    <div className="font-poppins">
      {children}
    </div>
    <Footer/>
  </div>
)