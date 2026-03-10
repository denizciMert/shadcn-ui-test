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

const funnel = [
  { stage: "Applied", count: 684, tone: "bg-zinc-500/15 text-zinc-700 dark:text-zinc-300" },
  {
    stage: "Screening",
    count: 242,
    tone: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
  },
  {
    stage: "Hiring Manager",
    count: 97,
    tone: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  },
  {
    stage: "Final Loop",
    count: 39,
    tone: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
  },
  {
    stage: "Offer",
    count: 18,
    tone: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  },
]

const requisitions = [
  {
    role: "Senior Backend Engineer",
    department: "Engineering",
    openDays: 42,
    candidates: 18,
    manager: "R. Ozkan",
    status: "At Risk",
  },
  {
    role: "Payroll Analyst",
    department: "Finance Ops",
    openDays: 21,
    candidates: 9,
    manager: "S. Yalcin",
    status: "On Track",
  },
  {
    role: "Regional Sales Director",
    department: "Enterprise Sales",
    openDays: 57,
    candidates: 11,
    manager: "L. Hart",
    status: "Escalated",
  },
  {
    role: "Customer Success Manager",
    department: "Customer Ops",
    openDays: 28,
    candidates: 14,
    manager: "B. Cetin",
    status: "On Track",
  },
]

const pipeline = [
  {
    stage: "New This Week",
    tone: "border-cyan-500/25 bg-cyan-500/10",
    candidates: [
      "Ipek - Product Analyst",
      "Leo - DevOps Engineer",
      "Deniz - Revenue Ops Lead",
    ],
  },
  {
    stage: "Interviewing",
    tone: "border-amber-500/25 bg-amber-500/10",
    candidates: [
      "Mina - Senior Data Scientist",
      "Can - Staff Frontend Engineer",
      "Rami - HR Business Partner",
    ],
  },
  {
    stage: "Final Review",
    tone: "border-violet-500/25 bg-violet-500/10",
    candidates: [
      "Ayse - Senior Recruiter",
      "Nora - Product Marketing Manager",
      "Emre - Platform SRE",
    ],
  },
  {
    stage: "Offer Prep",
    tone: "border-emerald-500/25 bg-emerald-500/10",
    candidates: [
      "Berk - Backend Engineer",
      "Selin - Corporate Counsel",
      "Marco - Sales Engineer",
    ],
  },
]

const reqStatusStyle: Record<string, string> = {
  "On Track":
    "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  "At Risk":
    "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  Escalated:
    "bg-red-500/15 text-red-700 dark:bg-red-500/20 dark:text-red-300",
}

export default function RecruitingPage() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <Card className="rounded-3xl border-white/80 bg-gradient-to-br from-amber-900 via-slate-900 to-zinc-900 text-white dark:border-white/10">
          <CardHeader>
            <Badge className="w-fit bg-white/15 text-white">Recruiting Hub</Badge>
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Hiring output remains strong, but senior tech roles are behind SLA.
            </CardTitle>
            <CardDescription className="text-slate-200/90">
              Average time-to-fill is 31 days. Engineering and leadership hiring
              remain bottlenecks due to narrow candidate pools and compensation
              pressure in key markets.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs text-slate-300">Open requisitions</p>
              <p className="mt-1 text-2xl font-semibold">37</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs text-slate-300">Offer acceptance</p>
              <p className="mt-1 text-2xl font-semibold">79%</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs text-slate-300">SLA breaches</p>
              <p className="mt-1 text-2xl font-semibold">6</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Alert className="rounded-2xl border-amber-500/30 bg-amber-500/10">
            <AlertTitle className="text-amber-900 dark:text-amber-200">
              Capacity warning
            </AlertTitle>
            <AlertDescription className="text-amber-800/90 dark:text-amber-200/90">
              Interview panel saturation is at 86% for senior engineering loops.
              Add backup interviewers this week.
            </AlertDescription>
          </Alert>
          <Alert className="rounded-2xl border-emerald-500/30 bg-emerald-500/10">
            <AlertTitle className="text-emerald-900 dark:text-emerald-200">
              Good signal
            </AlertTitle>
            <AlertDescription className="text-emerald-800/90 dark:text-emerald-200/90">
              Employer brand campaign lifted inbound qualified applicants by 19%
              in product and design tracks.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {funnel.map((item) => (
          <Card
            key={item.stage}
            className="rounded-2xl border-white/80 bg-white/80 dark:border-white/10 dark:bg-zinc-900/80"
          >
            <CardContent className="space-y-2 p-4">
              <Badge className={item.tone}>{item.stage}</Badge>
              <p className="text-3xl font-semibold tracking-tight">{item.count}</p>
              <p className="text-xs text-muted-foreground">active candidates</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
        <CardHeader>
          <CardTitle>Live Candidate Pipeline</CardTitle>
          <CardDescription>
            Realistic board-style data for recruitment operations UI testing.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {pipeline.map((column) => (
            <div
              key={column.stage}
              className={`space-y-3 rounded-2xl border p-3 ${column.tone}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{column.stage}</p>
                <Badge variant="outline">{column.candidates.length}</Badge>
              </div>
              <div className="space-y-2">
                {column.candidates.map((candidate) => (
                  <div
                    key={candidate}
                    className="rounded-xl border border-white/70 bg-white/70 px-3 py-2 text-sm shadow-sm dark:border-white/10 dark:bg-zinc-900/70"
                  >
                    {candidate}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
        <CardHeader>
          <CardTitle>Priority Requisitions</CardTitle>
          <CardDescription>
            Detailed opening-level tracking with owner and urgency.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Open Days</TableHead>
                <TableHead>Candidates</TableHead>
                <TableHead>Hiring Manager</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requisitions.map((req) => (
                <TableRow key={req.role}>
                  <TableCell className="font-medium">{req.role}</TableCell>
                  <TableCell>{req.department}</TableCell>
                  <TableCell>{req.openDays}</TableCell>
                  <TableCell>{req.candidates}</TableCell>
                  <TableCell>{req.manager}</TableCell>
                  <TableCell>
                    <Badge className={reqStatusStyle[req.status]}>{req.status}</Badge>
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
