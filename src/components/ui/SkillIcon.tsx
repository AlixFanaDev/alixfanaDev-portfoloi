import {
  Database,
  FileSpreadsheet,
  Globe,
  KanbanSquare,
  Layers,
  LayoutDashboard,
  PenTool,
  Terminal,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'
import type { SVGProps } from 'react'

const icons: Record<string, LucideIcon> = {
  layout: LayoutDashboard,
  database: Database,
  layers: Layers,
  globe: Globe,
  pen: PenTool,
  kanban: KanbanSquare,
  file: FileSpreadsheet,
  terminal: Terminal,
}

export function SkillIcon({
  name,
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  const Icon = icons[name] ?? LayoutDashboard
  return <Icon {...props} />
}
