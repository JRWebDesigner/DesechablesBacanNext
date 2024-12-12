"use client"
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
export default function Layout({ children }) {
	return (
		<>
		<div className="max-w-screen-2xl mx-auto mt-20">
			<nav className="w-[80%] md:w-[50%] mx-auto">
				<div className="border-2 before:border-black text-xl rounded-lg">
				<Accordion>
					<AccordionItem key="1" aria-label="Accordion 1" title="Buscar por Marcas">
						<nav>
							<ul className="gap-4 overflow-y-scroll h-[170px] p-3">
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/">Todos</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"  ><Link className="block" href="/Productos/Advan">Advan</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/Belen">Belen</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/Darnel">Darnel</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/DelSur">Del Sur</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/Docplast">Docplast</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/FiveStick">Five Stick</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/Feiteng">Feiteng</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/Isoplast">Isoplast</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/PastenPlast">Pasten Plast</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/SanJorge">San Jorge</Link></li>
								
							</ul>
						</nav>
					</AccordionItem>
				</Accordion>
				</div>
			</nav>
				{children}
		</div>
		</>
	)
}