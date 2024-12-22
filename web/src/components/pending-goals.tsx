import { Plus } from 'lucide-react'
import { useQuery, useQueryClient } from '@tanstack/react-query'

import { OutlineButton } from './ui/outline-button'
import { getPendingGoal } from '../http/get-pending-goals'
import { createGoalCompletion } from '../http/create-goal-completion'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoal,
    staleTime: 1000 * 60, //60 segundos
  })

  if (!data) {
    return null
  }

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {data.map(goal => (
        <OutlineButton
          key={goal.id}
          onClick={() => handleCompleteGoal(goal.id)}
          disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
        >
          <Plus className="size-4 text-zinc-600" />
          {goal.title}
        </OutlineButton>
      ))}
    </div>
  )
}
