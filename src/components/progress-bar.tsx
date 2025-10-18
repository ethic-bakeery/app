interface ProgressBarProps {
  progress: number
  checkedCount: number
  totalItems: number
}

export default function ProgressBar({ progress, checkedCount, totalItems }: ProgressBarProps) {
  return (
    <div className="border-b border-accent/10 bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-foreground">Your Progress</span>
          <span className="text-sm font-semibold text-primary">
            {checkedCount} of {totalItems} completed
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-accent/20">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

