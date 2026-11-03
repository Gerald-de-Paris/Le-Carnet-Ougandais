import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Le Carnet Ougandais — Learning Studio",description:"Practise French through real situations, clear feedback and speaking missions."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
