import './App.css'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Footer from './components/Footer'
import { useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const App = () => {
  gsap.registerPlugin(ScrollTrigger)
  const [animationOrder, setAnimationOrder] = useState(1);

  const mouseRef = useRef();
  useGSAP(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    const targets = gsap.utils.toArray(".ball");
    const moveMouse = (e) => {
      gsap.to(targets, {
        duration: 0.2,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02
      });
    };
    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, { scope: mouseRef.current }); // 空依賴數組確保事件只綁定和解綁一次



  return (
    <>
      <div className='h-auto'>

        <div id='page1'></div>

        <Navbar animationOrder={animationOrder} setAnimationOrder={setAnimationOrder} />

        <Page1 setAnimationOrder={setAnimationOrder} />

        <div className="w-full h-[100svh]"></div>

        <div className='w-full bg-base-100 z-10'> <div id='page2'></div>

          <Page2 animationOrder={animationOrder} /><div id='page3' className='relative top-[80px]'></div>

          <Page3 /> <div id='page4' className='relative top-[-80px]'></div>

          <Page4 /> <div id='page5' className='relative top-[-80px]'></div>

          <Footer />

        </div>

        <div ref={mouseRef}>
          <div className="ball bg-secondary w-5 h-1 fixed top-0 left-0 rounded-full shadow shadow-bg-neutral z-50 pointer-events-none	"></div>
          <div className="ball bg-secondary w-4 h-2 fixed top-0 left-0 rounded-full shadow shadow-bg-neutral z-50 pointer-events-none	"></div>
          <div className="ball bg-secondary w-3 h-3 fixed top-0 left-0 rounded-full shadow shadow-bg-neutral z-50 pointer-events-none	"></div>
          <div className="ball bg-secondary w-2 h-4 fixed top-0 left-0 rounded-full shadow shadow-bg-neutral z-50 pointer-events-none	"></div>
          <div className="ball bg-secondary w-1 h-5 fixed top-0 left-0 rounded-full shadow shadow-bg-neutral z-50 pointer-events-none	"></div>
        </div>

      </div>
    </>
  )
}

export default App
