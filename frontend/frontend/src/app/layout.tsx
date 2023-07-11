import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { LoadingPageWrapper } from "@/utils/LoadingPageWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Template",
  description: "Template - Lautaro Barba",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <LoadingPageWrapper>{children}</LoadingPageWrapper>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
