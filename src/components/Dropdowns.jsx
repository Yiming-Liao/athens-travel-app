import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useRef } from 'react';
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";


export default function Dropdowns({ animationOrder }) {

    const DropdownsRef = useRef(null);
    useGSAP(() => {
        if (animationOrder === 2) { gsap.timeline().to(DropdownsRef.current, { opacity: 1, translateY: 0, duration: .3 }, '>1') }
    }, [animationOrder])

    return (
        <Menu as="div" className="relative inline-block text-left opacity-0 translate-y-[10px]" ref={DropdownsRef}>
            <div>
                <Menu.Button className="mr-3 outline-none">
                    <svg className='opacity-50' width="34" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7681 44.5129C23.8598 44.5129 24.7449 43.6277 24.7449 42.5361C24.7449 41.4445 23.8598 40.5593 22.7681 40.5593C21.6763 40.5593 20.7913 41.4445 20.7913 42.5361C20.7913 43.6277 21.6763 44.5129 22.7681 44.5129Z" fill="oklch(var(--n))" stroke="oklch(var(--n))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M42.5361 44.5129C43.6277 44.5129 44.5129 43.6277 44.5129 42.5361C44.5129 41.4445 43.6277 40.5593 42.5361 40.5593C41.4445 40.5593 40.5593 41.4445 40.5593 42.5361C40.5593 43.6277 41.4445 44.5129 42.5361 44.5129Z" fill="oklch(var(--n))" stroke="oklch(var(--n))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M62.3042 44.5129C63.3958 44.5129 64.281 43.6277 64.281 42.5361C64.281 41.4445 63.3958 40.5593 62.3042 40.5593C61.2126 40.5593 60.3274 41.4445 60.3274 42.5361C60.3274 43.6277 61.2126 44.5129 62.3042 44.5129Z" fill="oklch(var(--n))" stroke="oklch(var(--n))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M42.5361 82.0722C64.3711 82.0722 82.0722 64.3711 82.0722 42.5361C82.0722 20.7009 64.3711 3 42.5361 3C20.7009 3 3 20.7009 3 42.5361C3 64.3711 20.7009 82.0722 42.5361 82.0722Z" stroke="oklch(var(--n))" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
                <Menu.Items className="absolute right-[-16px] z-10 mt-6 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 flex flex-col gap-3 items-center">
                        <Menu.Item>
                            <a href="#page2" className='text-[2rem]'>About Athens</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="#page3" className='text-[2rem]'>Places To Go</a>
                        </Menu.Item><Menu.Item>
                            <a href="#page4" className='text-[2rem]'>Informations</a>
                        </Menu.Item><Menu.Item>
                            <a href="#page5" className='text-[2rem]'>Links</a>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
