import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-700">
      <Navbar/>
      <Hero/>
      <Main/>
      <Footer/>
      
    </div>
  );
}