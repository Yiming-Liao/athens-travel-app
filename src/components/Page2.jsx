import { useRef, useEffect } from 'react';
import wiki from '../assets/wiki.png'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";


const Page2 = ({ animationOrder }) => {

    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const pRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scrollIn');
                } else {
                    entry.target.classList.remove('scrollIn');
                }
            });
        }, { threshold: 0.15 });

        if (imgRef.current) observer.observe(imgRef.current)
        if (titleRef.current) observer.observe(titleRef.current)
        if (pRef.current) observer.observe(pRef.current)
    }, []);


    const page2Ref = useRef(null);
    useGSAP(() => {
        if (animationOrder === 2) {
            gsap.timeline()
                .to(page2Ref.current, { translateY: 0, duration: .4, ease: "circ.out", })
                .to('#page2A', { opacity: .5 })
                .to('#page2A', { translateY: -12, duration: .2 }, '+=2')
                .to('#page2A', { translateY: 0, duration: .3 })
                .to('#page2A', { translateY: -12, duration: .2 }, '+=2')
                .to('#page2A', { translateY: 0, duration: .3 })
        }
    }, [animationOrder])



    useGSAP(() => {
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#page2Full',
                start: "top center",
                end: "+=1300px",
                scrub: .3,
            },
        });
        tl2.to(imgRef.current, { y: -100 }).to(titleRef.current, { y: -20 }, 0).to(pRef.current, { y: -50 }, 0)
    },)


    return (
        <>
            <div ref={page2Ref} className='translate-y-[60px] flex justify-center w-full h-[50px] absolute left-0 bottom-0 bg-base-100 rounded-b-2xl rotate-180 shadow-xl z-30'>
                <a id='page2A' href="#page2" className='hover:scale-110 opacity-0'>
                    <svg className='rotate-180 mt-[12px]' width="50" height="30" viewBox="0 0 84 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_12_194)">
                            <path d="M77 4.99993L42 24.6428L7.00001 4.99993" stroke="oklch(var(--n))" strokeWidth="5" strokeLinecap="round" />
                            <path d="M77 18.3571L42 38L7.00001 18.3571" stroke="oklch(var(--n))" strokeWidth="5" strokeLinecap="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_12_194" x="0.499565" y="0.499481" width="83.0009" height="46.3673" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12_194" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12_194" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </a>
            </div>

            <div className="w-full h-[6vh] bg-base-100 -z-30 -mt-6"></div>

            <div className="w-full min-h-[max-content] relative top-0  bg-base-100 z-0 pb-10 max-[1000px]:pb-0">

                <div id='page2Full' className='w-full h-[100%] flex justify-center items-center max-[1000px]:flex-col'>

                    <div className='w-[50%] h-full flex justify-center relative mx-10 max-[1000px]:w-full'>
                        <div className='w-[25vw] aspect-[5/6] rounded-3xl my-20 max-[1000px]:w-2/3 z-30  mt-48'>
                            <img ref={imgRef} className='scrollYet object-cover w-full h-full rounded-3xl shadow-lg' src={wiki} alt="wiki" />
                        </div>

                        <div className='drop-shadow-lg w-[50vw] absolute top-0 right-0 opacity-50 z-0 max-[1000px]:w-[90%] max-[1000px]:left-0'>
                            <svg viewBox="0 0 1059 1170" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.1777 651.266C31.2229 628.272 31.9857 605.513 31.9857 582.461C31.9857 570.789 33.6356 559.19 37.8116 548.208C41.8772 537.517 49.895 528.474 53.2802 517.472C59.2307 498.133 74.1562 485.654 90.646 475.084C111.274 461.861 134.1 461.047 157.844 459.515C173.288 458.519 189.551 458.488 204.752 455.598C232.601 450.302 260.742 436.127 284.305 420.642C316.296 399.62 349.763 379.404 379.126 354.75C391.637 344.245 402.079 331.364 413.378 319.594C423.803 308.735 437.99 299.461 450.644 291.469C488.971 267.262 525.995 254.725 570.676 248.981C606.415 244.386 643.269 238.319 676.446 254.907C698.771 266.07 715.593 280.819 728.075 302.217C740.377 323.306 731.784 352.908 724.459 374.236C716.786 396.578 711.673 421.632 717.227 445.151C722.728 468.452 739.149 487.401 751.579 507.428C758.258 518.188 767.373 526.707 774.179 537.36C780.971 547.991 791.334 556.838 796.679 568.197C818.304 614.15 826.111 673.044 788.543 712.739C744.39 759.391 683.695 747.313 625.017 748.899C593.889 749.74 566.009 768.813 539.839 783.352C512.634 798.466 484.856 811.72 456.771 824.937C435.579 834.909 416.393 849.426 394.997 858.787C367.626 870.762 341.868 885.561 316.247 900.773C292.835 914.674 264.799 926.085 237.196 926.085C220.379 926.085 215.504 923.377 203.648 911.521C193.377 901.251 183.978 887.872 177.632 874.758C173.579 866.382 172.096 858.887 169.396 850.148C166.812 841.789 167.143 830.139 161.762 823.028C155.313 814.507 144.547 810.745 134.943 807.459C118.097 801.696 102.859 793.093 85.3224 788.776C72.9878 785.74 60.8552 781.805 48.2579 780.037C32.7265 777.857 15.8973 779.636 0.244865 779.636C-29.7975 779.636 -56.0012 776.626 -78.3037 754.323C-96.7228 735.904 -100 715.926 -100 691.042C-100 671.592 -76.6034 655.332 -61.3284 646.846C-52.8566 642.14 -43.6504 639.204 -35.3129 634.592C-27.1515 630.077 -18.6792 629.307 -10.0006 625.954C2.94715 620.951 17.2581 623.028 30.1777 618.721" stroke='oklch(var(--n))' strokeWidth="487" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>


                    <div className='w-[50%] h-full flex justify-center gap-10 m-10 max-[1000px]:w-[90%] max-[1000px]:-mt-6'>
                        <div className='w-[90%] flex flex-col items-center gap-8'>
                            <p ref={titleRef} className='scrollYet text-[4rem]  w-max mx-auto px-6 rounded-3xl shadow '>About Athens</p>
                            <p ref={pRef} className='scrollYet text-[1.8rem] w-[75%] mt-10'>Athens, birthplace of democracy and home to the Pantheon, offers a blend of ancient glory and modern vibrance. Explore its rich heritage, from bustling markets to historic sites, in a city that shaped the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page2
