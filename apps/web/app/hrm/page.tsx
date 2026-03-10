import Link from "next/link"

import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Progress } from "@workspace/ui/components/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

const kpis = [
  {
    label: "Total Headcount",
    value: "1,284",
    delta: "+24 this month",
    tone: "text-emerald-700 dark:text-emerald-300",
    bg: "from-emerald-500/20",
  },
  {
    label: "Open Hiring Reqs",
    value: "37",
    delta: "12 high priority",
    tone: "text-amber-700 dark:text-amber-300",
    bg: "from-amber-500/20",
  },
  {
    label: "Payroll Accuracy",
    value: "99.62%",
    delta: "-0.08% vs target",
    tone: "text-cyan-700 dark:text-cyan-300",
    bg: "from-cyan-500/20",
  },
  {
    label: "Engagement Index",
    value: "82 / 100",
    delta: "+3 points quarter over quarter",
    tone: "text-indigo-700 dark:text-indigo-300",
    bg: "from-indigo-500/20",
  },
]

const watchlist = [
  {
    topic: "Payroll data drift in contractor group",
    owner: "Finance Systems",
    impact: "Medium",
    due: "Mar 13",
    status: "In Progress",
  },
  {
    topic: "Low candidate conversion for Senior Backend",
    owner: "Talent Acquisition",
    impact: "High",
    due: "Mar 15",
    status: "Action Needed",
  },
  {
    topic: "Attrition spike in customer support pod",
    owner: "People Partners",
    impact: "High",
    due: "Mar 18",
    status: "Executive Review",
  },
  {
    topic: "Delayed I-9 verification for two locations",
    owner: "Compliance Desk",
    impact: "Critical",
    due: "Mar 12",
    status: "Urgent",
  },
]

const statusStyles: Record<string, string> = {
  "In Progress":
    "bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
  "Action Needed":
    "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  "Executive Review":
    "bg-violet-500/15 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300",
  Urgent: "bg-red-500/15 text-red-700 dark:bg-red-500/20 dark:text-red-300",
}

export default function HrmOverviewPage() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 xl:grid-cols-[1.45fr_1fr]">
        <Card className="rounded-3xl border-white/80 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white shadow-[0_30px_80px_-50px_rgba(8,47,73,0.9)] dark:border-white/10">
          <CardHeader>
            <Badge className="w-fit bg-white/15 text-white hover:bg-white/25">
              Executive Snapshot
            </Badge>
            <CardTitle className="text-2xl font-semibold">
              Workforce stability is strong, but three areas require immediate
              intervention.
            </CardTitle>
            <CardDescription className="max-w-2xl text-slate-200/95">
              Talent retention, payroll quality, and recruiting velocity are
              tightly linked this quarter. Current trends suggest a 4.3% labor
              cost overrun risk unless backlog actions close before Mar 20.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap justify-between gap-2 border-white/15 bg-white/5">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                asChild
                size="sm"
                className="rounded-full bg-white text-slate-900 hover:bg-white/90"
              >
                <Link href="/hrm/people">Review People Ops</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-white/35 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="/hrm/recruiting">Open Hiring Pipeline</Link>
              </Button>
            </div>
            <p className="text-xs text-slate-300">Last synced: Mar 10, 2026 at 09:42</p>
          </CardFooter>
        </Card>

        <Card className="rounded-3xl border-white/80 bg-white/80 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
          <CardHeader>
            <CardTitle>Priority Notes</CardTitle>
            <CardDescription>
              Fast operational updates for leadership stand-up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-4">
              <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                Positive
              </p>
              <p className="mt-1 text-sm text-emerald-700/90 dark:text-emerald-200/90">
                Onboarding completion for January hires reached 96%, up from 89%
                in the previous cohort.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-500/25 bg-amber-500/10 p-4">
              <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                Watch
              </p>
              <p className="mt-1 text-sm text-amber-700/90 dark:text-amber-200/90">
                Two region leads still have unresolved overtime policy
                acknowledgments for 47 employees.
              </p>
            </div>
            <div className="rounded-2xl border border-red-500/25 bg-red-500/10 p-4">
              <p className="text-sm font-medium text-red-800 dark:text-red-300">
                Escalated
              </p>
              <p className="mt-1 text-sm text-red-700/90 dark:text-red-200/90">
                Contractor payment exceptions crossed 1.6% threshold and require
                CFO sign-off before next run.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <Card
            key={kpi.label}
            className="relative overflow-hidden rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80"
          >
            <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${kpi.bg} to-transparent`} />
            <CardHeader className="pb-1">
              <CardDescription>{kpi.label}</CardDescription>
              <CardTitle className="text-3xl font-semibold tracking-tight">
                {kpi.value}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm font-medium ${kpi.tone}`}>{kpi.delta}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.35fr_1fr]">
        <Card className="rounded-3xl border-white/80 bg-white/80 shadow-[0_30px_70px_-55px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
          <CardHeader>
            <CardTitle>Operational Health by Domain</CardTitle>
            <CardDescription>
              Weekly quality thresholds and execution performance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="people">
              <TabsList variant="line" className="w-full justify-start overflow-x-auto">
                <TabsTrigger value="people">People Ops</TabsTrigger>
                <TabsTrigger value="recruiting">Recruiting</TabsTrigger>
                <TabsTrigger value="payroll">Payroll</TabsTrigger>
              </TabsList>
              <TabsContent value="people" className="pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Onboarding completion</span>
                      <span className="font-medium">96%</span>
                    </div>
                    <Progress value={96} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Manager review closure</span>
                      <span className="font-medium">89%</span>
                    </div>
                    <Progress value={89} className="[&>[data-slot=progress-indicator]]:bg-cyan-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Risk remains concentrated in support and operations groups
                    where 27 overdue reviews are still open.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="recruiting" className="pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Time-to-fill SLA</span>
                      <span className="font-medium">31 days</span>
                    </div>
                    <Progress
                      value={74}
                      className="[&>[data-slot=progress-indicator]]:bg-amber-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Offer acceptance</span>
                      <span className="font-medium">79%</span>
                    </div>
                    <Progress
                      value={79}
                      className="[&>[data-slot=progress-indicator]]:bg-emerald-500"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Candidate quality is high, but top-of-funnel sourcing is 18%
                    below plan in engineering.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="payroll" className="pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Pre-close validation</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <Progress
                      value={92}
                      className="[&>[data-slot=progress-indicator]]:bg-violet-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Exception resolution</span>
                      <span className="font-medium">84%</span>
                    </div>
                    <Progress
                      value={84}
                      className="[&>[data-slot=progress-indicator]]:bg-red-500"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Remaining exceptions mostly relate to late shift approvals and
                    contractor rate mismatches.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Alert className="rounded-2xl border-cyan-500/30 bg-cyan-500/10">
            <AlertTitle className="text-cyan-900 dark:text-cyan-200">
              Board update note
            </AlertTitle>
            <AlertDescription className="text-cyan-800/90 dark:text-cyan-200/90">
              Mid-quarter plan supports hiring pace, but contingent labor ceiling
              may be breached by Mar 27 without role rebalancing.
            </AlertDescription>
          </Alert>
          <Alert className="rounded-2xl border-red-500/30 bg-red-500/10">
            <AlertTitle className="text-red-900 dark:text-red-200">
              Immediate compliance action
            </AlertTitle>
            <AlertDescription className="text-red-800/90 dark:text-red-200/90">
              Two unverified federal forms have crossed legal SLA and must be
              completed within 48 hours.
            </AlertDescription>
          </Alert>
          <Card className="rounded-2xl border-white/80 bg-white/80 dark:border-white/10 dark:bg-zinc-900/80">
            <CardHeader>
              <CardTitle className="text-base">Upcoming HR Milestones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span>Comp cycle final calibration</span>
                <Badge variant="outline">Mar 14</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Benefit enrollment freeze</span>
                <Badge variant="outline">Mar 19</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Payroll lock for cycle 06</span>
                <Badge variant="outline">Mar 22</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
        <CardHeader>
          <CardTitle>Cross-Functional Risk Watchlist</CardTitle>
          <CardDescription>
            Multi-team blockers with measurable business impact.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Topic</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Impact</TableHead>
                <TableHead>Due</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {watchlist.map((row) => (
                <TableRow key={row.topic}>
                  <TableCell className="max-w-[24rem] whitespace-normal text-sm font-medium">
                    {row.topic}
                  </TableCell>
                  <TableCell>{row.owner}</TableCell>
                  <TableCell>{row.impact}</TableCell>
                  <TableCell>{row.due}</TableCell>
                  <TableCell>
                    <Badge className={statusStyles[row.status]}>{row.status}</Badge>
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
