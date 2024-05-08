import "./globals.css";
import { MainLayout } from "./mainLayout";
import { LangProvider } from "./context/contextLangProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LangProvider>{children}</LangProvider>
    </>
  );
}
