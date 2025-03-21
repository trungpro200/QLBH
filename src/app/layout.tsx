import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import { SidebarProvider } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VChess",
  description: "Welcome to VChess",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-[100vh] w-[100vw] overflow-hidden">
      <body
        className={
          inter.className +
          " bg-[url(/mainbg.avif)] bg-no-repeat bg-cover bg-center bg-transparent bg-opacity-20"
        }
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            <NavBar></NavBar>
            <main className="h-screen">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
