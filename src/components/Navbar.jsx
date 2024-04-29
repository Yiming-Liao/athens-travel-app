import { useEffect, useState, useRef } from "react"
import Dropdowns from "./Dropdowns"
import DropDownsTheme from './DropdownsTheme'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

const Navbar = ({ animationOrder, setAnimationOrder }) => {

    const [temp, setTemp] = useState('');

    const fetchWeather = async () => {
        try {
            const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=athens&units=metric&appid=daaf6219d3781d1188f4d55ff8da3aa2')
            const data = await res.json();
            if (data) setTemp(data.main.temp)
        } catch (e) {
            console.log('Error: ' + e)
        }
    }
    useEffect(() => {
        fetchWeather();
    }, [])


    const navbarRef = useRef(null);
    useGSAP(() => {
        if (animationOrder === 2) {
            gsap.timeline()
                .to(navbarRef.current, { translateY: 0, duration: .4, ease: "circ.out" })
                .to('.navbarAnimation', {
                    opacity: 1, translateY: 0, stagger: .1,
                    onComplete: () => setAnimationOrder(3)
                })
        }
    }, [animationOrder])


    return (
        <>
            <div ref={navbarRef} className="w-full h-[80px] fixed top-0 z-40 flex items-center 
            px-[2vw] text-[1rem] bg-base-100 rounded-b-2xl shadow-xl translate-y-[-90px]">

                <div className="flex-1 group">
                    <a className="navbarAnimation opacity-0 translate-y-[10px] flex items-center gap-4 w-max" href="https://weather.com/zh-TW/weather/today/l/67f5d86d311c9764523f94c61f6c569f47972479afd7d705ec18359260a665e1" target="_blank" rel="noreferrer">
                        <svg className="w-12 ml-6 mb-1" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0862 41.6069C13.7241 41.6069 3 44.8242 3 57.6931C3 70.5621 13.7241 73.7794 19.0862 73.7794H57.6931C63.0553 73.7794 73.7793 70.5621 73.7793 57.6931C73.7793 44.8242 63.0553 41.6069 57.6931 41.6069" stroke="oklch(var(--n))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M38.3897 38.3896C43.7203 38.3896 48.0414 34.0686 48.0414 28.7379C48.0414 23.4074 43.7203 19.0862 38.3897 19.0862C33.0591 19.0862 28.738 23.4074 28.738 28.7379C28.738 34.0686 33.0591 38.3896 38.3897 38.3896Z" stroke="oklch(var(--n))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M60.9103 28.738H64.1276" stroke="oklch(var(--n))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M38.3896 6.21724V3" stroke="oklch(var(--n))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M59.3017 11.0432L56.0845 14.2605" stroke="oklch(var(--n))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.4776 11.0432L20.6948 14.2605" stroke="oklch(var(--n))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.6517 28.738H15.8689" stroke="oklch(var(--n))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-[1.9rem] font-sans font-semibold text-accent group-hover:scale-125">{Math.floor(temp)}</div>
                        <svg className="w-6 ml-[-0.9rem]" fill="oklch(var(--a))" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10,15a6,6,0,0,0,9.428,4.925,1,1,0,1,1,1.144,1.64,8,8,0,1,1,0-13.13,1,1,0,1,1-1.144,1.64A6,6,0,0,0,10,15ZM10,4.5A3.5,3.5,0,1,1,6.5,1,3.5,3.5,0,0,1,10,4.5Zm-2,0A1.5,1.5,0,1,0,6.5,6,1.5,1.5,0,0,0,8,4.5Z" /></svg>
                    </a>
                </div>

                <div>
                    <a href="#page1" className="navbarAnimation opacity-0 translate-y-[10px] m-2 group">
                        <svg className='w-14 group-hover:scale-90' viewBox="0 0 60 56" fill="none" xmlns=" http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <path d="M3 12H57V9L52 7L50 8H47L46 6L43 5L40 6L38 4L35 2H33V6L28.999 8L29 0L23 3L22 6L18 5L13 6L11.999 8L3 9V12Z" fill="oklch(var(--n))" />
                                <path d="M50 8H47L46 6L43 5L40 6L38 4L35 2H33V6L28.999 8L29 0L23 3L22 6L18 5L13 6L11.999 8L3 9V10H57V9L52 7L50 8Z" fill="oklch(var(--n))" />
                                <path d="M56 12H4V16H56V12Z" fill="oklch(var(--n))" />
                                <path d="M57 16H3V20H57V16Z" fill="oklch(var(--n))" />
                                <path d="M60 52H0V56H60V52Z" fill="oklch(var(--n))" />
                                <path d="M3 52V48H57V52" fill="oklch(var(--n))" />
                                <path d="M4 54H60V52H2C2 52.5304 2.21071 53.0391 2.58579 53.4142C2.96086 53.7893 3.46957 54 4 54Z" fill="oklch(var(--n))" />
                                <path d="M7 50H57V48H5C5 48.5304 5.21071 49.0391 5.58579 49.4142C5.96086 49.7893 6.46957 50 7 50Z" fill="oklch(var(--n))" />
                                <path d="M5 48V44H11L10.999 48" fill="oklch(var(--n))" />
                                <path d="M6 45C6 45.5304 6.21071 46.0391 6.58579 46.4142C6.96086 46.7893 7.46957 47 8 47H11V44H6V45Z" fill="oklch(var(--n))" />
                                <path d="M16 48V44H22L21.999 48" fill="oklch(var(--n))" />
                                <path d="M17 45C17 45.5304 17.2107 46.0391 17.5858 46.4142C17.9609 46.7893 18.4696 47 19 47H22V44H17V45Z" fill="oklch(var(--n))" />
                                <path d="M27 48V44H33L32.999 48" fill="oklch(var(--n))" />
                                <path d="M28 45C28 45.5304 28.2107 46.0391 28.5858 46.4142C28.9609 46.7893 29.4696 47 30 47H33V44H28V45Z" fill="oklch(var(--n))" />
                                <path d="M38 48V44H44L43.999 48" fill="oklch(var(--n))" />
                                <path d="M39 45C39 45.5304 39.2107 46.0391 39.5858 46.4142C39.9609 46.7893 40.4696 47 41 47H44V44H39V45Z" fill="oklch(var(--n))" />
                                <path d="M49 48V44H55L54.999 48" fill="oklch(var(--n))" />
                                <path d="M50 45C50 45.5304 50.2107 46.0391 50.5858 46.4142C50.9609 46.7893 51.4696 47 52 47H55V44H50V45Z" fill="oklch(var(--n))" />
                                <path d="M54 20H50V44H54V20Z" fill="oklch(var(--n))" />
                                <path d="M52 20V40C52 40.5304 52.2107 41.0391 52.5858 41.4142C52.9609 41.7893 53.4696 42 54 42V20H52Z" fill="oklch(var(--n))" />
                                <path d="M43 20H39V44H43V20Z" fill="oklch(var(--n))" />
                                <path d="M41 20V40C41 40.5304 41.2107 41.0391 41.5858 41.4142C41.9609 41.7893 42.4696 42 43 42V20H41Z" fill="oklch(var(--n))" />
                                <path d="M32 20H28V44H32V20Z" fill="oklch(var(--n))" />
                                <path d="M30 20V40C30 40.5304 30.2107 41.0391 30.5858 41.4142C30.9609 41.7893 31.4696 42 32 42V20H30Z" fill="oklch(var(--n))" />
                                <path d="M21 20H17V44H21V20Z" fill="oklch(var(--n))" />
                                <path d="M19 20V40C19 40.5304 19.2107 41.0391 19.5858 41.4142C19.9609 41.7893 20.4696 42 21 42V20H19Z" fill="oklch(var(--n))" />
                                <path d="M10 20H6V44H10V20Z" fill="oklch(var(--n))" />
                                <path d="M8 20V40C8 40.5304 8.21071 41.0391 8.58579 41.4142C8.96086 41.7893 9.46957 42 10 42V20H8Z" fill="oklch(var(--n))" />
                                <path d="M7 18H57V16H5C5 16.5304 5.21071 17.0391 5.58579 17.4142C5.96086 17.7893 6.46957 18 7 18Z" fill="oklch(var(--n))" />
                                <path d="M8 14H56V12H6C6 12.5304 6.21071 13.0391 6.58579 13.4142C6.96086 13.7893 7.46957 14 8 14Z" fill="oklch(var(--n))" />
                            </g>
                        </svg>
                    </a>
                </div>

                <div className="flex-1 flex justify-end items-center gap-[2.5vw] font-semibold text-[1.2rem] max-[1000px]:hidden max-[1360px]:text-[0.8rem]">
                    <div className="navbarAnimation opacity-0 translate-y-[10px] ">
                        <a href="#page2" className="hover:shadow-xl">About Athens</a>
                    </div>
                    <div className="navbarAnimation opacity-0 translate-y-[10px] ">
                        <a href="#page3" className="hover:shadow-xl">Places To Go</a>
                    </div>
                    <div className="navbarAnimation opacity-0 translate-y-[10px] ">
                        <a href="#page4" className="hover:shadow-xl">Informations</a>
                    </div>
                    <div className="navbarAnimation opacity-0 translate-y-[10px] ">
                        <a href="#page5" className="hover:shadow-xl">Links</a>
                    </div>

                    <div className='max-[1000px]:hidden'>
                        <DropDownsTheme animationOrder={animationOrder} />
                    </div>
                </div>

                <div className="hidden max-[1000px]:flex flex-1 justify-end items-center mt-3 ">
                    <Dropdowns animationOrder={animationOrder} />
                    <div className="mb-2 mx-3"><DropDownsTheme animationOrder={animationOrder} /></div>
                </div>





            </div >

        </>
    )
}

export default Navbar
