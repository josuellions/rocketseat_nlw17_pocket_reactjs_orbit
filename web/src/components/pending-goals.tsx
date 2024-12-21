import { Plus } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

import { OutlineButton } from './ui/outline-button'
import { getPendingGoal } from '../http/get-pending-goals'

export function PendingGoals() {
  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoal,
    staleTime: 1000 * 60, //60 segundos
  })

  if (!data) {
    return null
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {data.map(goal => (
        <OutlineButton key={goal.id}>
          <Plus className="size-4 text-zinc-600" />
          {goal.title}
        </OutlineButton>
      ))}
    </div>
  )
}
