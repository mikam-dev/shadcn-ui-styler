import { ThemeProvider } from "@/components/theme-provider"
interface SinkLayoutProps {
  children: React.ReactNode
}

export default function SinkLayout({ children }: SinkLayoutProps) {
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <ThemeProvider>{children}</ThemeProvider>
      </div>
    </div>
  )
}
