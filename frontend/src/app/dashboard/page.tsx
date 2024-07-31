"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="flex min-h-screen">
      <aside className="bg-background border-r w-64 p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-8">
          <BarChartIcon className="w-6 h-6" />
          <span className="font-semibold text-lg">Fintech Dashboard</span>
        </div>
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
            prefetch={false}
          >
            <LayoutGridIcon className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
            prefetch={false}
          >
            <PieChartIcon className="w-5 h-5" />
            <span>Portfolio</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
            prefetch={false}
          >
            <TrendingUpIcon className="w-5 h-5" />
            <span>Investments</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
            prefetch={false}
          >
            <ActivityIcon className="w-5 h-5" />
            <span>Transactions</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-muted"
            prefetch={false}
          >
            <SettingsIcon className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>
      <div className="flex-1">
        <header className="bg-background border-b flex items-center h-16 px-6 shrink-0">
          <div className="ml-auto flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Welcome, John Doe</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Widget
            </Button>
          </div>
        </header>
        <main className="p-6 md:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Indices</CardTitle>
                <CardDescription>Real-time market data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">S&P 500</div>
                    <div className="text-2xl font-bold">4,567.89</div>
                    <div className="text-sm text-green-500">+1.2%</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">NASDAQ</div>
                    <div className="text-2xl font-bold">14,567.89</div>
                    <div className="text-sm text-red-500">-0.5%</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">
                      FTSE 100
                    </div>
                    <div className="text-2xl font-bold">7,567.89</div>
                    <div className="text-sm text-green-500">+0.8%</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">
                      Nikkei 225
                    </div>
                    <div className="text-2xl font-bold">28,567.89</div>
                    <div className="text-sm text-red-500">-0.3%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Summary</CardTitle>
                <CardDescription>
                  Your current investment portfolio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">
                      Total Value
                    </div>
                    <div className="text-2xl font-bold">₹125,678.90</div>
                    <div className="text-sm text-green-500">
                      +3.2% this month
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">
                      Unrealized Gain
                    </div>
                    <div className="text-2xl font-bold">₹12,345.67</div>
                    <div className="text-sm text-green-500">
                      +1.8% this week
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">
                      Dividends Earned
                    </div>
                    <div className="text-2xl font-bold">₹987.65</div>
                    <div className="text-sm text-green-500">
                      +0.5% this month
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">
                      Cash Balance
                    </div>
                    <div className="text-2xl font-bold">₹23,456.78</div>
                    <div className="text-sm text-muted-foreground">
                      Available for investment
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="col-span-1 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Investment Reports</CardTitle>
                <CardDescription>
                  Customize and export your investment reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Portfolio Performance
                      </div>
                      <Button variant="outline" size="sm">
                        <DownloadIcon className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                    <LineChart className="aspect-[9/4]" />
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Asset Allocation
                      </div>
                      <Button variant="outline" size="sm">
                        <DownloadIcon className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                    <PieChart className="aspect-[9/4]" />
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Sector Exposure
                      </div>
                      <Button variant="outline" size="sm">
                        <DownloadIcon className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                    <BarChart className="aspect-[9/4]" />
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Risk Profile
                      </div>
                      <Button variant="outline" size="sm">
                        <DownloadIcon className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                    <DotChart className="aspect-[9/4]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="col-span-1 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Investment Recommendations</CardTitle>
                <CardDescription>
                  AI-driven personalized investment suggestions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Suggested Investments
                      </div>
                      <Button variant="outline" size="sm">
                        <PlusIcon className="w-4 h-4 mr-2" />
                        Add to Portfolio
                      </Button>
                    </div>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src="/placeholder.svg"
                          width={48}
                          height={48}
                          className="rounded-lg"
                          alt="Investment Thumbnail"
                        />
                        <div>
                          <div className="font-medium">Apple Inc. (AAPL)</div>
                          <div className="text-sm text-muted-foreground">
                            Technology
                          </div>
                        </div>
                        <div className="ml-auto text-green-500 font-medium">
                          +5.2%
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <img
                          src="/placeholder.svg"
                          width={48}
                          height={48}
                          className="rounded-lg"
                          alt="Investment Thumbnail"
                        />
                        <div>
                          <div className="font-medium">
                            Amazon.com, Inc. (AMZN)
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Consumer Discretionary
                          </div>
                        </div>
                        <div className="ml-auto text-green-500 font-medium">
                          +3.8%
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <img
                          src="/placeholder.svg"
                          width={48}
                          height={48}
                          className="rounded-lg"
                          alt="Investment Thumbnail"
                        />
                        <div>
                          <div className="font-medium">
                            Microsoft Corporation (MSFT)
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Technology
                          </div>
                        </div>
                        <div className="ml-auto text-green-500 font-medium">
                          +4.1%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Market Predictions
                      </div>
                      <Button variant="outline" size="sm">
                        <RefreshCwIcon className="w-4 h-4 mr-2" />
                        Update
                      </Button>
                    </div>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary p-2 rounded-lg text-primary-foreground">
                          <TrendingUpIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium">S&P 500 to Rise</div>
                          <div className="text-sm text-muted-foreground">
                            Analysts predict a 2% increase in the S&P 500 over
                            the next month.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary p-2 rounded-lg text-primary-foreground">
                          <TrendingDownIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium">Oil Prices to Fall</div>
                          <div className="text-sm text-muted-foreground">
                            Geopolitical tensions are expected to ease, leading
                            to a 5% drop in oil prices.
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary p-2 rounded-lg text-primary-foreground">
                          <TrendingUpIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium">
                            Crypto Market to Rebound
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Analysts expect a 10% increase in major
                            cryptocurrency prices over the next two weeks.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function DotChart(props) {
  return (
    <div {...props}>
      <ResponsiveScatterPlot
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear" }}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#2563eb"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function PieChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TrendingDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
