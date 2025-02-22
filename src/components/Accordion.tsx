'use client';
import {Accordion, AccordionItem} from "@heroui/accordion";
import Link from "next/link";
import { SanityDocument } from "next-sanity";

interface AccordionNavProps {
  category: SanityDocument[];
}

export default function AccordionNav({ category }: AccordionNavProps) {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Buscar por Tipos">
        <nav>
          <ul className="gap-4 overflow-y-scroll h-[170px] p-3">
            <li className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white">
              <Link className="block" href="/Productos">Todos los Productos</Link>
            </li>
            {category.length > 0 ? (
              category.map((c) => (
                <li key={c._id} className="border-2 border-b-gray-200 hover:bg-blue-600 hover:text-white focus:bg-blue-600 before:text-white my-2 uppercase">
                  <Link className="block" href={`/Productos/${c.slug}`}>{c.name}</Link>
                </li>
              ))
            ) : (
              <li className="text-center">No hay categorias disponibles</li>
            )}
          </ul>
        </nav>
      </AccordionItem>
    </Accordion>
  );
}