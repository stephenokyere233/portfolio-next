import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'
import { CONTACTS } from '@/constants/contact'

const Footer = () => {
    return (
        <footer className='pt-6 lg:px-10 text-xl'>
            <section className="mx-auto grid h-full min-h-[200px]  justify-between gap-6 px-4 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-0">
                <section className={"flex lg:items-center flex-col"}>
                    <div className="flex-1">
                        <div className="w-[150px] mb-4">
                            <Logo />
                        </div>
                        <p className="my-4">We plan and style your events on your call</p>
                        <div className="flex gap-6 pb-4">
                            {
                                CONTACTS.map((contact,index)=>{
                                    return(
                                        <Link key={index} href={contact.link}>
                                            <contact.icon size={28}/>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    <p className="mt-4">stephenokyere621@gmail.com</p>
                    </div>
                </section>
                <section className="flex flex-col">
                    <div className="lg:mx-auto lg:w-[200px]">
                        <h3 className="text-xl font-medium uppercase tracking-wider gradient-text">
                            Quick links
                        </h3>
                        <div className="mt-4 flex flex-col gap-3 capitalize">
                            <Link href="#about">About</Link>
                            <Link href="#services">Services</Link>
                            <Link href="#gallery">Projects</Link>
                        </div>
                    </div>
                </section>
                <section className="flex lg:items-center flex-col">
                    <div className="lg:mx-auto lg:w-[200px]">
                        <h3 className="text-xl font-medium uppercase tracking-wider gradient-text">
                            important links
                        </h3>
                        <div className="mt-4 flex flex-col gap-3 capitalize">
                            <Link href="#about">Contact</Link>
                            <Link href="#">privacy policy</Link>
                            <Link href="#">terms & conditions</Link>
                        </div>
                    </div>
                </section>
            </section>
            <div className="sm:text-md mx-auto mt-10  flex h-20 items-center justify-between border-t text-sm md:text-lg lg:text-xl">
                <span>
                    Copyright © 2023 | <span className="gradient-text">My PortFolio</span>
                </span>
                <span>
                    Designed By{" "}
                    <Link href="https://twitter.com/dev__steve" className="gradient-text">
                        dev_steve
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer
