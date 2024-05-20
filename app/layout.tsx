import { Montserrat } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "AICLON Assistant",
  description: "Una IA para crear tu propia IA",
  icons: {
    icon: "./aiclon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/aiclon.svg" alt="AICLON Logo" />
      </body>
    </html>
  );
}
