"use client";

import "./globals.css";
import { useLang } from "./context/contextLangProvider";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { lang } = useLang();

  return (
    <html lang={lang}>
      <body className="p-8">{children}</body>
    </html>
  );
}
