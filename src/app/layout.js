import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
// import {Outfit} from "next/font/google";

// const {outfit} = Outfit({subsets: ['latin']})

export const metadata = {
  title: "CYPARTA Task",
  description: "Frontend Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Sidebar className="w-[25%]"/>
        <div className="container w-[60%] mx-auto flex justify-center flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
