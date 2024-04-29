import { useEffect, useRef } from 'react'
import app from '../assets/app.png'
import app2 from '../assets/app2.png'
import greece from '../assets/greece.png'

const Footer = () => {


    const titleRef = useRef(null);
    const title2Ref = useRef(null);
    const icon1Ref = useRef(null);
    const icon2Ref = useRef(null);
    const icon3Ref = useRef(null);
    const mapRef = useRef(null);
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
        if (titleRef.current) observer.observe(titleRef.current);
        if (title2Ref.current) observer.observe(title2Ref.current);
        if (icon1Ref.current) observer.observe(icon1Ref.current);
        if (icon2Ref.current) observer.observe(icon2Ref.current);
        if (icon3Ref.current) observer.observe(icon3Ref.current);
        if (mapRef.current) observer.observe(mapRef.current);
    }, []);


    return (
        <>

            <footer className="footer py-24 px-6 bg-base-300 flex flex-wrap h-auto justify-center rounded-t-2xl mt-[-50px] z-20 relative">
                <nav className="flex w-[30%] justify-center">
                    <div className='flex flex-col gap-12 ml-10'>
                        <h6 ref={titleRef} className="scrollYet footer-title text-base-content text-[2rem]">Links</h6>
                        <a ref={icon1Ref} href='https://www.visitgreece.gr/mainland/attica/athens/' className="scrollYet link link-hover text-white" target='_blank' rel="noreferrer">
                            <img src={greece} alt="Visit Greece" />
                        </a>
                    </div>

                </nav>
                <nav className="flex w-[60%] justify-center">
                    <div className='flex flex-col gap-10 ml-10'>
                        <h6 ref={title2Ref} className="scrollYet footer-title text-[1.6rem]"><em className='text-base-content leading-[5px]'>THE VISIT GREECE APP</em></h6>
                        <a ref={icon2Ref} className='scrollYet' href="https://apps.apple.com/us/app/visit-greece/id1523802597" target='_blank' rel="noreferrer"><img src={app} alt="app store" /></a>
                        <a ref={icon3Ref} className='scrollYet' href="https://play.google.com/store/apps/details?id=com.visit_greece" target='_blank' rel="noreferrer"><img src={app2} alt="google play" /></a>
                    </div>
                </nav>
                <iframe ref={mapRef} className="scrollYet w-[90%] h-[400px] mx-auto mt-24 border-4 border-solid border-base-100 rounded-2xl shadow-2xl" title='Athens' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50310.55897739638!2d23.69713984334259!3d37.99089765944479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2z5biM6IeY6ZuF5YW4!5e0!3m2!1szh-TW!2stw!4v1712385429797!5m2!1szh-TW!2stw" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </footer>
        </>
    )
}

export default Footer
