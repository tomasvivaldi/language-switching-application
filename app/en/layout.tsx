import { Metadata } from "next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { MainLayout } from "../mainLayout";

export const metadata: Metadata = {
  title: "Language Switch App",
  description: "Test website for language change",
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainLayout>
      <LanguageSwitcher />
      {children}
    </MainLayout>
  );
}
