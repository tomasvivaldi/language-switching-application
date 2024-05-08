import LanguageSwitcher from "../components/LanguageSwitcher";

export default function JpHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="z-10 w-full max-w-5xl items-start justify-start font-mono text-sm flex flex-col gap-4">
        <LanguageSwitcher />
        <h1 className="writing-mode-vertical-rl text-orientation-upright text-4xl w-full  flex-row-reverse">
          日本語版へようこそ！
        </h1>
      </div>
    </main>
  );
}
