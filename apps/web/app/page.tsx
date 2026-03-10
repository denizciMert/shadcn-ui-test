import Link from "next/link"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function Page() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-gradient-to-b from-slate-100 via-white to-cyan-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 right-8 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/20" />
        <div className="absolute left-8 top-40 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/20" />
      </div>

      <div className="relative mx-auto flex min-h-svh w-full max-w-[1320px] flex-col px-4 py-8 sm:px-6 lg:px-10">
        <div className="mb-6">
          <Badge className="bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
            HRM Demo Launcher
          </Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Modern, full-screen test pages for your HRM application
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">
            Built with your existing shadcn/ui components and a clean visual system
            focused on high-signal statuses, decision-grade metrics, and realistic
            operational tables.
          </p>
        </div>

        <div className="grid flex-1 gap-4 lg:grid-cols-2 xl:grid-cols-5">
          <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
            <CardHeader>
              <CardTitle>Executive Overview</CardTitle>
              <CardDescription>
                KPI dashboard, risk watchlist, and operational health tabs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full rounded-full">
                <Link href="/hrm">Open Overview</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
            <CardHeader>
              <CardTitle>People Operations</CardTitle>
              <CardDescription>
                Department mix, onboarding quality, and employee status table.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full rounded-full">
                <Link href="/hrm/people">Open People Ops</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
            <CardHeader>
              <CardTitle>Recruiting</CardTitle>
              <CardDescription>
                Funnel metrics, live pipeline board, and requisition SLA table.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full rounded-full">
                <Link href="/hrm/recruiting">Open Recruiting</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
            <CardHeader>
              <CardTitle>Payroll</CardTitle>
              <CardDescription>
                Payroll readiness, exception queue, and compliance action notes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full rounded-full">
                <Link href="/hrm/payroll">Open Payroll</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
            <CardHeader>
              <CardTitle>Advanced Data Table</CardTitle>
              <CardDescription>
                Checkbox selection, search, filtering, sorting, column control,
                pagination and operations tab.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full rounded-full">
                <Link href="/hrm/data-table">Open Data Table</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 rounded-2xl border border-white/80 bg-white/80 p-4 text-sm text-muted-foreground shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] dark:border-white/10 dark:bg-zinc-900/80">
          Tip: press <kbd>d</kbd> to toggle light/dark mode.
        </div>
      </div>
    </div>
  )
}
