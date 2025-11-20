// app/layout.tsx or layout.js
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // choose what you need
    variable: "--font-poppins",
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className={`${poppins.variable} font-sans`}>
            {children}
        </main>
    );
}
