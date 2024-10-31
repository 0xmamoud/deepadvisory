import { stats } from "@/lib/constant"

export function About() {
  return (
    <section className="max-container">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {
            stats.map((stat, index) => (
              <StatCard key={index} number={stat.number} text={stat.text} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, text }: { number: string, text: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-sage-green">{number}</div>
      <div className="mt-2 text-sm sm:text-base text-gray-300">{text}</div>
    </div>
  )
}


