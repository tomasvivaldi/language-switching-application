import { Metadata } from "next";

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
  return children;
}
