"use client"

interface ChecklistItemProps {
  id: string
  text: string
  checked: boolean
  onChange: (id: string) => void
}

export default function ChecklistItem({ id, text, checked, onChange }: ChecklistItemProps) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent/5">
      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2 border-accent/40 bg-background transition-all hover:border-primary">
        <input type="checkbox" checked={checked} onChange={() => onChange(id)} className="sr-only" />
        {checked && (
          <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span
        className={`flex-1 text-base leading-relaxed transition-all ${
          checked ? "text-muted-foreground line-through" : "text-foreground"
        }`}
      >
        {text}
      </span>
    </label>
  )
}

