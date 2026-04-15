import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quizzies | The Pro Quiz App",
  description: "Level up your knowledge with modern quizzes.",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground">
        {/* Background Mesh Gradients */}
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-secondary/10 blur-[120px]" />
        </div>
        
        <Navbar />
        
        <main className="flex-1 pt-24 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}
