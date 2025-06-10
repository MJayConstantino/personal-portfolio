import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationBar } from "@/components/NavigationBar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Portfolio",
  description: "A showcase of my work and skills as a web developer",
  keywords: [
    "web development",
    "portfolio",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Michael Constantino",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <NavigationBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
