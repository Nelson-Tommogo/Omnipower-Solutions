"use client";

import Link from "next/link";
import { MdAgriculture, MdEgg, MdLocalFlorist, MdGroups } from "react-icons/md";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Vegetables",
    href: "/products/vegetables",
    icon: MdLocalFlorist,
  },
  {
    name: "Poultry",
    href: "/products/poultry",
    icon: MdEgg,
  },
  {
    name: "Agronomy",
    href: "/agronomy",
    icon: MdAgriculture,
  },
  {
    name: "Community",
    href: "/community",
    icon: MdGroups,
  },
];

export default function MobileHomeBottomNav() {
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/reset";

  if (isAuthPage) return null;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-6 md:hidden">
      <nav className="relative w-full max-w-sm rounded-2xl border border-white/20 bg-white/90 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.15)] backdrop-blur-xl">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent opacity-50 pointer-events-none" />
        
        <div className="relative grid h-[72px] grid-cols-4">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="group relative flex flex-col items-center justify-center gap-0.5"
              >
                {active && (
                  <div className="absolute inset-x-3 inset-y-1.5 rounded-xl bg-emerald-50/80 shadow-[0_2px_8px_-4px_rgba(16,185,129,0.2)]" />
                )}

                <Icon
                  className={`
                    h-[22px] w-[22px] relative z-10 transition-all duration-200
                    ${active
                      ? "text-emerald-600"
                      : "text-gray-400 group-hover:text-gray-600"
                    }
                  `}
                />

                <span 
                  className={`
                    relative z-10 text-[11px] font-medium tracking-wide
                    transition-colors duration-200
                    ${active 
                      ? "text-emerald-700" 
                      : "text-gray-400 group-hover:text-gray-500"
                    }
                  `}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}