type GoalsPerDayProps = Record<
  string,
  {
    id: string
    title: string
    completedAt: string
  }[]
>

interface SummaryProps {
  completed: number
  total: number
  goalsPerDay: GoalsPerDayProps
}

export async function getSummary(): Promise<SummaryProps> {
  const response = await fetch('http://192.168.7.11:3333/summary')
  const data = await response.json()

  return data.summary
}
