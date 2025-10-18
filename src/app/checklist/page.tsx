"use client"

import { useState } from "react"
import ChecklistSection from "../../components/checklist-section"
import Header from "../../components/header"
import ProgressBar from "../../components/progress-bar"

const sections = [
  {
    id: 1,
    title: "Mindset & Integrity",
    icon: "🧠",
    items: [
      "I will stop blaming others and take responsibility for my actions.",
      "I will not cheat, steal,or support dishonesty even in small matters.",
      "I will treat others with respect, regardless of tribe, religion, or background.",
      "I will speak and act with truth not deceit, lies, or shortcuts.",
    ],
  },
  {
    id: 2,
    title: "Politics & Corruption",
    icon: "🗳️",
    items: [
      "I will never sell my vote for money, food, or favors.",
      "I will vote for leaders based on character and competence not tribe or religion.",
      "I will not take or give bribes in any form.",
      "I will educate at least one person about the danger of corruption.",
    ],
  },
  {
    id: 3,
    title: "Unity & Community",
    icon: "🤝",
    items: [
      "I will promote peace and unity wherever I am school, work, or neighborhood.",
      "I will not share or support tribal, religious, or political hate messages.",
      "I will help others when I can kindness is strength.",
    ],
  },
  {
    id: 4,
    title: "Personal Responsibility",
    icon: "💪",
    items: [
      "I will keep my environment clean and orderly corruption starts with disorder.",
      "I will be punctual, reliable, and hardworking these are forms of patriotism.",
      "I will do at least one positive act for my community every month.",
    ],
  },
  {
    id: 5,
    title: "Accountability",
    icon: "📋",
    items: [
      "I will reflect every week: Did I build Nigeria today or break it?",
      "I will correct myself where I fail and keep trying.",
      "I will remind myself: If I do wrong, I become part of the problem I complain about.",
    ],
  },
]

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const handleCheck = (itemId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }

  const totalItems = sections.reduce((sum, section) => sum + section.items.length, 0)
  const checkedCount = Object.values(checkedItems).filter(Boolean).length
  const progress = (checkedCount / totalItems) * 100

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-950 dark:via-emerald-950/20 dark:to-teal-950/20">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-emerald-300/30 mix-blend-multiply blur-xl filter dark:bg-emerald-500/10" />
        <div className="animation-delay-2000 absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-teal-300/30 mix-blend-multiply blur-xl filter dark:bg-teal-500/10" />
        <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-cyan-300/30 mix-blend-multiply blur-xl filter dark:bg-cyan-500/10" />
      </div>

      <div className="relative">
        <Header />
        <ProgressBar progress={progress} checkedCount={checkedCount} totalItems={totalItems} />

        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {/* Hero Section */}
          <div className="mb-12 text-center sm:mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur-sm dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Building a Better Nigeria Together
            </div>

            <h1 className="mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              The NURA Commitment
            </h1>

            <p className="mx-auto max-w-2xl text-balance text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg md:text-xl">
              A personal pledge to build integrity, unity, and accountability in our nation.
              <span className="mt-2 block font-semibold text-emerald-600 dark:text-emerald-400">
                Every commitment you make creates ripples of change.
              </span>
            </p>
          </div>

          {/* Checklist Sections */}
          <div className="space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <div key={section.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ChecklistSection section={section} checkedItems={checkedItems} onCheck={handleCheck} />
              </div>
            ))}
          </div>

          {/* Completion Card */}
          <div className="mt-12 sm:mt-16">
            <div className="group relative overflow-hidden rounded-3xl border border-emerald-200/50 bg-gradient-to-br from-white/90 via-emerald-50/50 to-teal-50/50 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl dark:border-emerald-800/50 dark:from-slate-900/90 dark:via-emerald-950/50 dark:to-teal-950/50 sm:p-10">
              {/* Decorative elements */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-tr from-cyan-400/20 to-emerald-400/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />

              <div className="relative text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-3xl shadow-lg">
                  {checkedCount === totalItems ? "🎉" : "💚"}
                </div>

                <p className="text-balance text-lg font-semibold leading-relaxed text-slate-800 dark:text-slate-100 sm:text-xl">
                  {checkedCount === totalItems ? (
                    <>
                      <span className="block text-2xl font-bold text-emerald-600 dark:text-emerald-400 sm:text-3xl">
                        Congratulations!
                      </span>
                      <span className="mt-2 block">You've committed to building Nigeria! Keep the momentum going.</span>
                    </>
                  ) : (
                    <>
                      <span className="block text-emerald-600 dark:text-emerald-400">You're making progress!</span>
                      <span className="mt-2 block text-slate-600 dark:text-slate-300">
                        Complete {totalItems - checkedCount} more{" "}
                        {totalItems - checkedCount === 1 ? "commitment" : "commitments"} to finish your pledge.
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-12 text-center">
            <p className="text-balance text-sm italic text-slate-500 dark:text-slate-400">
              "Change begins with me. Together, we build the Nigeria we dream of."
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
