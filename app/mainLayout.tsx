"use client";

import "./globals.css";
import { useLang } from "./context/contextLangProvider";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { lang } = useLang();

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
