import { Metadata } from "next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { MainLayout } from "../mainLayout";

export const metadata: Metadata = {
  title: "言語変更アップ - 日本語",
  description: "言語変更テストウェッブサイト",
};

export default function JapaneseLayout({
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
