import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert"
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const runChecks = [
  {
    label: "Timesheet lock",
    owner: "Regional Managers",
    status: "Complete",
    note: "All regions closed before cutoff.",
  },
  {
    label: "Bonus file validation",
    owner: "Compensation Team",
    status: "In Progress",
    note: "3 records require correction.",
  },
  {
    label: "Tax and statutory sync",
    owner: "Payroll Ops",
    status: "Complete",
    note: "No data anomalies detected.",
  },
  {
    label: "Bank transfer bundle",
    owner: "Treasury",
    status: "Blocked",
    note: "Awaiting exception approval list.",
  },
]

const exceptions = [
  {
    employee: "A. Demir",
    category: "Shift differential",
    amount: "$128.00",
    issue: "Late approval",
    action: "Manager confirmation pending",
    severity: "Medium",
  },
  {
    employee: "D. Kim",
    category: "Contractor rate mismatch",
    amount: "$412.50",
    issue: "Rate card not synced",
    action: "Vendor update in review",
    severity: "High",
  },
  {
    employee: "M. Rossi",
    category: "Expense reimbursement",
    amount: "$89.00",
    issue: "Missing receipt metadata",
    action: "Employee re-submitted",
    severity: "Low",
  },
  {
    employee: "Z. Acar",
    category: "Overtime override",
    amount: "$236.00",
    issue: "Policy exception required",
    action: "People Ops approval open",
    severity: "High",
  },
]

const statusStyle: Record<string, string> = {
  Complete:
    "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  "In Progress":
    "bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
  Blocked: "bg-red-500/15 text-red-700 dark:bg-red-500/20 dark:text-red-300",
}

const severityStyle: Record<string, string> = {
  Low: "bg-zinc-500/10 text-zinc-700 dark:bg-zinc-500/20 dark:text-zinc-300",
  Medium:
    "bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  High: "bg-red-500/10 text-red-700 dark:bg-red-500/20 dark:text-red-300",
}

export default function PayrollPage() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 xl:grid-cols-[1.45fr_1fr]">
        <Card className="rounded-3xl border-white/80 bg-gradient-to-br from-violet-900 via-slate-900 to-cyan-900 text-white dark:border-white/10">
          <CardHeader>
            <Badge className="w-fit bg-white/15 text-white">Payroll Command</Badge>
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Payroll run is 92% ready with four active exceptions.
            </CardTitle>
            <CardDescription className="text-slate-200/90">
              Current cycle lock date is Mar 22, 2026. Primary risk is delayed
              approval of contractor and overtime adjustments in two business
              units.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs text-slate-300">Gross payroll</p>
              <p className="mt-1 text-2xl font-semibold">$2.48M</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs text-slate-300">Net pay forecast</p>
              <p className="mt-1 text-2xl font-semibold">$1.79M</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs text-slate-300">Exception count</p>
              <p className="mt-1 text-2xl font-semibold">17</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs text-slate-300">Expected release</p>
              <p className="mt-1 text-2xl font-semibold">Mar 24</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Alert className="rounded-2xl border-red-500/30 bg-red-500/10">
            <AlertTitle className="text-red-900 dark:text-red-200">
              Compliance note
            </AlertTitle>
            <AlertDescription className="text-red-800/90 dark:text-red-200/90">
              Statutory filing package for one jurisdiction has missing taxpayer
              identifiers and needs correction before release.
            </AlertDescription>
          </Alert>
          <Alert className="rounded-2xl border-cyan-500/30 bg-cyan-500/10">
            <AlertTitle className="text-cyan-900 dark:text-cyan-200">
              Treasury dependency
            </AlertTitle>
            <AlertDescription className="text-cyan-800/90 dark:text-cyan-200/90">
              Bank file generation can start immediately after exception list falls
              below five high-severity items.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-2xl border-white/80 bg-white/80 dark:border-white/10 dark:bg-zinc-900/80">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Payment accuracy target</p>
            <p className="mt-1 text-3xl font-semibold">99.8%</p>
            <p className="text-xs text-emerald-700 dark:text-emerald-300">
              Current forecast: 99.62%
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border-white/80 bg-white/80 dark:border-white/10 dark:bg-zinc-900/80">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Unapproved adjustments</p>
            <p className="mt-1 text-3xl font-semibold">9</p>
            <p className="text-xs text-amber-700 dark:text-amber-300">
              3 older than 48 hours
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border-white/80 bg-white/80 dark:border-white/10 dark:bg-zinc-900/80">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Tax checks passed</p>
            <p className="mt-1 text-3xl font-semibold">43 / 44</p>
            <p className="text-xs text-red-700 dark:text-red-300">
              1 blocker remains open
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border-white/80 bg-white/80 dark:border-white/10 dark:bg-zinc-900/80">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Bank transfer readiness</p>
            <p className="mt-1 text-3xl font-semibold">88%</p>
            <p className="text-xs text-cyan-700 dark:text-cyan-300">
              Awaiting final batch clearance
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="rounded-3xl border-white/80 bg-white/80 dark:border-white/10 dark:bg-zinc-900/80">
          <CardHeader>
            <CardTitle>Run Readiness Checklist</CardTitle>
            <CardDescription>
              Operational sequence before payroll release.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {runChecks.map((check) => (
              <div
                key={check.label}
                className="rounded-2xl border border-border/70 bg-background/70 p-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-medium">{check.label}</p>
                  <Badge className={statusStyle[check.status]}>{check.status}</Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Owner: {check.owner}</p>
                <p className="mt-2 text-sm">{check.note}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-white/80 bg-white/80 dark:border-white/10 dark:bg-zinc-900/80">
          <CardHeader>
            <CardTitle>Cycle Notes</CardTitle>
            <CardDescription>Priority detail for payroll reviewers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-3">
              Overtime policy reminders reduced manual overrides by 27% versus last
              cycle.
            </div>
            <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-3">
              Late bonus uploads from two departments still require line-by-line
              verification.
            </div>
            <div className="rounded-xl border border-red-500/25 bg-red-500/10 p-3">
              One jurisdiction tax package is blocked until missing identifiers are
              corrected.
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
        <CardHeader>
          <CardTitle>Exception Queue</CardTitle>
          <CardDescription>
            Detailed records for testing high-risk payroll exception workflows.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Severity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exceptions.map((item) => (
                <TableRow key={`${item.employee}-${item.category}`}>
                  <TableCell className="font-medium">{item.employee}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.issue}</TableCell>
                  <TableCell className="max-w-[18rem] whitespace-normal">
                    {item.action}
                  </TableCell>
                  <TableCell>
                    <Badge className={severityStyle[item.severity]}>{item.severity}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}
