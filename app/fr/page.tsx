import LanguageSwitcher from "../components/LanguageSwitcher";

export default function FrHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="z-10 w-full max-w-5xl items-start justify-start font-mono text-sm flex flex-col gap-4">
        <LanguageSwitcher />
        <h1 className="text-4xl">Bienvenue à la version française !</h1>
      </div>
    </main>
  );
}
