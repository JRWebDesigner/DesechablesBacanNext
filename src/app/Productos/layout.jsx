
import Marks from "@/components/MarksExtrac"
import AccordionNav from "../../components/Accordion"
export const metadata = {
	title: "Desechables Bacan - Productos",
	description: "",
  };
export default function Layout({ children }) {
	return (
		<>
		<div className="max-w-screen-2xl mx-auto mt-20">
			<nav className="w-[80%] md:w-[50%] mx-auto">
				<div className="border-2 before:border-black text-xl rounded-lg">
					<Marks />
				</div>
			</nav>
			{children}
		</div>
		</>
	)
}