// import { Open_Sans } from "next/font/google";
import "@/styles/styles.sass";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// const openSans = Open_Sans({
//   subsets: ["latin"],
//   variable: "--font-open_sans",
// });

export const metadata = {
  title: "Blog Site",
  description: "A simple blog site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body > {/*className={`${openSans.className} ${openSans.variable}`*/}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
