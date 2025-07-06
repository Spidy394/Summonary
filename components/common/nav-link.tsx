"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = (href !== "/" && (pathname === href || pathname.startsWith(href)));
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors text-sm duration-100 hover:text-primary",
        className,
        isActive && "text-primary"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
