import type { Metadata } from "next";
import SessionProvider from "./context/SessionContext"
import "./globals.css";
import { Header } from "./components/Header/Header";


export const metadata: Metadata = {
  title: "Dự án 3",
  description: "Trang web tuyển dụng việc làm IT tại Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
