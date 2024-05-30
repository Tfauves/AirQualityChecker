import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "air now api",
  description: "a tfauves joint",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
        </div>
      </body>
    </html>
  );
}
