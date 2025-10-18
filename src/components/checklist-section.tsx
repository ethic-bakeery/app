"use client"

import { useState } from "react"
import ChecklistItem from "./checklist-item"

interface Section {
  id: number
  title: string
  icon: string
  items: string[]
}

interface ChecklistSectionProps {
  section: Section
  checkedItems: Record<string, boolean>
  onCheck: (itemId: string) => void
}

export default function ChecklistSection({ section, checkedItems, onCheck }: ChecklistSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const sectionCheckedCount = section.items.filter((_, idx) => checkedItems[`${section.id}-${idx}`]).length

  return (
    <div className="overflow-hidden rounded-2xl border border-accent/20 bg-card/50 backdrop-blur-sm transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-5 text-left transition-colors hover:bg-accent/5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{section.icon}</span>
            <div>
              <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
              <p className="text-sm text-muted-foreground">
                {sectionCheckedCount} of {section.items.length} completed
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">
                {Math.round((sectionCheckedCount / section.items.length) * 100)}%
              </span>
            </div>
            <svg
              className={`h-6 w-6 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-accent/10 px-6 py-5">
          <div className="space-y-3">
            {section.items.map((item, idx) => (
              <ChecklistItem
                key={idx}
                id={`${section.id}-${idx}`}
                text={item}
                checked={checkedItems[`${section.id}-${idx}`] || false}
                onChange={onCheck}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

