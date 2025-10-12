import type { Metadata } from "next";
import SessionProvider from "./context/SessionContext"
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";


export const metadata: Metadata = {
  title: "OTP",
  description: "Trang web tuyển dụng việc làm IT tại Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full">
      <body>
        <SessionProvider>
          <div className="flex flex-col min-h-screen h-full">
            <Header />

            <main className="flex-grow">
              {children}
            </main>

            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
