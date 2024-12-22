import { Content } from '@radix-ui/react-dialog'
import { Type } from 'lucide-react'

type CreateGoalProps = {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalProps) {
  await fetch('http://localhost:3333/goals/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  })
}
