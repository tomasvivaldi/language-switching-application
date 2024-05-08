import { Metadata } from "next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { MainLayout } from "../mainLayout";

export const metadata: Metadata = {
  title: "Title oiu oiu ",
  description: "Teste au revoir",
};

export default function FrenchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { lang } = useLang();
  return (
    <MainLayout>
      <LanguageSwitcher />
      {children}
    </MainLayout>
  );
}
