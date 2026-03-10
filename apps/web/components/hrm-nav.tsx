"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const navItems = [
  { href: "/hrm", label: "Overview" },
  { href: "/hrm/people", label: "People Ops" },
  { href: "/hrm/recruiting", label: "Recruiting" },
  { href: "/hrm/payroll", label: "Payroll" },
  { href: "/hrm/data-table", label: "Data Table" },
]

export function HrmNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap items-center gap-2">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/hrm" && pathname.startsWith(item.href))

        return (
          <Button
            key={item.href}
            asChild
            size="sm"
            variant={isActive ? "default" : "ghost"}
            className={cn(
              "rounded-full px-4",
              isActive && "shadow-[0_8px_30px_-14px_var(--primary)]"
            )}
          >
            <Link href={item.href} aria-current={isActive ? "page" : undefined}>
              {item.label}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}
