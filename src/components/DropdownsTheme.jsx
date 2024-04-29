import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";


export default function Dropdowns({ animationOrder }) {

    const [theme, setTheme] = useState('autumn'); // 初始主題設為 'winter'

    useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);


    const ThemeRef = useRef(null);
    useGSAP(() => {
        if (animationOrder === 3) { gsap.timeline().to(ThemeRef.current, { opacity: 1, translateY: 0, duration: .3 }) }
    }, [animationOrder])




    return (
        <Menu ref={ThemeRef} as="div" className="relative inline-block text-left opacity-0 translate-y-[10px]">
            <div>
                <Menu.Button className="btn btn-primary shadow font-semibold text-[1.2rem]">
                    Theme
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-6 w-32 max-[1000px]:w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 flex flex-col gap-3 items-start">
                        <Menu.Item>
                            <button className='text-[1.2rem] w-full mx-2 max-[1000px]:text-[2rem] max-[1000px]:p-2' onClick={() => setTheme('autumn')}>Autumn</button>
                        </Menu.Item>
                        <Menu.Item>
                            <button className='text-[1.2rem] w-full mx-2 max-[1000px]:text-[2rem] max-[1000px]:p-2' onClick={() => setTheme('nord')}>Nord</button>
                        </Menu.Item>
                        <Menu.Item>
                            <button className='text-[1.2rem] w-full mx-2 max-[1000px]:text-[2rem] max-[1000px]:p-2' onClick={() => setTheme('dark')}>Dark</button>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
