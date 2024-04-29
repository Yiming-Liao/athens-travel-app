import { useRef, useEffect } from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'

const Page3 = () => {

    const ref = useRef(null);
    const scrollClick = () => {
        // 使用 scrollBy 方法向右滑動，這裡的 100 是示例值，表示向右滑動 100px
        // 你可以根據需要調整這個值
        ref.current.scrollBy({
            left: 320, // 水平方向向右滑動的距離
            behavior: 'smooth' // 選擇滑動行為為平滑滑動
        });
    }

    const titleRef = useRef(null);
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
        if (ref.current) observer.observe(ref.current);
    }, []);

    return (
        <>
            <div className='h-screen mt-[200px] relative'>
                <div className='absolute top-0 w-full h-full max-[600px]:top-[-700px] max-[600px]:h-[2000px] max-[1000px]:top-[-550px] max-[1000px]:h-[2000px]'>
                    <svg className='w-full h-full' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1688.18 559.718C1657.87 583.674 1619.89 600.433 1579.9 614.285C1542.78 627.146 1503.68 631.953 1464.54 639.118C1441.19 643.39 1414.43 642.35 1390.6 643.538C1354.8 645.323 1319 647.108 1283.19 648.894C1233.08 651.392 1184.23 653.224 1135.04 661.01C1099.81 666.585 1062.5 675.337 1030.15 687.277C997.283 699.412 971.39 717.188 941.9 732.61C928.216 739.766 915.227 750.188 905.155 759.883C899.872 764.968 892.872 769.1 887.793 774.284C882.87 779.308 879.612 786.061 873.72 790.397C861.449 799.426 851.539 812.58 842.399 823.188C833.271 833.783 821.899 843.452 811.992 853.651C791.99 874.243 770.212 893.913 750.611 914.686C741.611 924.224 732.748 933.492 722.589 942.502C709.16 954.413 693.031 964.151 678.561 975.193C667.462 983.663 650.579 990.584 636.835 996.68C622.066 1003.23 608.441 1010.39 592.469 1015.69C575.375 1021.36 557.429 1026.11 539.656 1030.55C524.602 1034.32 508.721 1034.91 493.434 1037.59C465.002 1042.56 440.969 1047.64 417.105 1060.47C406.35 1066.26 394.251 1070.42 383.326 1076.1C370.547 1082.74 361.507 1091.57 349.913 1099.05C328.848 1112.64 311.763 1129.01 289.331 1141.7C269.86 1152.71 247.109 1166.8 223.298 1171.41" stroke="oklch(var(--n))" strokeWidth="1000" strokeLinecap="round" />
                        <path d="M1686.2 561.285C1692.54 560.055 1698.21 551.262 1700.38 547.368C1703.72 541.367 1711.15 538.591 1715.25 533.417C1729.61 515.29 1764.45 513.568 1789.68 509.158C1832.2 501.722 1879.22 495.928 1920.75 505.558C1951.14 512.605 1975.31 522.283 1987.24 544.806C1993.48 556.577 1998.73 570.221 2002.4 582.537C2009.23 605.489 2022.09 627.052 2029.44 649.845C2032.99 660.858 2038.76 671.372 2042.16 682.398C2046.11 695.165 2046.08 708.708 2046.3 721.82C2046.76 748.687 2044.82 775.805 2037.96 802.389C2033.06 821.38 2026.58 840.168 2021.57 859.143C2016.86 876.937 2015.54 894.773 2012.57 912.674C2006.96 946.358 1999.38 979.967 1996.21 1013.78C1992.87 1049.42 1992.23 1084.22 1977.42 1119.01C1961.34 1156.81 1931.61 1189.45 1892.16 1217.44C1858.18 1241.55 1817.64 1260.82 1777.12 1278.7C1726.83 1300.91 1672.72 1318.4 1616.41 1330.5C1535.38 1347.92 1450.47 1354.17 1367.24 1361.52C1271.67 1369.95 1176.14 1378.22 1080.61 1386.98C953.3 1398.66 820.495 1415.38 692.619 1408.61C619.801 1404.76 558.035 1383.98 494.785 1360.74C469.891 1351.6 445.111 1342.44 422.563 1330.59C402.491 1320.03 382.808 1309.69 361.332 1300.54C333.33 1288.6 304.985 1277.29 277.391 1264.85C261.354 1257.62 248.472 1248.8 239.148 1236.83C229.963 1225.04 231.333 1208.61 230.671 1195.34C230.027 1182.42 234.081 1170.09 241.206 1158.78" stroke="oklch(var(--n))" strokeWidth="1000" strokeLinecap="round" />
                        <rect className='w-full h-full' x="-97" y="1269" fill="oklch(var(--n))" />
                    </svg>
                </div>

                <p ref={titleRef} className='scrollYet text-[4rem] w-max mx-auto px-6 rounded-3xl shadow my-20 max-[1000px]:text-white z-10 relative'>Places To Go</p>

                <div className="scrollYet flex mx-auto my-6 overflow-scroll w-[90vw] div-scroll z-2 relative" ref={ref}>
                    <div className='flex mb-12'>
                        <button onClick={scrollClick} className='hover:scale-110 hover:translate-y-[-8px] opacity-75'>
                            <div className='flex items-center h-[50vh]'>
                                <svg className='rotate-90' width="50" height="30" viewBox="0 0 84 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_12_194)">
                                        <path d="M77 4.99993L42 24.6428L7.00001 4.99993" className='stroke-primary max-[1000px]:stroke-white' strokeWidth="5" strokeLinecap="round" />
                                        <path d="M77 18.3571L42 38L7.00001 18.3571" className='stroke-primary max-[1000px]:stroke-white' strokeWidth="5" strokeLinecap="round" />
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
                            </div>
                        </button>

                        <div className='aspect-[4/5] h-[50vh] relative hover:scale-105'>
                            <img src={p1} alt="p1" />
                            <a href='https://maps.app.goo.gl/ctCJgPy3rXxwUFVj8' target='_blank' rel="noreferrer"
                                className='absolute w-full text-center bottom-8 text-[1.8rem] text-white group max-[1000px]:text-[2.2rem] max-[1000px]:mb-2'>Erechtheion
                                <svg className='inline mb-1 w-0 group-hover:w-6 group-hover:ml-2 ' viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.606 4.21191L27.306 0.103328H27.1625C27.0671 0.0937176 26.9709 0.0937176 26.8755 0.103328H26.404H26.1375H25.994L14.35 4.10919L2.70601 0.103328C2.39772 0.00145939 2.06969 -0.0255878 1.74893 0.0244125C1.42817 0.0744128 1.12385 0.200031 0.861007 0.390929C0.596061 0.579957 0.3798 0.829443 0.230088 1.11878C0.0803763 1.40811 0.00151075 1.72899 6.83374e-06 2.0549V30.8149C-0.00110255 31.2456 0.132886 31.6657 0.383033 32.0159C0.63318 32.3661 0.986834 32.6287 1.39401 32.7665L13.694 36.8751C14.107 37.01 14.552 37.01 14.965 36.8751L26.65 32.9719L38.294 36.9778C38.5117 37.0074 38.7323 37.0074 38.95 36.9778C39.3786 36.9838 39.797 36.8465 40.139 36.5875C40.4039 36.3985 40.6202 36.149 40.7699 35.8596C40.9196 35.5703 40.9985 35.2494 41 34.9235V6.16348C41.0011 5.73281 40.8671 5.31268 40.617 4.96248C40.3668 4.61228 40.0132 4.34972 39.606 4.21191ZM12.3 32.0681L4.10001 29.3358V4.91036L12.3 7.64257V32.0681ZM24.6 29.3358L16.4 32.0681V7.64257L24.6 4.91036V29.3358ZM36.9 32.0681L28.7 29.3358V4.91036L36.9 7.64257V32.0681Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className='aspect-[4/5] h-[50vh] relative hover:scale-105'>
                            <img src={p2} alt="p2" />
                            <a href='https://maps.app.goo.gl/ctCJgPy3rXxwUFVj8' target='_blank' rel="noreferrer"
                                className='absolute w-full text-center bottom-8 text-[1.8rem] text-white group  max-[1000px]:text-[2.2rem] max-[1000px]:mb-2'>Temple of Hephaestus
                                <svg className='inline mb-1 w-0 group-hover:w-6 group-hover:ml-2 ' viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.606 4.21191L27.306 0.103328H27.1625C27.0671 0.0937176 26.9709 0.0937176 26.8755 0.103328H26.404H26.1375H25.994L14.35 4.10919L2.70601 0.103328C2.39772 0.00145939 2.06969 -0.0255878 1.74893 0.0244125C1.42817 0.0744128 1.12385 0.200031 0.861007 0.390929C0.596061 0.579957 0.3798 0.829443 0.230088 1.11878C0.0803763 1.40811 0.00151075 1.72899 6.83374e-06 2.0549V30.8149C-0.00110255 31.2456 0.132886 31.6657 0.383033 32.0159C0.63318 32.3661 0.986834 32.6287 1.39401 32.7665L13.694 36.8751C14.107 37.01 14.552 37.01 14.965 36.8751L26.65 32.9719L38.294 36.9778C38.5117 37.0074 38.7323 37.0074 38.95 36.9778C39.3786 36.9838 39.797 36.8465 40.139 36.5875C40.4039 36.3985 40.6202 36.149 40.7699 35.8596C40.9196 35.5703 40.9985 35.2494 41 34.9235V6.16348C41.0011 5.73281 40.8671 5.31268 40.617 4.96248C40.3668 4.61228 40.0132 4.34972 39.606 4.21191ZM12.3 32.0681L4.10001 29.3358V4.91036L12.3 7.64257V32.0681ZM24.6 29.3358L16.4 32.0681V7.64257L24.6 4.91036V29.3358ZM36.9 32.0681L28.7 29.3358V4.91036L36.9 7.64257V32.0681Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className='aspect-[4/5] h-[50vh] relative hover:scale-105'>
                            <img src={p3} alt="p3" />
                            <a href='https://maps.app.goo.gl/ctCJgPy3rXxwUFVj8' target='_blank' rel="noreferrer"
                                className='absolute w-full text-center bottom-8 text-[1.8rem] text-white group  max-[1000px]:text-[2.2rem] max-[1000px]:mb-2'>Sanctuary of Dionysus
                                <svg className='inline mb-1 w-0 group-hover:w-6 group-hover:ml-2 ' viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.606 4.21191L27.306 0.103328H27.1625C27.0671 0.0937176 26.9709 0.0937176 26.8755 0.103328H26.404H26.1375H25.994L14.35 4.10919L2.70601 0.103328C2.39772 0.00145939 2.06969 -0.0255878 1.74893 0.0244125C1.42817 0.0744128 1.12385 0.200031 0.861007 0.390929C0.596061 0.579957 0.3798 0.829443 0.230088 1.11878C0.0803763 1.40811 0.00151075 1.72899 6.83374e-06 2.0549V30.8149C-0.00110255 31.2456 0.132886 31.6657 0.383033 32.0159C0.63318 32.3661 0.986834 32.6287 1.39401 32.7665L13.694 36.8751C14.107 37.01 14.552 37.01 14.965 36.8751L26.65 32.9719L38.294 36.9778C38.5117 37.0074 38.7323 37.0074 38.95 36.9778C39.3786 36.9838 39.797 36.8465 40.139 36.5875C40.4039 36.3985 40.6202 36.149 40.7699 35.8596C40.9196 35.5703 40.9985 35.2494 41 34.9235V6.16348C41.0011 5.73281 40.8671 5.31268 40.617 4.96248C40.3668 4.61228 40.0132 4.34972 39.606 4.21191ZM12.3 32.0681L4.10001 29.3358V4.91036L12.3 7.64257V32.0681ZM24.6 29.3358L16.4 32.0681V7.64257L24.6 4.91036V29.3358ZM36.9 32.0681L28.7 29.3358V4.91036L36.9 7.64257V32.0681Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className='aspect-[4/5] h-[50vh] relative hover:scale-105'>
                            <img src={p4} alt="p4" />
                            <a href='https://maps.app.goo.gl/ctCJgPy3rXxwUFVj8' target='_blank' rel="noreferrer"
                                className='absolute w-full text-center bottom-8 text-[1.8rem] text-white group  max-[1000px]:text-[2.2rem] max-[1000px]:mb-2'>Monastiraki Square
                                <svg className='inline mb-1 w-0 group-hover:w-6 group-hover:ml-2 ' viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.606 4.21191L27.306 0.103328H27.1625C27.0671 0.0937176 26.9709 0.0937176 26.8755 0.103328H26.404H26.1375H25.994L14.35 4.10919L2.70601 0.103328C2.39772 0.00145939 2.06969 -0.0255878 1.74893 0.0244125C1.42817 0.0744128 1.12385 0.200031 0.861007 0.390929C0.596061 0.579957 0.3798 0.829443 0.230088 1.11878C0.0803763 1.40811 0.00151075 1.72899 6.83374e-06 2.0549V30.8149C-0.00110255 31.2456 0.132886 31.6657 0.383033 32.0159C0.63318 32.3661 0.986834 32.6287 1.39401 32.7665L13.694 36.8751C14.107 37.01 14.552 37.01 14.965 36.8751L26.65 32.9719L38.294 36.9778C38.5117 37.0074 38.7323 37.0074 38.95 36.9778C39.3786 36.9838 39.797 36.8465 40.139 36.5875C40.4039 36.3985 40.6202 36.149 40.7699 35.8596C40.9196 35.5703 40.9985 35.2494 41 34.9235V6.16348C41.0011 5.73281 40.8671 5.31268 40.617 4.96248C40.3668 4.61228 40.0132 4.34972 39.606 4.21191ZM12.3 32.0681L4.10001 29.3358V4.91036L12.3 7.64257V32.0681ZM24.6 29.3358L16.4 32.0681V7.64257L24.6 4.91036V29.3358ZM36.9 32.0681L28.7 29.3358V4.91036L36.9 7.64257V32.0681Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className='aspect-[4/5] h-[50vh] relative hover:scale-105'>
                            <img src={p5} alt="p5" />
                            <a href='https://maps.app.goo.gl/ctCJgPy3rXxwUFVj8' target='_blank' rel="noreferrer"
                                className='absolute w-full text-center bottom-8 text-[1.8rem] text-white group  max-[1000px]:text-[2.2rem] max-[1000px]:mb-2'>Lycabettus Hill
                                <svg className='inline mb-1 w-0 group-hover:w-6 group-hover:ml-2 ' viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.606 4.21191L27.306 0.103328H27.1625C27.0671 0.0937176 26.9709 0.0937176 26.8755 0.103328H26.404H26.1375H25.994L14.35 4.10919L2.70601 0.103328C2.39772 0.00145939 2.06969 -0.0255878 1.74893 0.0244125C1.42817 0.0744128 1.12385 0.200031 0.861007 0.390929C0.596061 0.579957 0.3798 0.829443 0.230088 1.11878C0.0803763 1.40811 0.00151075 1.72899 6.83374e-06 2.0549V30.8149C-0.00110255 31.2456 0.132886 31.6657 0.383033 32.0159C0.63318 32.3661 0.986834 32.6287 1.39401 32.7665L13.694 36.8751C14.107 37.01 14.552 37.01 14.965 36.8751L26.65 32.9719L38.294 36.9778C38.5117 37.0074 38.7323 37.0074 38.95 36.9778C39.3786 36.9838 39.797 36.8465 40.139 36.5875C40.4039 36.3985 40.6202 36.149 40.7699 35.8596C40.9196 35.5703 40.9985 35.2494 41 34.9235V6.16348C41.0011 5.73281 40.8671 5.31268 40.617 4.96248C40.3668 4.61228 40.0132 4.34972 39.606 4.21191ZM12.3 32.0681L4.10001 29.3358V4.91036L12.3 7.64257V32.0681ZM24.6 29.3358L16.4 32.0681V7.64257L24.6 4.91036V29.3358ZM36.9 32.0681L28.7 29.3358V4.91036L36.9 7.64257V32.0681Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Page3
