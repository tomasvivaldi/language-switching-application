"use client";

import { useLang } from "../context/contextLangProvider";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div>
      <label htmlFor="language-select">Choose a language:</label>
      <select
        id="language-select"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="ml-2 border-[0.5px] rounded-md p-1 bg-slate-700"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="jp">日本語</option>
      </select>
    </div>
  );
}
