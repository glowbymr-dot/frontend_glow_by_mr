import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React, { Dispatch, SetStateAction, useState } from "react";
import { navItems } from "../helpers/data/navItems";
import { Heart, Menu, ShoppingBag } from "lucide-react";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SheetComponent = ({ isOpen, setIsOpen }: Props) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu className="h-5 w-5" style={{ color: "#664C3A" }} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-72 sm:w-96"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="flex flex-col space-y-6 mt-8 px-5">
          <div
            className="flex items-center space-x-3 pb-6 border-b"
            style={{ borderBottomColor: "#C29678" }}
          >
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
          </div>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 transition-colors hover:text-[#B17953]"
              style={{ color: "#664C3A" }}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" style={{ color: "#A0714C" }} />
              <span className="text-base font-medium">{item.name}</span>
            </a>
          ))}

          <div className="pt-6 border-t" style={{ borderTopColor: "#C29678" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5" style={{ color: "#A0714C" }} />
                <span
                  className="text-base font-medium"
                  style={{ color: "#664C3A" }}
                >
                  Favoritos
                </span>
              </div>
              <span className="text-sm" style={{ color: "#9E9C99" }}>
                0 items
              </span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="h-5 w-5" style={{ color: "#A0714C" }} />
                <span
                  className="text-base font-medium"
                  style={{ color: "#664C3A" }}
                >
                  Carrito
                </span>
              </div>
              <span className="text-sm" style={{ color: "#9E9C99" }}>
                0 items
              </span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetComponent;
