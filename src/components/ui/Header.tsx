export default function Header() {
  return (
    <header className="w-full bg-blue-600 flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Northwell Health" className="h-8 w-auto" />
      </div>
    </header>
  );
}
