import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { RiMastercardLine, RiVisaLine, RiGoogleLine, RiAppleLine } from 'react-icons/ri'
import {FaApplePay, FaGooglePay} from 'react-icons/fa'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className=" dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
            <div className="flex flex-col items-center text-center">
                <a href="#">
                    <Image width={600} height={600} className="w-auto h-7" src="/images/landing/temp-logo.png" alt="" />
                </a>

                <div className="flex flex-wrap justify-center mt-6 -mx-4">
                    <Link href="#" className="mx-4 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100" aria-label="Reddit"> Home </Link>
                    
                    <Link href="#" className="mx-4 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100" aria-label="Reddit"> Services </Link>
                    
                    <Link href="#" className="mx-4 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100" aria-label="Reddit"> Team </Link>
                    <Link href="#" className="mx-4 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100" aria-label="Reddit"> FAQ </Link>
                    <Link href="#" className="mx-4 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100" aria-label="Reddit"> Contact Us </Link>

                    <Link href="#" className="mx-4 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100" aria-label="Reddit"> Privacy </Link>

                    <Link href="#" className="mx-4 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100" aria-label="Reddit"> Cookies </Link>
                </div>

            </div>

            <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

                <div className="flex justify-center items-center gap-3 text-muted-foreground">
                    <p className='flex items-center text-xs'><FaApplePay size={22} /></p>
                    <p className='flex items-center text-xs'><RiVisaLine size={20} /></p>
                    <p className='flex items-center text-xs'><RiMastercardLine size={20} /></p>
                    <p className='flex items-center text-xs'><FaGooglePay size={22} /></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer