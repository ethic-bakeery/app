export default function Header() {
  return (
    <header className="border-b border-accent/10 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <span className="text-lg font-bold text-primary-foreground">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">NURA</h1>
              <p className="text-xs text-muted-foreground">Nigerian Unity and Rights Advocacy</p>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-foreground">Building a Better Nation</p>
            <p className="text-xs text-muted-foreground">One commitment at a time</p>
          </div>
        </div>
      </div>
    </header>
  )
}

