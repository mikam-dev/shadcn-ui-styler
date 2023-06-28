"use client"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

export const cssVars = [
  { id: 0, value: "background" },
  { id: 1, value: "foreground" },
  { id: 2, value: "muted" },
  { id: 3, value: "mutedForeground" },
  { id: 4, value: "popover" },
  { id: 5, value: "popoverForeground" },
  { id: 6, value: "card" },
  { id: 7, value: "cardForeground" },
  { id: 8, value: "border" },
  { id: 9, value: "input" },
  { id: 10, value: "primary" },
  { id: 11, value: "primaryForeground" },
  { id: 12, value: "secondary" },
  { id: 13, value: "secondaryForeground" },
  { id: 14, value: "accent" },
  { id: 15, value: "accentForeground" },
  { id: 16, value: "destructive" },
  { id: 17, value: "destructiveForeground" },
  { id: 18, value: "ring" },
]

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function SelectCSS() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a variable" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Variables</SelectLabel>
          <ScrollArea className="w-xs h-[240px] rounded-md border p-4">
            {cssVars.map((n) => (
              <SelectItem key={n.id} value={n.value}>{capitalize(n.value)}</SelectItem>
            ))}
          </ScrollArea>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
