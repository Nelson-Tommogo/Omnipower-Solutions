"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface TabItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface TabBarProps {
  tabs: TabItem[];
  className?: string;
}

export default function TabBar({ tabs, className = "" }: TabBarProps) {
  const pathname = usePathname();

  return (
    <div className={`bg-white rounded-2xl shadow-sm overflow-hidden ${className}`}>
      <div className="flex items-center gap-1.5 p-1.5 bg-emerald-50/80 rounded-xl m-1">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href || pathname.startsWith(`${tab.href}/`);
          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`
                flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200/60"
                    : "text-emerald-700 hover:text-emerald-900 hover:bg-emerald-100/60"
                }
              `}
            >
              {tab.icon && <span className="text-base">{tab.icon}</span>}
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}