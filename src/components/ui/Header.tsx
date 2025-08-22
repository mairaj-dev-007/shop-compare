import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-blue-600 flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
        <Image 
          src="/logo.png" 
          alt="Northwell Health" 
          width={32}
          height={32}
          className="h-8 w-auto" 
        />
      </div>
    </header>
  );
}
