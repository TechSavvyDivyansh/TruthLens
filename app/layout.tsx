import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SideNav from "@/components/SideNav";
import Navbar from "@/components/Navbar";

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"] ,
  weight: ['300','400','500','600','700'],
  variable: '--font-sans'   
});

export const metadata: Metadata = {
  title: "Truth Lens",
  description: "Detect,Verify,Trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      </head>
      <body className={cn('min-h-screen bg-light-200 text-dark-400 font-sans antialiased',fontSans.variable)}>
          <ThemeProvider
                attribute="class"
                defaultTheme="dark"
              >
                <div className="w-full flex">
                  <SideNav/>
                  <div className="w-full flex flex-col">
                    <Navbar/>
                    {children}
                  </div>
                </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
