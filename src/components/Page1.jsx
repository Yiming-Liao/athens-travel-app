import { useRef } from 'react';
import bg from '../assets/bg.png'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

const Page1 = ({ setAnimationOrder }) => {

    const page1Ref = useRef(null);

    useGSAP(() => {
        gsap.timeline()
            .to('#page1Title', { opacity: 1, y: 0, })
            .to('#page1P', { opacity: 1, y: 0, })
            .to('#coverAll', { opacity: 0, duration: 1 })
            .to('#coverTop', { translateY: '-55vh', duration: .6, ease: "power2.out", }, '>-.8')
            .to('#coverBottom', {
                translateY: '55vh', duration: .6, ease: "power2.out",
                onComplete: () => setAnimationOrder(2)
            }, '<')
    }, { scope: page1Ref.current });

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#page1",
                start: "top top",
                end: "+=1300px",
                scrub: .3,
            },
        });
        tl.to('#page1', { y: -150 }).to('#page1Title', { y: -20 }, '<').to('#page1P', { y: -60 }, '<')
            .to('#coverBlack', { opacity: .3 }, '<')
    }, { scope: page1Ref.current })


    return (
        <>
            <div ref={page1Ref} id='page1' className="w-full h-[100svh] fixed top-0 flex flex-col justify-center items-center -z-50">

                <div id='coverAll' className='w-full h-[100%] bg-base-100 absolute top-0 rounded-b-2xl shadow-2xl z-20'></div>
                <div id='coverTop' className='w-full h-[50%] bg-base-100 absolute top-0 rounded-b-2xl shadow-2xl z-10'></div>
                <div id='coverBottom' className='w-full h-[50%] bg-base-100 absolute bottom-0 rounded-t-2xl shadow-inner z-0'></div>

                <div id='coverBlack' className='w-full h-full bg-black opacity-0 absolute top-0 z-0'></div>

                <img src={bg} alt="athens" className='object-cover absolute top-0 -z-30 h-[100svh]' />
                <div id='page1Title' className='text-[8.3rem] mt-[-220px] opacity-0 translate-y-[30px] z-30'>ATHENS</div>
                <div id='page1P' className='text-[1.6rem] mt-[20px] opacity-0 translate-y-[30px] z-30'>Where History Meets Horizon: Discover Athens</div>

            </div >
        </>
    )
}

export default Page1
