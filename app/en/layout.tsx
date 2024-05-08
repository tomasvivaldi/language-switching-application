import { Metadata } from "next";

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
  return <MainLayout>{children}</MainLayout>;
}
