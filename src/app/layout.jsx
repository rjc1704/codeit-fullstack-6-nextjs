import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "고양이 정보 사이트",
  description: "다양한 고양이 품종에 대한 정보를 제공하는 웹사이트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
