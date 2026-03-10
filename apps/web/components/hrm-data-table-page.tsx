"use client"

import { useMemo, useState } from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Input } from "@workspace/ui/components/input"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

type EmployeeStatus = "Active" | "Onboarding" | "Leave" | "At Risk"
type EmployeeRow = {
  id: string
  employeeId: string
  name: string
  department: string
  role: string
  location: string
  status: EmployeeStatus
  employmentType: "Full-Time" | "Part-Time" | "Contractor"
  manager: string
  startDate: string
  salary: number
  lastReview: string
}

const rows: EmployeeRow[] = [
  { id: "1", employeeId: "EMP-1042", name: "Aylin Demir", department: "Design", role: "Senior Product Designer", location: "Istanbul", status: "Active", employmentType: "Full-Time", manager: "M. Karaca", startDate: "2022-03-11", salary: 89000, lastReview: "2026-02-20" },
  { id: "2", employeeId: "EMP-1158", name: "Daniel Kim", department: "Engineering", role: "Staff Backend Engineer", location: "Berlin", status: "Onboarding", employmentType: "Full-Time", manager: "R. Ozkan", startDate: "2026-01-29", salary: 132000, lastReview: "2026-02-27" },
  { id: "3", employeeId: "EMP-1094", name: "Elif Sari", department: "Finance Ops", role: "Payroll Specialist", location: "London", status: "At Risk", employmentType: "Full-Time", manager: "S. Yalcin", startDate: "2023-07-14", salary: 76000, lastReview: "2026-01-25" },
  { id: "4", employeeId: "EMP-1008", name: "Marco Rossi", department: "Enterprise Sales", role: "Account Executive", location: "Milan", status: "Leave", employmentType: "Full-Time", manager: "L. Hart", startDate: "2021-10-05", salary: 98000, lastReview: "2025-12-19" },
  { id: "5", employeeId: "EMP-1182", name: "Zeynep Acar", department: "Customer Ops", role: "Support Lead", location: "Ankara", status: "Active", employmentType: "Full-Time", manager: "B. Cetin", startDate: "2022-11-09", salary: 69000, lastReview: "2026-02-14" },
  { id: "6", employeeId: "EMP-1122", name: "Can Ersoy", department: "Engineering", role: "Frontend Engineer", location: "Istanbul", status: "Active", employmentType: "Full-Time", manager: "R. Ozkan", startDate: "2024-01-16", salary: 94000, lastReview: "2026-02-10" },
  { id: "7", employeeId: "EMP-1201", name: "Mina Farah", department: "Data", role: "Data Scientist", location: "Berlin", status: "Onboarding", employmentType: "Full-Time", manager: "T. Kurt", startDate: "2026-02-03", salary: 116000, lastReview: "2026-02-28" },
  { id: "8", employeeId: "EMP-1011", name: "Berk Kara", department: "Engineering", role: "Backend Engineer", location: "Ankara", status: "Active", employmentType: "Full-Time", manager: "R. Ozkan", startDate: "2021-04-23", salary: 101000, lastReview: "2026-01-29" },
  { id: "9", employeeId: "EMP-1174", name: "Nora Stein", department: "Product", role: "Product Marketing Manager", location: "London", status: "Active", employmentType: "Full-Time", manager: "A. Demir", startDate: "2025-05-19", salary: 93000, lastReview: "2026-02-03" },
  { id: "10", employeeId: "EMP-1136", name: "Rami Noor", department: "People", role: "HR Business Partner", location: "Istanbul", status: "At Risk", employmentType: "Full-Time", manager: "E. Sari", startDate: "2024-04-22", salary: 82000, lastReview: "2026-01-14" },
  { id: "11", employeeId: "EMP-1079", name: "Selin Aras", department: "Legal", role: "Corporate Counsel", location: "Ankara", status: "Active", employmentType: "Full-Time", manager: "D. Kim", startDate: "2023-02-10", salary: 99000, lastReview: "2026-01-30" },
  { id: "12", employeeId: "EMP-1210", name: "Ipek Yilmaz", department: "Product", role: "Product Analyst", location: "Istanbul", status: "Onboarding", employmentType: "Full-Time", manager: "A. Demir", startDate: "2026-02-18", salary: 67000, lastReview: "2026-03-01" },
]

const operationLog = [
  { id: "LOG-9841", action: "Toplu durum guncelleme", by: "E. Sari", target: "8 kayit", date: "2026-03-09 15:22", result: "Success" },
  { id: "LOG-9838", action: "Yoneticiye bildirim", by: "M. Karaca", target: "EMP-1136", date: "2026-03-09 12:10", result: "Success" },
  { id: "LOG-9826", action: "Toplu etiketleme", by: "R. Ozkan", target: "3 kayit", date: "2026-03-08 10:25", result: "Warning" },
]

const statusStyles: Record<EmployeeStatus, string> = {
  Active: "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  Onboarding: "bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
  Leave: "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  "At Risk": "bg-red-500/15 text-red-700 dark:bg-red-500/20 dark:text-red-300",
}

const resultStyles: Record<string, string> = {
  Success: "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  Warning: "bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
}

type ColumnKey =
  | "employeeId"
  | "name"
  | "department"
  | "role"
  | "location"
  | "status"
  | "employmentType"
  | "manager"
  | "startDate"
  | "salary"
  | "lastReview"

type SortDirection = "asc" | "desc"

const columns: Array<{ key: ColumnKey; label: string }> = [
  { key: "employeeId", label: "Employee ID" },
  { key: "name", label: "Ad Soyad" },
  { key: "department", label: "Departman" },
  { key: "role", label: "Pozisyon" },
  { key: "location", label: "Lokasyon" },
  { key: "status", label: "Durum" },
  { key: "employmentType", label: "Istihdam" },
  { key: "manager", label: "Yonetici" },
  { key: "startDate", label: "Baslangic" },
  { key: "salary", label: "Maas" },
  { key: "lastReview", label: "Son Degerlendirme" },
]

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount)
}

function getPageItems(totalPages: number, currentPage: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const items: Array<number | "ellipsis-left" | "ellipsis-right"> = [1]
  const start = Math.max(2, currentPage - 1)
  const end = Math.min(totalPages - 1, currentPage + 1)

  if (start > 2) items.push("ellipsis-left")
  for (let page = start; page <= end; page++) items.push(page)
  if (end < totalPages - 1) items.push("ellipsis-right")

  items.push(totalPages)
  return items
}

export function HrmDataTablePage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [sortBy, setSortBy] = useState<ColumnKey>("name")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [visibleColumns, setVisibleColumns] = useState<Record<ColumnKey, boolean>>({
    employeeId: true,
    name: true,
    department: true,
    role: true,
    location: true,
    status: true,
    employmentType: true,
    manager: false,
    startDate: false,
    salary: true,
    lastReview: false,
  })

  const departments = useMemo(() => Array.from(new Set(rows.map((row) => row.department))).sort(), [])
  const locations = useMemo(() => Array.from(new Set(rows.map((row) => row.location))).sort(), [])

  const filteredRows = useMemo(() => {
    const query = search.trim().toLowerCase()

    return rows.filter((row) => {
      const inSearch =
        !query ||
        row.name.toLowerCase().includes(query) ||
        row.employeeId.toLowerCase().includes(query) ||
        row.department.toLowerCase().includes(query) ||
        row.role.toLowerCase().includes(query) ||
        row.manager.toLowerCase().includes(query)

      return (
        inSearch &&
        (statusFilter === "all" || row.status === statusFilter) &&
        (departmentFilter === "all" || row.department === departmentFilter) &&
        (locationFilter === "all" || row.location === locationFilter)
      )
    })
  }, [departmentFilter, locationFilter, search, statusFilter])

  const sortedRows = useMemo(() => {
    const cloned = [...filteredRows]
    cloned.sort((a, b) => {
      const aValue = a[sortBy]
      const bValue = b[sortBy]

      let comparison = 0
      if (sortBy === "salary") {
        comparison = Number(aValue) - Number(bValue)
      } else if (sortBy === "startDate" || sortBy === "lastReview") {
        comparison = new Date(String(aValue)).getTime() - new Date(String(bValue)).getTime()
      } else {
        comparison = String(aValue).localeCompare(String(bValue))
      }

      return sortDirection === "asc" ? comparison : -comparison
    })

    return cloned
  }, [filteredRows, sortBy, sortDirection])

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / pageSize))

  const activePage = Math.min(page, totalPages)
  const pageRows = useMemo(() => {
    const start = (activePage - 1) * pageSize
    return sortedRows.slice(start, start + pageSize)
  }, [activePage, pageSize, sortedRows])

  const allPageSelected = pageRows.length > 0 && pageRows.every((row) => selectedIds.has(row.id))
  const somePageSelected = pageRows.some((row) => selectedIds.has(row.id))
  const pageCheckState: boolean | "indeterminate" = allPageSelected
    ? true
    : somePageSelected
      ? "indeterminate"
      : false

  const visibleCount = Object.values(visibleColumns).filter(Boolean).length
  const pageItems = getPageItems(totalPages, activePage)
  const selectedRows = rows.filter((row) => selectedIds.has(row.id))

  function toggleSort(columnKey: ColumnKey) {
    if (sortBy === columnKey) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
    } else {
      setSortBy(columnKey)
      setSortDirection("asc")
    }
    setPage(1)
  }

  function toggleColumn(columnKey: ColumnKey, checked: boolean | "indeterminate") {
    setVisibleColumns((prev) => {
      const next = checked === true
      if (!next && prev[columnKey] && visibleCount <= 1) return prev
      return { ...prev, [columnKey]: next }
    })
  }

  function toggleSelectAllOnPage(checked: boolean | "indeterminate") {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (checked === true) pageRows.forEach((row) => next.add(row.id))
      else pageRows.forEach((row) => next.delete(row.id))
      return next
    })
  }

  function toggleRow(rowId: string, checked: boolean | "indeterminate") {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (checked === true) next.add(rowId)
      else next.delete(rowId)
      return next
    })
  }

  return (
    <section className="space-y-6">
      <Card className="rounded-3xl border-white/80 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white dark:border-white/10">
        <CardHeader>
          <Badge className="w-fit bg-white/15 text-white">Advanced Data Table</Badge>
          <CardTitle className="text-2xl font-semibold tracking-tight">
            HRM data table: search, filter, sort, pagination, column control
          </CardTitle>
          <CardDescription className="text-slate-200/90">
            Detayli test sayfasi. Kayitlar ve islemler iki sekmede ayrildi.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="rounded-3xl border-white/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80">
        <CardContent className="pt-4">
          <Tabs defaultValue="records">
            <TabsList variant="line" className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="records">Kayitlar</TabsTrigger>
              <TabsTrigger value="operations">
                Islemler
                <Badge className="ml-2 bg-cyan-500/15 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
                  {selectedRows.length} secili
                </Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="records" className="pt-4">
              <div className="grid gap-3 rounded-2xl border border-border/70 bg-background/70 p-3 lg:grid-cols-[1.35fr_repeat(4,minmax(0,1fr))]">
                <Input
                  placeholder="Ara: ad, employee id, rol, departman, yonetici"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value)
                    setPage(1)
                  }}
                />
                <Select
                  value={statusFilter}
                  onValueChange={(value) => {
                    setStatusFilter(value)
                    setPage(1)
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Durum" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tum durumlar</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Onboarding">Onboarding</SelectItem>
                    <SelectItem value="Leave">Leave</SelectItem>
                    <SelectItem value="At Risk">At Risk</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={departmentFilter}
                  onValueChange={(value) => {
                    setDepartmentFilter(value)
                    setPage(1)
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Departman" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tum departmanlar</SelectItem>
                    {departments.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={locationFilter}
                  onValueChange={(value) => {
                    setLocationFilter(value)
                    setPage(1)
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Lokasyon" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tum lokasyonlar</SelectItem>
                    {locations.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      Kolonlari yonet
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Gorunen kolonlar</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {columns.map((column) => (
                      <DropdownMenuCheckboxItem
                        key={column.key}
                        checked={visibleColumns[column.key]}
                        disabled={visibleColumns[column.key] && visibleCount <= 1}
                        onCheckedChange={(checked) => toggleColumn(column.key, checked)}
                      >
                        {column.label}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-border/70">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                      <TableHead className="w-12">
                        <Checkbox checked={pageCheckState} onCheckedChange={toggleSelectAllOnPage} />
                      </TableHead>
                      {columns.map((column) =>
                        visibleColumns[column.key] ? (
                          <TableHead key={column.key}>
                            <button
                              type="button"
                              className={cn("inline-flex items-center gap-2 text-left font-medium")}
                              onClick={() => toggleSort(column.key)}
                            >
                              {column.label}
                              <span className="text-[11px] text-muted-foreground">
                                {sortBy === column.key ? (sortDirection === "asc" ? "Asc" : "Desc") : "Sort"}
                              </span>
                            </button>
                          </TableHead>
                        ) : null
                      )}
                      <TableHead className="text-right">Aksiyon</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pageRows.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={visibleCount + 2} className="py-10 text-center">
                          Sonuc bulunamadi.
                        </TableCell>
                      </TableRow>
                    ) : (
                      pageRows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>
                            <Checkbox
                              checked={selectedIds.has(row.id)}
                              onCheckedChange={(checked) => toggleRow(row.id, checked)}
                            />
                          </TableCell>
                          {visibleColumns.employeeId ? <TableCell>{row.employeeId}</TableCell> : null}
                          {visibleColumns.name ? <TableCell className="font-medium">{row.name}</TableCell> : null}
                          {visibleColumns.department ? <TableCell>{row.department}</TableCell> : null}
                          {visibleColumns.role ? <TableCell className="max-w-[15rem] whitespace-normal">{row.role}</TableCell> : null}
                          {visibleColumns.location ? <TableCell>{row.location}</TableCell> : null}
                          {visibleColumns.status ? (
                            <TableCell>
                              <Badge className={statusStyles[row.status]}>{row.status}</Badge>
                            </TableCell>
                          ) : null}
                          {visibleColumns.employmentType ? <TableCell>{row.employmentType}</TableCell> : null}
                          {visibleColumns.manager ? <TableCell>{row.manager}</TableCell> : null}
                          {visibleColumns.startDate ? <TableCell>{row.startDate}</TableCell> : null}
                          {visibleColumns.salary ? <TableCell>{formatCurrency(row.salary)}</TableCell> : null}
                          {visibleColumns.lastReview ? <TableCell>{row.lastReview}</TableCell> : null}
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button size="xs" variant="outline">
                                Detay
                              </Button>
                              <Button size="xs" variant="ghost">
                                Not
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-border/70 bg-background/70 p-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="outline">{sortedRows.length} kayit</Badge>
                  <Badge variant="outline">{selectedIds.size} secili</Badge>
                  <Badge variant="outline">
                    Sayfa {activePage} / {totalPages}
                  </Badge>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sayfa boyutu</span>
                    <Select
                      value={String(pageSize)}
                      onValueChange={(value) => {
                        setPageSize(Number(value))
                        setPage(1)
                      }}
                    >
                      <SelectTrigger size="sm" className="w-[88px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="15">15</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Pagination className="mx-0 w-auto justify-start sm:justify-end">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(event) => {
                            event.preventDefault()
                            setPage((prev) => Math.max(1, prev - 1))
                          }}
                          className={cn(activePage <= 1 && "pointer-events-none opacity-50")}
                        />
                      </PaginationItem>
                      {pageItems.map((item, index) => (
                        <PaginationItem key={`${item}-${index}`}>
                          {typeof item === "number" ? (
                            <PaginationLink
                              href="#"
                              isActive={item === activePage}
                              onClick={(event) => {
                                event.preventDefault()
                                setPage(item)
                              }}
                            >
                              {item}
                            </PaginationLink>
                          ) : (
                            <PaginationEllipsis />
                          )}
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(event) => {
                            event.preventDefault()
                            setPage((prev) => Math.min(totalPages, prev + 1))
                          }}
                          className={cn(activePage >= totalPages && "pointer-events-none opacity-50")}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="operations" className="pt-4">
              <div className="grid gap-4 xl:grid-cols-[1.15fr_1fr]">
                <Card className="rounded-2xl border-border/70 bg-background/70">
                  <CardHeader>
                    <CardTitle>Toplu Islem Paneli</CardTitle>
                    <CardDescription>Secili satirlar icin test aksiyonlari.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2 sm:grid-cols-3">
                      <Button className="w-full">Durum Guncelle</Button>
                      <Button variant="outline" className="w-full">Yoneticiye Bildir</Button>
                      <Button variant="secondary" className="w-full">CSV Aktar</Button>
                    </div>
                    <div className="rounded-xl border border-border/70 p-3">
                      <p className="text-sm text-muted-foreground">Secili kayit sayisi</p>
                      <p className="mt-1 text-3xl font-semibold">{selectedRows.length}</p>
                    </div>
                    <div className="space-y-2 rounded-xl border border-border/70 p-3">
                      <p className="text-sm font-medium">Secili kayitlar</p>
                      {selectedRows.length === 0 ? (
                        <p className="text-sm text-muted-foreground">Kayitlar sekmesinden satir sec.</p>
                      ) : (
                        selectedRows.map((row) => (
                          <div key={row.id} className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2 text-sm">
                            <span>{row.name}</span>
                            <Badge variant="outline">{row.employeeId}</Badge>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-border/70 bg-background/70">
                  <CardHeader>
                    <CardTitle>Islem Gecmisi</CardTitle>
                    <CardDescription>Denetim log kayitlari.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Aksiyon</TableHead>
                          <TableHead>Kullanici</TableHead>
                          <TableHead>Hedef</TableHead>
                          <TableHead>Tarih</TableHead>
                          <TableHead>Sonuc</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {operationLog.map((log) => (
                          <TableRow key={log.id}>
                            <TableCell>{log.id}</TableCell>
                            <TableCell className="font-medium">{log.action}</TableCell>
                            <TableCell>{log.by}</TableCell>
                            <TableCell>{log.target}</TableCell>
                            <TableCell>{log.date}</TableCell>
                            <TableCell>
                              <Badge className={resultStyles[log.result]}>{log.result}</Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
