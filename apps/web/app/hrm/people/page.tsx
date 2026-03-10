import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
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

const departments = [
  { name: "Engineering", count: 462, ratio: 36, trend: "+8" },
  { name: "Sales", count: 238, ratio: 19, trend: "+4" },
  { name: "Customer Ops", count: 201, ratio: 16, trend: "-3" },
  { name: "Product + Design", count: 167, ratio: 13, trend: "+2" },
  { name: "G&A", count: 216, ratio: 16, trend: "+1" },
]

const onboardingTracks = [
  {
    label: "Provisioning and access",
    value: 98,
    indicatorClass: "[&>[data-slot=progress-indicator]]:bg-emerald-500",
  },
  {
    label: "Policy acknowledgments",
    value: 94,
    indicatorClass: "[&>[data-slot=progress-indicator]]:bg-cyan-500",
  },
  {
    label: "Manager first-week check-ins",
    value: 88,
    indicatorClass: "[&>[data-slot=progress-indicator]]:bg-amber-500",
  },
  {
    label: "30-day role readiness",
    value: 83,
    indicatorClass: "[&>[data-slot=progress-indicator]]:bg-violet-500",
  },
]

const employees = [
  {
    name: "Aylin Demir",
    role: "Senior Product Designer",
    team: "Design",
    location: "Istanbul",
    manager: "M. Karaca",
    status: "Active",
    performance: "Exceeds",
  },
  {
    name: "Daniel Kim",
    role: "Staff Backend Engineer",
    team: "Platform",
    location: "Berlin",
    manager: "R. Ozkan",
    status: "Onboarding",
    performance: "Pending",
  },
  {
    name: "Elif Sari",
    role: "Payroll Specialist",
    team: "Finance Ops",
    location: "London",
    manager: "S. Yalcin",
    status: "At Risk",
    performance: "Meets",
  },
  {
    name: "Marco Rossi",
    role: "Account Executive",
    team: "Enterprise Sales",
    location: "Milan",
    manager: "L. Hart",
    status: "Leave",
    performance: "Exceeds",
  },
  {
    name: "Zeynep Acar",
    role: "Customer Support Lead",
    team: "Support",
    location: "Ankara",
    manager: "B. Cetin",
    status: "Active",
    performance: "Needs Support",
  },
]

const statusStyle: Record<string, string> = {
  Active: "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  Onboarding: "bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
  "At Risk": "bg-red-500/15 text-red-700 dark:bg-red-500/20 dark:text-red-300",
  Leave: "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
}

const performanceStyle: Record<string, string> = {
  Exceeds:
    "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  Meets:
    "bg-cyan-500/10 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
  Pending:
    "bg-zinc-500/10 text-zinc-700 dark:bg-zinc-500/20 dark:text-zinc-300",
  "Needs Support":
    "bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
}

export default function PeopleOpsPage() {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 xl:grid-cols-[1.35fr_1fr]">
        <Card className="rounded-3xl border-white/80 bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-900 text-white dark:border-white/10">
          <CardHeader>
            <Badge className="w-fit bg-white/15 text-white">People Operations</Badge>
            <CardTitle className="text-2xl font-semibold tracking-tight">
              Workforce growth is healthy with stable retention in critical teams.
            </CardTitle>
            <CardDescription className="text-slate-200/90">
              Voluntary attrition in Q1 is 7.8%, below annual guardrail of 9.5%.
              Current concern is uneven manager follow-through in support and field
              operations.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs text-slate-300">Active employees</p>
              <p className="mt-1 text-2xl font-semibold">1,284</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs text-slate-300">90-day retention</p>
              <p className="mt-1 text-2xl font-semibold">94.1%</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs text-slate-300">Open employee cases</p>
              <p className="mt-1 text-2xl font-semibold">26</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
          <CardHeader>
            <CardTitle>Important Notes</CardTitle>
            <CardDescription>Short actions for this week.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-3">
              Merit review completion reached 91% in corporate functions.
            </div>
            <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-3">
              14 overdue check-ins from first-line managers must be closed by Friday.
            </div>
            <div className="rounded-xl border border-red-500/25 bg-red-500/10 p-3">
              Two harassment case files need legal review sign-off before closure.
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="rounded-3xl border-white/80 bg-white/80 dark:border-white/10 dark:bg-zinc-900/80">
          <CardHeader>
            <CardTitle>Department Mix</CardTitle>
            <CardDescription>Current distribution with monthly deltas.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {departments.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-muted-foreground">
                    {item.count} employees ({item.trend})
                  </span>
                </div>
                <Progress
                  value={item.ratio}
                  className="[&>[data-slot=progress-indicator]]:bg-cyan-500"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-white/80 bg-white/80 dark:border-white/10 dark:bg-zinc-900/80">
          <CardHeader>
            <CardTitle>New Hire Readiness</CardTitle>
            <CardDescription>
              Status across onboarding steps for current cohort.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {onboardingTracks.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>{item.label}</span>
                  <span className="font-medium">{item.value}%</span>
                </div>
                <Progress
                  value={item.value}
                  className={item.indicatorClass}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
        <CardHeader>
          <CardTitle>Employee Status Grid</CardTitle>
          <CardDescription>
            Representative records for testing HRM list and status views.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Manager</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((person) => (
                <TableRow key={person.name}>
                  <TableCell className="font-medium">{person.name}</TableCell>
                  <TableCell>{person.role}</TableCell>
                  <TableCell>{person.team}</TableCell>
                  <TableCell>{person.location}</TableCell>
                  <TableCell>{person.manager}</TableCell>
                  <TableCell>
                    <Badge className={statusStyle[person.status]}>{person.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={performanceStyle[person.performance]}>
                      {person.performance}
                    </Badge>
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
