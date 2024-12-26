'use client';
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import { SanityDocument } from "next-sanity";

interface AccordionNavProps {
  marcas: SanityDocument[];
}

export default function AccordionNav({ marcas }: AccordionNavProps) {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Buscar por Marcas">
        <nav>
          <ul className="gap-4 overflow-y-scroll h-[170px] p-3">
            <li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white">
              <Link className="block" href="/Productos">Todos los Productos</Link>
            </li>
            {marcas.length > 0 ? (
              marcas.map((marca) => (
                <li key={marca._id} className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white">
                  <Link className="block" href={`/Productos/${marca.name}`}>{marca.name}</Link>
                </li>
              ))
            ) : (
              <li className="text-center">No hay marcas disponibles</li>
            )}
          </ul>
        </nav>
      </AccordionItem>
    </Accordion>
  );
}