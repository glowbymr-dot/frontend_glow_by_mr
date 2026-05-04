import Link from "next/link";
import { useState } from "react";
import { navItems } from "../helpers/data/navItems";
import Image from "next/image";
import SheetComponent from "./SheetComponent";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b backdrop-blur supports-backdrop-filter:bg-background/60"
      style={{ backgroundColor: "#FFFFFF", borderBottomColor: "#C29678" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            {!imgError ? (
              <Image
                alt="logo_mr"
                src="/images/logo_mr.png"
                width={40}
                height={40}
                className="h-6 w-6 md:h-12 md:w-12"
                onError={() => setImgError(true)}
                priority
              />
            ) : (
              <div
                className="h-6 w-6 md:h-12 md:w-12 rounded-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #A0714C, #B17953)",
                }}
              ></div>
            )}
            <h1
              className="text-base md:text-xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #A0714C, #B17953)",
                WebkitBackgroundClip: "text",
              }}
            >
              Glow By MR
            </h1>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${path === item.href ? "underline" : ""} text-sm font-medium transition-colors hover:text-[#B17953]`}
                style={{ color: "#664C3A" }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-2"></div>

          <div className="flex items-center space-x-2 md:hidden">
            <SheetComponent isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
