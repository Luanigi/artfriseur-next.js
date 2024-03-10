import type { Metadata } from "next";
import { Kaushan_Script } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import { ThemeProvider } from "./theme-provider";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: "500" 
});

const kaushan_Script = Kaushan_Script({
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Artfriseur",
  description: "Friseur laden in Gelsenkirchen!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="!scroll-smooth">
      <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
        rel="stylesheet"
      />
    </Head>
      <body className={`${poppins.className} bg-neutral-100 dark:bg-[#000] h-[100dvh]`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
