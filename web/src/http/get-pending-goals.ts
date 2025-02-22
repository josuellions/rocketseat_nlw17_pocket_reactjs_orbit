type PendingGoalsProps = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoal(): Promise<PendingGoalsProps> {
  const response = await fetch('http://localhost:3333/goals/pending-goals')
  const data = await response.json()
  return data.pendingGoals
}
