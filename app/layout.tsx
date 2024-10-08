import type { Metadata } from "next";
import "./globals.css";
import { Inter } from '@next/font/google'; // Updated import
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] }); // Ensure this is used in the layout

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        layout: {
          logoImageUrl:'/icons/yoom-logo.svg'
        },
        variables: {
          colorText: '#fff',
          colorPrimary: '#0e78f9',
          colorBackground: '#1c1f2e',
          colorInputBackground: '#252a41',
          colorInputText: '#fff'
        }
      }}>
        <body className={`${inter.className} bg-dark-2`}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}