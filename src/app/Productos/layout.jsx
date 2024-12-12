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
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"  ><Link className="block" href="/Productos/advan">Advan</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/belen">Belen</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/darnel">Darnel</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/delSur">Del Sur</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/docplast">Docplast</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/fiveStick">Five Stick</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/feiteng">Feiteng</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/isoplast">Isoplast</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/pastenPlast">Pasten Plast</Link></li>
								<li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white"><Link className="block" href="/Productos/sanJorge">San Jorge</Link></li>
								
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