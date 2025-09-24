import { Sora } from "next/font/google";


const soraFont = Sora({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
  variable: "--font-sora"
});

import Navbar from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'
import { children } from "react";


const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${soraFont.variable} font-sora relative`}>
      <Navbar />
      <Header />
      <TopLeftImg />
      {children}   {/* ✅ Proper children rendering */}
    </div>
  );
};

export default Layout;
