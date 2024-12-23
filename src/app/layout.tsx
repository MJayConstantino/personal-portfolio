import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationBar } from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Portfolio",
  description: "A showcase of my work and skills as a web developer",
  keywords: ["web development", "portfolio", "React", "Next.js", "JavaScript"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
