
import { CarritoProvider } from "../context/CarritoContext";
import localFont from "next/font/local";
import Header from '../components/Header'
import "./globals.css";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Desechables Bacan",
  description: "¿Necesitas desechables de calidad para tu restaurante o fiesta? En Desechables Bacán tenemos todo lo que buscas al mejor precio. 📦 Despachos a todo el país. ¡Cotiza hoy mismo",
};

export default function RootLayout({ children }) {
  return (
    <CarritoProvider>
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
    </CarritoProvider>
  );
}
