import "./globals.css";
import { MainLayout } from "./mainLayout";
import { LangProvider } from "./context/contextLangProvider";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LangProvider>
        <MainLayout>{children}</MainLayout>
      </LangProvider>
    </>
  );
}
