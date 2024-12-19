"use client"
import Link from "next/link";
import { useState } from "react";


export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navMobileControl = () => {
        setIsNavOpen(!isNavOpen);
    };

    const activeStyles = isNavOpen ? '' : 'hidden';

    return (
        <>
            <header className="bg-black mx-auto">
                <nav className="border-gray-200 bg-black dark:border-gray-700 mx-auto">
                    <div className="max-w-screen-lg grid grid-cols-[2fr_5fr] md:flex flex-wrap items-center md:justify-around mx-auto p-4">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="/logo.png" className="h-28 md:h-36" alt="Flowbite Logo" />
                        </Link>
                        <div className="flex justify-end gap-6">
                        <Link href='/Carrito'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#fff" className=" md:hidden icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" /></svg>
                        </Link>
                        <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false" onClick={navMobileControl}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        </div>
                        <div className={`${activeStyles} w-full md:block md:w-auto`} id="navbar-multi-level">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:border-gray-700">
                                <li>
                                    <Link href="/" className="block py-2 px-3 text-white bg-transparent rounded md:bg-transparent md:p-0 md:dark:bg-transparent dark:hover:bg-gray-700" aria-current="page">
                                    Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/Productos" className="block py-2 px-3 text-white bg-transparent rounded md:bg-transparent md:p-0 md:dark:bg-transparent dark:hover:bg-gray-700">Productos</Link>
                                </li>
                                <li className="block py-2 px-3 text-white bg-transparent rounded md:bg-transparent md:p-0 md:dark:bg-transparent dark:hover:bg-gray-700">
                                    <Link href="/Carrito">Mi Carrito</Link>
                                </li>
                                <li>
                                    <Link href="/Contactos" className="block py-2 px-3 text-white bg-transparent rounded md:bg-transparent md:p-0 md:dark:bg-transparent dark:hover:bg-gray-700">Contactos</Link>
                                </li>
                                <li>
                                    <Link href="/studio" className="block py-2 px-3 text-white bg-transparent rounded md:bg-transparent md:p-0 md:dark:bg-transparent dark:hover:bg-gray-700">Inicio Sesión</Link>
                                </li>
                            </ul>
                        </div>
                        <Link href='/Carrito'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="rgb(29 78 216)" className="hidden md:inline icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" /></svg>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}