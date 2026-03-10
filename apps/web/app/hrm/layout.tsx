import type { ReactNode } from "react"
import Link from "next/link"

import { HrmNav } from "@/components/hrm-nav"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

export default function HrmLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-svh overflow-hidden bg-gradient-to-b from-zinc-100 via-slate-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-12 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/20" />
        <div className="absolute right-0 top-20 h-[28rem] w-[28rem] rounded-full bg-emerald-400/15 blur-3xl dark:bg-emerald-500/20" />
      </div>

      <div className="relative mx-auto flex min-h-svh w-full max-w-[1480px] flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-6 rounded-3xl border border-white/70 bg-white/70 px-4 py-4 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70 sm:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                  HR Control Center
                </Badge>
                <Badge
                  variant="outline"
                  className="border-cyan-500/30 text-cyan-700 dark:text-cyan-300"
                >
                  FY26 Q1
                </Badge>
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  Human Resource Management Test Pages
                </h1>
                <p className="text-sm text-muted-foreground">
                  Comprehensive shadcn/ui demo surfaces with realistic operational
                  data and status-first color semantics.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <HrmNav />
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link href="/">Back Home</Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 pb-8">{children}</main>
      </div>
    </div>
  )
}
